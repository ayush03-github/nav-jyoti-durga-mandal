import { Metadata } from 'next';
import { getContentByType } from '@/lib/data';
import { CategoryListingView } from '@/components/CategoryListingView';

export const metadata: Metadata = {
  title: 'पावन श्लोक संग्रह (Shlok Lyrics & Meaning in Hindi) | NJDM',
  description: 'गुरु वंदना, शांति पाठ, श्रीमद्भगवद्गीता के श्लोक एवं प्रार्थना श्लोकों के सरल भावार्थ। Explore sacred Sanskrit and Hindi shloks.',
};

export default function ShloksPage() {
  const shloks = getContentByType('shlok');

  return (
    <CategoryListingView
      type="shlok"
      items={shloks}
      titleHi="पावन श्लोक संग्रह"
      titleEn="Sacred Shloks Collection"
      descHi="भगवद्गीता, उपनिषदों एवं सनातन शास्त्रों के कल्याणकारी श्लोक व उनके सरल अर्थ।"
      descEn="Verses of eternal wisdom, universal peace, and devotion with clear Hindi meanings."
    />
  );
}
