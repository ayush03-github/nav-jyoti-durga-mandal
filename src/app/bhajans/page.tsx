import { Metadata } from 'next';
import { getContentByType } from '@/lib/data';
import { CategoryListingView } from '@/components/CategoryListingView';

export const metadata: Metadata = {
  title: 'हिंदी भजन संग्रह (Bhajan Lyrics in Hindi) | NJDM',
  description: 'भगवान के पावन भजन, कृष्ण भजन, हनुमान भजन, शिव भजन, माता के भजन आदि के प्रामाणिक लिरिक्स। Explore devotional bhajan lyrics in Hindi.',
};

export default function BhajansPage() {
  const bhajans = getContentByType('bhajan');

  return (
    <CategoryListingView
      type="bhajan"
      items={bhajans}
      titleHi="हिंदी भजन संग्रह"
      titleEn="Devotional Bhajans Collection"
      descHi="भगवान श्री कृष्ण, श्री हनुमान, शिव शम्भू, माँ दुर्गा एवं श्री राम के पावन भक्ति भजनों के सम्पूर्ण लिरिक्स।"
      descEn="Explore authentic devotional bhajan lyrics in Hindi dedicated to various Hindu deities."
    />
  );
}
