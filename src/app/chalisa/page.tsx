import { Metadata } from 'next';
import { getContentByType } from '@/lib/data';
import { CategoryListingView } from '@/components/CategoryListingView';

export const metadata: Metadata = {
  title: 'चालीसा संग्रह (Chalisa Lyrics in Hindi) | NJDM',
  description: 'हनुमान चालीसा, श्री दुर्गा चालीसा, शिव चालीसा, गणेश चालीसा आदि के शुद्ध एवं प्रामाणिक लिरिक्स। Explore divine Chalisa Sangrah in Hindi.',
};

export default function ChalisaPage() {
  const chalisas = getContentByType('chalisa');

  return (
    <CategoryListingView
      type="chalisa"
      items={chalisas}
      titleHi="चालीसा संग्रह"
      titleEn="Divine Chalisa Sangrah"
      descHi="समस्त मनोकामना सिद्धि एवं संकट निवारक चालीस चौपाइयों के पावन पाठ।"
      descEn="Powerful 40-verse devotional hymns dedicated to deities in authentic Hindi."
    />
  );
}
