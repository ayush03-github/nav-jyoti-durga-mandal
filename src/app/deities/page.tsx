'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { getAllDeities } from '@/lib/data';
import { DeityCard } from '@/components/DeityCard';
import { CategoryHeader } from '@/components/CategoryHeader';

export default function DeitiesPage() {
  const { language, t } = useLanguage();
  const deities = getAllDeities();

  const breadcrumbs = [
    { label: language === 'hi' ? 'देवी-देवता' : 'Deities' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <CategoryHeader
        breadcrumbs={breadcrumbs}
        title={language === 'hi' ? 'समस्त देवी-देवता संग्रह' : 'Browse by Deity'}
        subtitle={language === 'hi' ? 'माँ दुर्गा, श्री हनुमान, भगवान शिव, श्री कृष्ण, श्री गणेश एवं प्रभु श्री राम के अनुसार समस्त भजन, आरती व चालीसा देखें।' : 'Explore all devotional bhajans, aartis, chalisas, and mantras categorized by deity.'}
        count={deities.length}
        countLabel={language === 'hi' ? 'ईष्ट देव' : 'deities'}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-5xl">
        {deities.map((deity) => (
          <DeityCard key={deity.id} deity={deity} />
        ))}
      </div>
    </div>
  );
}
