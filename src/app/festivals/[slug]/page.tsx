import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllFestivals, getFestivalBySlug, getContentByFestival } from '@/lib/data';
import { FestivalDetailView } from '@/components/FestivalDetailView';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const festivals = getAllFestivals();
  return festivals.map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const festival = getFestivalBySlug(params.slug);
  if (!festival) return { title: 'Festival Not Found | NJDM' };

  return {
    title: `${festival.name} (${festival.englishName}) - विशेष भजन एवं आरती संग्रह | NJDM`,
    description: `Explore sacred bhajans, aartis, and chalisas for ${festival.englishName} (${festival.name}) from Nav Jyoti Durga Mandal.`,
    keywords: [`${festival.englishName} bhajan`, `${festival.englishName} aarti`, festival.name],
    openGraph: {
      title: `${festival.name} Special Devotional Sangrah | NJDM`,
      description: festival.description,
    }
  };
}

export default function FestivalDetailPage({ params }: PageProps) {
  const festival = getFestivalBySlug(params.slug);
  if (!festival) notFound();

  const items = getContentByFestival(festival.slug);

  return <FestivalDetailView festival={festival} items={items} />;
}
