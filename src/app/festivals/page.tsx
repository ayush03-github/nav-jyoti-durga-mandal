'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { getAllFestivals } from '@/lib/data';
import { FestivalCard } from '@/components/FestivalCard';
import { CategoryHeader } from '@/components/CategoryHeader';

export default function FestivalsPage() {
  const { language, t } = useLanguage();
  const festivals = getAllFestivals();

  const breadcrumbs = [
    { label: language === 'hi' ? 'पर्व एवं उत्सव' : 'Festivals' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <CategoryHeader
        breadcrumbs={breadcrumbs}
        title={language === 'hi' ? 'पर्व एवं उत्सव विशेष संग्रह' : 'Festival Special Collections'}
        subtitle={language === 'hi' ? 'नवरात्रि, जन्माष्टमी, महाशिवरात्रि, गणेश चतुर्थी, दीपावली एवं श्री राम नवमी के पावन पर्वों पर विशेष भजन व आरतियों का संग्रह।' : 'Special curated collections for holy festivals including Navratri, Shivratri, Janmashtami, and Diwali.'}
        count={festivals.length}
        countLabel={language === 'hi' ? 'पर्व संग्रह' : 'festivals'}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
        {festivals.map((festival) => (
          <FestivalCard key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  );
}
