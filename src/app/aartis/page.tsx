import { Metadata } from 'next';
import { getContentByType } from '@/lib/data';
import { CategoryListingView } from '@/components/CategoryListingView';

export const metadata: Metadata = {
  title: 'आरती संग्रह (Aarti Lyrics in Hindi) | NJDM',
  description: 'समस्त देवी-देवताओं की पावन आरती संग्रह, जय गणेश देवा, ॐ जय जगदीश हरे, जय अम्बे गौरी, हनुमान आरती आदि के प्रामाणिक लिरिक्स।',
};

export default function AartisPage() {
  const aartis = getContentByType('aarti');

  return (
    <CategoryListingView
      type="aarti"
      items={aartis}
      titleHi="पावन आरती संग्रह"
      titleEn="Sacred Aarti Sangrah"
      descHi="दैनिक एवं उत्सव पूजन के लिए प्रमुख देवी-देवताओं की सम्पूर्ण प्रामाणिक आरतियां।"
      descEn="Complete authentic collection of daily and festival prayer aartis in Hindi."
    />
  );
}
