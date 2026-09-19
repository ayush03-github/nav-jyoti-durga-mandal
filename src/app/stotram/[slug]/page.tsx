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
  const items = getContentByType('stotram');
  return items.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = getContentBySlug('stotram', params.slug);
  if (!item) return { title: 'Stotram Not Found | NJDM' };

  return {
    title: `${item.title} - Hindi Lyrics | NJDM`,
    description: `Read ${item.title} in Hindi and discover related devotional content from NJDM.`,
    keywords: item.keywords,
    openGraph: {
      title: `${item.title} - Hindi Lyrics | NJDM`,
      description: item.description,
      type: 'article',
    }
  };
}

export default function StotramDetailPage({ params }: PageProps) {
  const item = getContentBySlug('stotram', params.slug);
  if (!item) notFound();

  return <LyricsReader item={item} />;
}
