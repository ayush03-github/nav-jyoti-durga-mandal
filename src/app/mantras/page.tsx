import { Metadata } from 'next';
import { getContentByType } from '@/lib/data';
import { CategoryListingView } from '@/components/CategoryListingView';

export const metadata: Metadata = {
  title: 'पावन मंत्र संग्रह (Mantra Lyrics in Hindi) | NJDM',
  description: 'गायत्री मंत्र, महामृत्युंजय मंत्र, दुर्गा मंत्र, गणेश मंत्र आदि के वैदिक पाठ एवं सरल भावार्थ। Explore sacred mantras with Hindi meanings.',
};

export default function MantrasPage() {
  const mantras = getContentByType('mantra');

  return (
    <CategoryListingView
      type="mantra"
      items={mantras}
      titleHi="पावन मंत्र संग्रह"
      titleEn="Sacred Mantras Collection"
      descHi="आत्मिक शांति, सकारात्मक ऊर्जा एवं ज्ञान प्रदायक वैदिक महामंत्र एवं सरल भावार्थ।"
      descEn="Sacred Vedic mantras and meditative chants presented with easy devotional meanings."
    />
  );
}
