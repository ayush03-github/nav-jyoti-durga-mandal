import { Metadata } from 'next';
import { getContentByType } from '@/lib/data';
import { CategoryListingView } from '@/components/CategoryListingView';

export const metadata: Metadata = {
  title: 'स्तोत्र संग्रह (Stotram Lyrics in Hindi) | NJDM',
  description: 'शिव ताण्डव स्तोत्र, श्री महालक्ष्म्यष्टकम्, मधुराष्टकम आदि प्रमुख स्तोत्रों के प्रामाणिक पाठ। Explore sacred Stotram collection in Hindi.',
};

export default function StotramPage() {
  const stotrams = getContentByType('stotram');

  return (
    <CategoryListingView
      type="stotram"
      items={stotrams}
      titleHi="स्तोत्र संग्रह"
      titleEn="Sacred Stotram Sangrah"
      descHi="सनातन धर्मग्रंथों में वर्णित स्तुतियों एवं दिव्य स्तोत्रों का संपूर्ण संग्रह।"
      descEn="Powerful scriptural hymns and stotrams presented with pristine lyrics."
    />
  );
}
