'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  FileText,
  Languages,
  Menu,
  Search,
  X,
  Code2,
  Terminal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import { platformDocs, platformDocGroups, type PlatformDocItem } from '@/lib/docs/platform-docs-data'

type DocsLocale = 'ar' | 'en'

const ui = {
  ar: {
    brandTitle: 'مُتْقِن',
    docSubTitle: 'التوثيق الفني والبرمجي',
    home: 'التوثيق',
    back: 'العودة للمنصة',
    search: 'ابحث في التوثيق والجداول والنظام...',
    searchTitle: 'البحث في التوثيق',
    noResults: 'لا توجد نتائج مطابقة لبحثك.',
    tocTitle: 'في هذه الصفحة',
    prev: 'السابق',
    next: 'التالي',
    menu: 'قائمة التوثيق',
    copyCode: 'نسخ',
    copiedCode: 'تم النسخ!',
    searchShortcut: 'ابحث عن أي قسم أو جدول أو API...',
  },
  en: {
    brandTitle: 'Motqn',
    docSubTitle: 'Technical Docs',
    home: 'Docs',
    back: 'Back to Platform',
    search: 'Search documentation...',
    searchTitle: 'Search Documentation',
    noResults: 'No matching results found.',
    tocTitle: 'On this page',
    prev: 'Previous',
    next: 'Next',
    menu: 'Menu',
    copyCode: 'Copy',
    copiedCode: 'Copied!',
    searchShortcut: 'Search any section, table or API...',
  },
}

function normalizeText(value: string) {
  return value.toLocaleLowerCase().normalize('NFKD').replace(/[ًٌٍَُِّْـ]/g, '')
}

function extractHeadings(markdown: string) {
  const lines = markdown.split('\n')
  const headings: { id: string; text: string; level: number }[] = []

  lines.forEach((line) => {
    const match = line.match(/^(#{2,3})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2].replace(/[*_~`]/g, '').trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\u0600-\u06FF\s-]/g, '')
        .replace(/\s+/g, '-')
      headings.push({ id, text, level })
    }
  })

  return headings
}

// ── Proper Syntax Highlighter ──────────────────────────────────────────────
// Token types and their colors for dark / light mode
const TOKEN_STYLES = {
  comment:   { dark: '#8b9eb5', light: '#6e7781' },
  keyword:   { dark: '#ff7b72', light: '#d73a49' },
  string:    { dark: '#7ee787', light: '#032f62' },
  number:    { dark: '#f2cc60', light: '#005cc5' },
  boolean:   { dark: '#f2cc60', light: '#005cc5' },
  operator:  { dark: '#79c0ff', light: '#005cc5' },
  property:  { dark: '#a5d6ff', light: '#e36209' },
  funcName:  { dark: '#d2a8ff', light: '#6f42c1' },
  tag:       { dark: '#7ee787', light: '#22863a' },
  punctuation: { dark: '#c9d1d9', light: '#24292e' },
  text:      { dark: '#c9d1d9', light: '#24292e' },
}

type TokenType = keyof typeof TOKEN_STYLES

interface Token {
  type: TokenType
  value: string
}

const JS_KEYWORDS = new Set([
  'import','export','from','as','default','const','let','var','function',
  'return','await','async','class','extends','new','this','typeof','instanceof',
  'if','else','for','while','do','switch','case','break','continue','try',
  'catch','finally','throw','of','in','delete','void','yield','static',
  'get','set','super','type','interface','enum','implements','declare',
  'module','namespace','abstract','readonly','private','protected','public',
])

const SQL_KEYWORDS = new Set([
  'SELECT','INSERT','UPDATE','DELETE','FROM','WHERE','JOIN','INNER','LEFT',
  'RIGHT','OUTER','ON','AND','OR','NOT','NULL','IS','IN','LIKE','AS','BY',
  'ORDER','GROUP','HAVING','LIMIT','OFFSET','CREATE','ALTER','DROP','TABLE',
  'INDEX','VIEW','TRIGGER','PROCEDURE','FUNCTION','PRIMARY','FOREIGN','KEY',
  'REFERENCES','UNIQUE','DEFAULT','CHECK','CONSTRAINT','CASCADE','SET',
  'VALUES','INTO','BEGIN','COMMIT','ROLLBACK','TRANSACTION',
  'INTEGER','VARCHAR','TEXT','BOOLEAN','TIMESTAMP','UUID','JSONB','BIGINT',
  'SERIAL','NUMERIC','FLOAT','DATE','TIME','ARRAY',
])

const HTTP_METHODS = new Set(['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'])

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = []
  let i = 0

  while (i < line.length) {
    // Single-line comment //
    if (line[i] === '/' && line[i + 1] === '/') {
      tokens.push({ type: 'comment', value: line.slice(i) })
      return tokens
    }
    // SQL comment --
    if (line[i] === '-' && line[i + 1] === '-') {
      tokens.push({ type: 'comment', value: line.slice(i) })
      return tokens
    }
    // Hash comment (python/bash)
    if (line[i] === '#') {
      tokens.push({ type: 'comment', value: line.slice(i) })
      return tokens
    }

    // Template literal `...`
    if (line[i] === '`') {
      let j = i + 1
      while (j < line.length && line[j] !== '`') {
        if (line[j] === '\\') j++
        j++
      }
      tokens.push({ type: 'string', value: line.slice(i, j + 1) })
      i = j + 1
      continue
    }

    // String ' or "
    if (line[i] === '"' || line[i] === "'") {
      const quote = line[i]
      let j = i + 1
      while (j < line.length && line[j] !== quote) {
        if (line[j] === '\\') j++
        j++
      }
      const strVal = line.slice(i, j + 1)
      
      // Check if it's a JSON/Object property key (followed by colon)
      let k = j + 1
      while (k < line.length && line[k] === ' ') k++
      
      if (k < line.length && line[k] === ':') {
        tokens.push({ type: 'property', value: strVal })
      } else {
        tokens.push({ type: 'string', value: strVal })
      }
      
      i = j + 1
      continue
    }

    // Number
    if (/[0-9]/.test(line[i]) && (i === 0 || !/[a-zA-Z_$]/.test(line[i - 1]))) {
      let j = i
      while (j < line.length && /[0-9._]/.test(line[j])) j++
      tokens.push({ type: 'number', value: line.slice(i, j) })
      i = j
      continue
    }

    // Word (keyword, identifier, function call)
    if (/[a-zA-Z_$]/.test(line[i])) {
      let j = i
      while (j < line.length && /[a-zA-Z0-9_$]/.test(line[j])) j++
      const word = line.slice(i, j)
      const wordUpper = word.toUpperCase()

      // Skip whitespace to check what follows
      let k = j
      while (k < line.length && line[k] === ' ') k++

      if (word === 'true' || word === 'false' || word === 'null' || word === 'undefined' || word === 'NaN') {
        tokens.push({ type: 'boolean', value: word })
      } else if (JS_KEYWORDS.has(word)) {
        tokens.push({ type: 'keyword', value: word })
      } else if (SQL_KEYWORDS.has(wordUpper)) {
        tokens.push({ type: 'tag', value: word })
      } else if (HTTP_METHODS.has(wordUpper) && (i === 0 || /[\s|]/.test(line[i - 1]))) {
        tokens.push({ type: 'tag', value: word })
      } else if (line[k] === '(' ) {
        // Function call
        tokens.push({ type: 'funcName', value: word })
      } else if (line[k] === ':' && line[k + 1] !== ':') {
        // Object property key
        tokens.push({ type: 'property', value: word })
      } else {
        tokens.push({ type: 'text', value: word })
      }

      i = j
      continue
    }

    // Operator / punctuation
    const ch = line[i]
    if ('=><|&!?-+*/%'.includes(ch)) {
      // Mermaid arrows and Multi-char operators
      const threeChar = line.slice(i, i + 3)
      if (['-->','==>','-.>'].includes(threeChar)) {
        tokens.push({ type: 'operator', value: threeChar })
        i += 3
        continue
      }
      
      const twoChar = line.slice(i, i + 2)
      if (['==','!=','<=','>=','=>','&&','||','??','|>','++','--','**','->','<-'].includes(twoChar)) {
        tokens.push({ type: 'operator', value: twoChar })
        i += 2
        continue
      }
      
      if ('{}[]();,.:'.includes(ch)) {
        tokens.push({ type: 'punctuation', value: ch })
      } else {
        tokens.push({ type: 'operator', value: ch })
      }
    } else if ('{}[]();,.:'.includes(ch)) {
      tokens.push({ type: 'punctuation', value: ch })
    } else {
      // whitespace or unknown
      tokens.push({ type: 'text', value: ch })
    }

    i++
  }

  return tokens
}

function HighlightedLine({ line, lineNumber, isDark }: { line: string; lineNumber: number; isDark: boolean }) {
  const tokens = tokenizeLine(line)

  return (
    <div className="flex hover:bg-white/5 rounded-sm">
      <span
        className="select-none shrink-0 pe-4 text-end font-mono text-xs"
        style={{ color: isDark ? '#3e4451' : '#d1d5db', minWidth: '2.5rem' }}
      >
        {lineNumber}
      </span>
      <span className="whitespace-pre font-mono text-xs sm:text-sm leading-relaxed flex-1">
        {tokens.map((tok, idx) => {
          const colors = TOKEN_STYLES[tok.type]
          const color = isDark ? colors.dark : colors.light
          const style: React.CSSProperties = { color }
          if (tok.type === 'comment') style.fontStyle = 'italic'
          return (
            <span key={idx} style={style}>
              {tok.value}
            </span>
          )
        })}
      </span>
    </div>
  )
}

function MarkdownViewer({ content, locale }: { content: string; locale: DocsLocale }) {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { theme, systemTheme } = useTheme()
  
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let inCodeBlock = false
    let codeLanguage = ''
    let codeBuffer: string[] = []
    let inTable = false
    let tableRows: string[][] = []

    const flushTable = (key: string) => {
      if (tableRows.length === 0) return
      const headers = tableRows[0]
      const body = tableRows.slice(1).filter((row) => !row.every((cell) => /^[:\s-]+$/.test(cell)))

      elements.push(
        <div key={key} className="my-6 w-full overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 shadow-xs">
          <table className="w-full text-start text-xs sm:text-sm">
            <thead className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 font-bold text-neutral-900 dark:text-neutral-100">
              <tr>
                {headers.map((cell, idx) => (
                  <th key={idx} className="px-4 py-3 text-start border-e border-neutral-200 dark:border-neutral-800 last:border-e-0 font-bold">
                    {parseInlineMarkdown(cell.trim())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {body.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-start border-e border-neutral-200 dark:border-neutral-800 last:border-e-0 text-neutral-800 dark:text-neutral-200 font-medium">
                      {parseInlineMarkdown(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      tableRows = []
      inTable = false
    }

    const parseInlineMarkdown = (inlineText: string): React.ReactNode => {
      const parts: React.ReactNode[] = []
      let lastIndex = 0

      const inlineRegex = /(`[^`]+`|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g
      let match: RegExpExecArray | null

      while ((match = inlineRegex.exec(inlineText)) !== null) {
        if (match.index > lastIndex) {
          parts.push(inlineText.substring(lastIndex, match.index))
        }

        const fullMatch = match[0]
        if (fullMatch.startsWith('`')) {
          const codeVal = fullMatch.slice(1, -1).trim()
          const words = codeVal.split(' ')
          const firstWord = words[0].toUpperCase()

          // HTTP Methods Badge (Vercel Style)
          const isMethod = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'DEL'].includes(firstWord)
          
          if (isMethod) {
            const methodColors: Record<string, string> = {
              GET: 'bg-emerald-100 text-emerald-800 dark:bg-[#003017] dark:text-[#00E55B]',
              POST: 'bg-blue-100 text-blue-800 dark:bg-[#002868] dark:text-[#2F81F7]',
              PUT: 'bg-amber-100 text-amber-800 dark:bg-[#4D2300] dark:text-[#F59E0B]',
              PATCH: 'bg-amber-100 text-amber-800 dark:bg-[#4D2300] dark:text-[#F59E0B]',
              DELETE: 'bg-rose-100 text-rose-800 dark:bg-[#4A041B] dark:text-[#F43F5E]',
              DEL: 'bg-rose-100 text-rose-800 dark:bg-[#4A041B] dark:text-[#F43F5E]',
            }

            if (words.length > 1) {
              // Format: GET /api/...
              const restOfCode = words.slice(1).join(' ')
              parts.push(
                <code
                  key={match.index}
                  className="inline-flex items-center rounded border border-neutral-200 dark:border-neutral-800/50 bg-neutral-100/50 dark:bg-[#0A0E17] font-mono text-xs sm:text-sm font-normal dir-ltr mx-0.5 shadow-2xs whitespace-pre-wrap break-words overflow-hidden"
                >
                  <span className={cn('px-2 py-1 font-sans text-[11px] sm:text-xs font-medium tracking-wide border-r border-neutral-200 dark:border-neutral-800/50', methodColors[firstWord])}>
                    {firstWord}
                  </span>
                  <span className="px-2 py-1 text-neutral-700 dark:text-neutral-300">
                    {restOfCode}
                  </span>
                </code>
              )
            } else {
              // Format: GET (standalone)
              parts.push(
                <span
                  key={match.index}
                  className={cn(
                    'inline-flex items-center rounded px-2 py-0.5 font-sans text-[11px] sm:text-xs font-medium tracking-wide dir-ltr shadow-2xs mx-0.5 border border-neutral-200 dark:border-transparent',
                    methodColors[firstWord]
                  )}
                >
                  {firstWord}
                </span>
              )
            }
          } else {
            // Apply tokenizer to inline code
            const tokens = tokenizeLine(codeVal)
            parts.push(
              <code
                key={match.index}
                className="inline rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-1.5 py-0.5 font-mono text-xs sm:text-sm font-normal dir-ltr mx-0.5 shadow-2xs break-words box-decoration-clone"
              >
                {tokens.map((tok, idx) => {
                  const colors = TOKEN_STYLES[tok.type]
                  const color = isDark ? colors.dark : colors.light
                  const style: React.CSSProperties = { color }
                  if (tok.type === 'comment') style.fontStyle = 'italic'
                  return (
                    <span key={idx} style={style}>
                      {tok.value}
                    </span>
                  )
                })}
              </code>
            )
          }
        } else if (fullMatch.startsWith('**')) {
          parts.push(
            <strong key={match.index} className="font-bold text-neutral-900 dark:text-neutral-100">
              {match[2]}
            </strong>
          )
        } else if (fullMatch.startsWith('[')) {
          parts.push(
            <a
              key={match.index}
              href={match[4]}
              className="font-semibold text-sky-600 dark:text-sky-400 underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {match[3]}
            </a>
          )
        }

        lastIndex = match.index + fullMatch.length
      }

      if (lastIndex < inlineText.length) {
        parts.push(inlineText.substring(lastIndex))
      }

      return parts.length === 1 ? parts[0] : parts
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      // Code Block Start/End
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          const codeText = codeBuffer.join('\n')
          const blockId = `code-${i}`
          elements.push(
            <div key={blockId} className="group relative my-6 overflow-hidden rounded-xl border border-neutral-800 bg-[#090d16] text-neutral-100 shadow-md">
              <div className="flex items-center justify-between border-b border-neutral-800 bg-[#0d1322] px-4 py-2.5 text-xs text-neutral-400">
                <div className="flex items-center gap-2 font-mono uppercase text-sky-400 font-semibold dir-ltr">
                  <Code2 className="size-4 text-sky-400" />
                  <span>{codeLanguage || 'code'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(codeText, blockId)}
                  className="flex items-center gap-1.5 rounded-md border border-neutral-700 bg-[#1e293b] px-2.5 py-1 text-xs text-neutral-300 hover:bg-[#334155] hover:text-white transition-colors cursor-pointer"
                >
                  {copiedId === blockId ? (
                    <>
                      <Check className="size-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">{ui[locale].copiedCode}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-neutral-400" />
                      <span>{ui[locale].copyCode}</span>
                    </>
                  )}
                </button>
              </div>
              <div className="overflow-x-auto p-4 font-mono text-xs sm:text-sm leading-relaxed text-neutral-200 dir-ltr bg-[#0d1322]">
                <div className="w-full min-w-max">
                  {codeBuffer.map((cLine, idx) => (
                    <HighlightedLine key={idx} line={cLine} lineNumber={idx + 1} isDark={true} />
                  ))}
                </div>
              </div>
            </div>
          )
          codeBuffer = []
          inCodeBlock = false
        } else {
          if (inTable) flushTable(`table-${i}`)
          inCodeBlock = true
          codeLanguage = line.replace('```', '').trim()
        }
        continue
      }

      if (inCodeBlock) {
        codeBuffer.push(line)
        continue
      }

      // Markdown Tables
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        if (!inTable) inTable = true
        const cells = line
          .trim()
          .slice(1, -1)
          .split('|')
        tableRows.push(cells)
        continue
      } else if (inTable) {
        flushTable(`table-${i}`)
      }

      // Horizontal rule
      if (line.trim() === '---' || line.trim() === '***') {
        elements.push(<hr key={`hr-${i}`} className="my-8 border-neutral-200 dark:border-neutral-800" />)
        continue
      }

      // Headings
      if (line.startsWith('# ')) {
        const hText = line.replace('# ', '').trim()
        elements.push(
          <h1 key={`h1-${i}`} className="mb-4 text-balance font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-100 tracking-tight">
            {parseInlineMarkdown(hText)}
          </h1>
        )
        continue
      }
      if (line.startsWith('## ')) {
        const hText = line.replace('## ', '').trim()
        const id = hText
          .toLowerCase()
          .replace(/[^\w\u0600-\u06FF\s-]/g, '')
          .replace(/\s+/g, '-')
        elements.push(
          <h2
            key={`h2-${i}`}
            id={id}
            className="mb-4 mt-10 scroll-mt-20 border-b border-neutral-200 dark:border-neutral-800 pb-2.5 text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight"
          >
            {parseInlineMarkdown(hText)}
          </h2>
        )
        continue
      }
      if (line.startsWith('### ')) {
        const hText = line.replace('### ', '').trim()
        const id = hText
          .toLowerCase()
          .replace(/[^\w\u0600-\u06FF\s-]/g, '')
          .replace(/\s+/g, '-')
        elements.push(
          <h3 key={`h3-${i}`} id={id} className="mb-3 mt-8 scroll-mt-20 text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {parseInlineMarkdown(hText)}
          </h3>
        )
        continue
      }

      // Blockquotes / Callouts
      if (line.startsWith('> ')) {
        const qText = line.replace('> ', '').trim()
        let alertType: 'note' | 'warning' | 'tip' = 'note'
        if (qText.startsWith('[!WARNING]')) alertType = 'warning'
        if (qText.startsWith('[!TIP]')) alertType = 'tip'

        const cleanQ = qText.replace(/\[!(NOTE|WARNING|TIP)\]/, '').trim()

        elements.push(
          <div
            key={`quote-${i}`}
            className={cn(
              'my-5 rounded-xl border-s-4 p-4 text-sm leading-relaxed shadow-xs',
              alertType === 'warning'
                ? 'border-s-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-200'
                : alertType === 'tip'
                ? 'border-s-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200'
                : 'border-s-sky-500 bg-sky-500/10 text-sky-950 dark:text-sky-100'
            )}
          >
            <p>{parseInlineMarkdown(cleanQ)}</p>
          </div>
        )
        continue
      }

      // Bullet lists
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const lText = line.trim().substring(2)
        elements.push(
          <li key={`li-${i}`} className="ms-6 list-disc py-1 text-sm sm:text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
            {parseInlineMarkdown(lText)}
          </li>
        )
        continue
      }

      // Numbered lists
      if (/^\s*\d+\.\s+/.test(line)) {
        const lText = line.replace(/^\s*\d+\.\s+/, '')
        elements.push(
          <li key={`nli-${i}`} className="ms-6 list-decimal py-1 text-sm sm:text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
            {parseInlineMarkdown(lText)}
          </li>
        )
        continue
      }

      // Empty line
      if (!line.trim()) {
        continue
      }

      // Standard Paragraph
      elements.push(
        <p key={`p-${i}`} className="my-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 sm:text-base">
          {parseInlineMarkdown(line)}
        </p>
      )
    }

    if (inTable) flushTable(`table-end`)

    return elements
  }

  return <article className="markdown-body space-y-2">{renderMarkdown(content)}</article>
}

function LanguageSwitcherButton({ locale, onChange }: { locale: DocsLocale; onChange: (locale: DocsLocale) => void }) {
  const nextLocale = locale === 'ar' ? 'en' : 'ar'
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onChange(nextLocale)}
      className="gap-1.5 font-medium text-xs border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      aria-label={locale === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
    >
      <Languages className="size-4" />
      <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
    </Button>
  )
}

function SearchModal({
  locale,
  isOpen,
  onClose,
}: {
  locale: DocsLocale
  isOpen: boolean
  onClose: () => void
}) {
  const t = ui[locale]
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = normalizeText(query.trim())
    if (!q) return []

    return platformDocs
      .filter((doc) => {
        const searchableText = normalizeText(
          [doc.title[locale], doc.description[locale], doc.content[locale]].join(' ')
        )
        return searchableText.includes(q)
      })
      .slice(0, 10)
  }, [locale, query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-16 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-0 text-neutral-900 dark:text-neutral-100 shadow-2xl overflow-hidden z-10">
        <div className="flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
          <Search className="size-5 text-neutral-400 shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search}
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded-md p-1 text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 text-xs font-medium text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3">
          {query.trim().length === 0 ? (
            <p className="p-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
              {t.searchShortcut}
            </p>
          ) : results.length > 0 ? (
            <div className="flex flex-col gap-1">
              {results.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}?lang=${locale}`}
                  onClick={onClose}
                  className="flex items-start gap-3 rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors group"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 group-hover:bg-neutral-900 group-hover:text-neutral-100 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900 transition-colors">
                    <FileText className="size-4" />
                  </div>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <strong className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                      {doc.title[locale]}
                    </strong>
                    <span className="line-clamp-1 text-xs text-neutral-500 dark:text-neutral-400">
                      {doc.description[locale]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="p-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
              {t.noResults}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function Header({
  locale,
  onLocaleChange,
  onOpenSearch,
  onMenuToggle,
}: {
  locale: DocsLocale
  onLocaleChange: (locale: DocsLocale) => void
  onOpenSearch: () => void
  onMenuToggle: () => void
}) {
  const t = ui[locale]

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-neutral-900 dark:text-neutral-100"
          onClick={onMenuToggle}
          aria-label={t.menu}
        >
          <Menu className="size-5" />
        </Button>

        {/* Motqn Logo & Company Info */}
        <Link
          href={`/docs?lang=${locale}`}
          className="flex items-center gap-3 font-bold text-neutral-900 dark:text-neutral-100 hover:opacity-90 transition-opacity"
        >
          <div className="relative size-8 shrink-0 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
            <Image
              src="/logo.png"
              alt="مُتْقِن"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none">{t.brandTitle}</span>
            <span className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 leading-none mt-1">
              {t.docSubTitle}
            </span>
          </div>
        </Link>

        {/* Search Bar Trigger */}
        <div className="ms-auto flex-1 max-w-md hidden md:block">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-3.5 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="size-4 text-neutral-400" />
              <span>{t.search}</span>
            </div>
            <kbd className="pointer-events-none rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px] font-medium text-neutral-500">
              Ctrl K
            </kbd>
          </button>
        </div>

        <div className="ms-auto flex items-center gap-2 md:ms-0">
          <Button
            variant="outline"
            size="icon"
            onClick={onOpenSearch}
            className="md:hidden border-neutral-200 dark:border-neutral-800"
            aria-label={t.search}
          >
            <Search className="size-4" />
          </Button>

          <LanguageSwitcherButton locale={locale} onChange={onLocaleChange} />

          <ThemeToggle className="border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800" />

          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex gap-1.5 font-medium text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100">
            <Link href="/">
              <span>{t.back}</span>
              {locale === 'ar' ? (
                <ArrowLeft className="size-3.5" />
              ) : (
                <ArrowRight className="size-3.5" />
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function Sidebar({
  locale,
  activeSlug,
  open,
  onClose,
}: {
  locale: DocsLocale
  activeSlug: string
  open: boolean
  onClose: () => void
}) {
  const t = ui[locale]

  const groupedDocs = useMemo(() => {
    return platformDocGroups.map((group) => {
      const items = platformDocs.filter((doc) => {
        if (group.id === 'overview') return doc.slug === 'introduction' || doc.slug === 'authentication' || doc.slug === 'public-pages'
        if (group.id === 'dashboards') return doc.slug.includes('admin') || doc.slug.includes('dashboard') || doc.slug === 'supervisors'
        if (group.id === 'services') return doc.slug === 'fiqh-system' || doc.slug === 'digital-library' || doc.slug === 'community' || doc.slug === 'live-sessions-livekit' || doc.slug === 'cron-jobs'
        if (group.id === 'database') return doc.slug.startsWith('database-')
        return false
      })
      return { ...group, items }
    })
  }, [])

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 z-50 w-72 overflow-y-auto border-e border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 transition-transform duration-300 lg:sticky lg:top-16 lg:z-0 lg:block lg:h-[calc(100vh-4rem)] lg:translate-x-0',
          locale === 'ar' ? 'right-0' : 'left-0',
          open
            ? 'translate-x-0'
            : locale === 'ar'
            ? 'translate-x-full lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="mb-6 flex items-center justify-between lg:hidden border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <strong className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
            {t.menu}
          </strong>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="size-5" />
          </Button>
        </div>

        <nav aria-label={t.menu} className="flex flex-col gap-6">
          {groupedDocs.map((group) => {
            return (
              <div key={group.id} className="flex flex-col gap-2">
                <div className="px-3 text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {group.label[locale]}
                </div>

                <div className="flex flex-col gap-1 mt-0.5">
                  {group.items.map((doc) => {
                    const isActive = activeSlug === doc.slug

                    return (
                      <Link
                        key={doc.slug}
                        href={`/docs/${doc.slug}?lang=${locale}`}
                        onClick={onClose}
                        className={cn(
                          'rounded-md px-3 py-1.5 text-sm leading-relaxed transition-colors font-normal flex items-center justify-between',
                          isActive
                            ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-semibold'
                            : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/60 hover:text-neutral-900 dark:hover:text-neutral-100'
                        )}
                      >
                        <span className="truncate">{doc.title[locale]}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

function TableOfContents({
  headings,
  locale,
}: {
  headings: { id: string; text: string; level: number }[]
  locale: DocsLocale
}) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean) as HTMLElement[]

      const scrollPosition = window.scrollY + 100

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i]
        if (el.offsetTop <= scrollPosition) {
          setActiveId(el.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  if (headings.length === 0) return null

  return (
    <aside className="sticky top-20 hidden w-60 shrink-0 flex-col gap-3 overflow-y-auto p-4 xl:flex">
      <strong className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
        {ui[locale].tocTitle}
      </strong>
      <nav className="flex flex-col gap-1 border-s border-neutral-200 dark:border-neutral-800 ps-3 text-xs">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={cn(
              'block py-1 leading-normal transition-colors truncate',
              h.level === 3 ? 'ps-3 text-[11px]' : 'font-normal',
              activeId === h.id
                ? 'font-medium text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
            )}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export function DocsExplorer({ slug = 'introduction' }: { slug?: string }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const locale: DocsLocale = searchParams.get('lang') === 'en' ? 'en' : 'ar'
  const t = ui[locale]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const currentDoc = useMemo(() => {
    return platformDocs.find((doc) => doc.slug === slug) || platformDocs[0]
  }, [slug])

  const headings = useMemo(() => {
    return extractHeadings(currentDoc.content[locale])
  }, [currentDoc, locale])

  const currentIndex = platformDocs.findIndex((doc) => doc.slug === currentDoc.slug)
  const previousDoc = currentIndex > 0 ? platformDocs[currentIndex - 1] : undefined
  const nextDoc = currentIndex < platformDocs.length - 1 ? platformDocs[currentIndex + 1] : undefined

  function changeLocale(next: DocsLocale) {
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`
    router.replace(`/docs/${currentDoc.slug}?lang=${next}`, { scroll: false })
  }

  return (
    <div
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800"
      style={locale === 'en' ? { fontFamily: 'var(--font-geist), sans-serif' } : undefined}
    >
      <Header
        locale={locale}
        onLocaleChange={changeLocale}
        onOpenSearch={() => setSearchOpen(true)}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
      />

      <SearchModal
        locale={locale}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <div className="mx-auto flex max-w-7xl">
        <Sidebar
          locale={locale}
          activeSlug={currentDoc.slug}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        />

        <main className="min-w-0 flex-1 px-4 py-8 md:px-8 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <Link href={`/docs?lang=${locale}`} className="hover:text-neutral-900 dark:hover:text-neutral-100">
                {t.home}
              </Link>
              {locale === 'ar' ? (
                <ChevronLeft className="size-3.5 text-neutral-400" />
              ) : (
                <ChevronRight className="size-3.5 text-neutral-400" />
              )}
              <span className="truncate text-neutral-900 dark:text-neutral-100 font-normal">
                {currentDoc.title[locale]}
              </span>
            </nav>

            {/* Article Header */}
            <header className="mb-8 flex flex-col gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-6">
              <span className="w-fit rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                {currentDoc.groupAr && locale === 'ar'
                  ? currentDoc.groupAr
                  : currentDoc.groupEn}
              </span>
              <h1 className="text-balance font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-100 tracking-tight">
                {currentDoc.title[locale]}
              </h1>
              <p className="text-pretty text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {currentDoc.description[locale]}
              </p>
            </header>

            {/* Article & TOC Container */}
            <div className="flex gap-10">
              <div className="min-w-0 flex-1">
                <MarkdownViewer
                  content={currentDoc.content[locale]}
                  locale={locale}
                />

                {/* Pagination */}
                <nav
                  aria-label="Article navigation"
                  className="mt-14 grid gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-8 sm:grid-cols-2"
                >
                  {previousDoc ? (
                    <Link
                      href={`/docs/${previousDoc.slug}?lang=${locale}`}
                      className="group flex flex-col gap-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    >
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                        {locale === 'ar' ? (
                          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        ) : (
                          <ChevronLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                        )}
                        {t.prev}
                      </span>
                      <strong className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {previousDoc.title[locale]}
                      </strong>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextDoc && (
                    <Link
                      href={`/docs/${nextDoc.slug}?lang=${locale}`}
                      className="group flex flex-col gap-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 text-end transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    >
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-end gap-1">
                        {t.next}
                        {locale === 'ar' ? (
                          <ChevronLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                        ) : (
                          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        )}
                      </span>
                      <strong className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {nextDoc.title[locale]}
                      </strong>
                    </Link>
                  )}
                </nav>
              </div>

              {/* Table of Contents */}
              <TableOfContents headings={headings} locale={locale} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
