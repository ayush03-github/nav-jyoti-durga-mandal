import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getContentBySlug, getContentByType } from '@/lib/data';
import { LyricsReader } from '@/components/LyricsReader';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const items = getContentByType('bhajan');
  return items.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = getContentBySlug('bhajan', params.slug);
  if (!item) return { title: 'Bhajan Not Found | NJDM' };

  return {
    title: `${item.title} - Hindi Lyrics | NJDM`,
    description: `Read ${item.title} in Hindi with devotional lyrics. Explore more bhajans, aartis, chalisas and devotional content from NJDM.`,
    keywords: item.keywords,
    openGraph: {
      title: `${item.title} - Hindi Lyrics | NJDM`,
      description: item.description,
      type: 'article',
    }
  };
}

export default function BhajanDetailPage({ params }: PageProps) {
  const item = getContentBySlug('bhajan', params.slug);
  if (!item) notFound();

  return <LyricsReader item={item} />;
}
