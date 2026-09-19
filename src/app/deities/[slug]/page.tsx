import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDeities, getDeityBySlug, getContentByDeity } from '@/lib/data';
import { DeityDetailView } from '@/components/DeityDetailView';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const deities = getAllDeities();
  return deities.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const deity = getDeityBySlug(params.slug);
  if (!deity) return { title: 'Deity Not Found | NJDM' };

  return {
    title: `${deity.name} (${deity.englishName}) - भजन, आरती, चालीसा एवं मंत्र | NJDM`,
    description: `Explore sacred bhajans, aartis, chalisas, mantras and stotrams dedicated to ${deity.englishName} (${deity.name}) from Nav Jyoti Durga Mandal.`,
    keywords: [`${deity.englishName} bhajan`, `${deity.englishName} aarti`, `${deity.englishName} chalisa`, deity.name],
    openGraph: {
      title: `${deity.name} (${deity.englishName}) Devotional Sangrah | NJDM`,
      description: deity.description,
    }
  };
}

export default function DeityDetailPage({ params }: PageProps) {
  const deity = getDeityBySlug(params.slug);
  if (!deity) notFound();

  const items = getContentByDeity(deity.slug);

  return <DeityDetailView deity={deity} items={items} />;
}
