import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { DocsExplorer } from '@/components/docs/docs-explorer'
import { platformDocs } from '@/lib/docs/platform-docs-data'

export function generateStaticParams() {
  return platformDocs.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = platformDocs.find((d) => d.slug === slug)
  if (!doc) return {}
  return {
    title: `${doc.title.ar} | توثيق منصة مُتْقِن`,
    description: doc.description.ar,
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = platformDocs.find((d) => d.slug === slug)
  if (!doc) notFound()

  return (
    <Suspense fallback={<main className="min-h-screen bg-background" />}>
      <DocsExplorer slug={slug} />
    </Suspense>
  )
}
