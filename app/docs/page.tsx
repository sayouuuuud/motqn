import { redirect } from 'next/navigation'

export default async function DocsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams
  
  if (lang) {
    redirect(`/docs/getting-started?lang=${lang}`)
  } else {
    redirect('/docs/getting-started')
  }
}
