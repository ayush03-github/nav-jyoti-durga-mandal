'use client';

import React from 'react';
import Link from 'next/link';
import { Deity } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';

interface DeityCardProps {
  deity: Deity;
}

export const DeityCard: React.FC<DeityCardProps> = ({ deity }) => {
  const { language } = useLanguage();
  const name = language === 'hi' ? deity.name : deity.englishName;
  const desc = language === 'hi' ? deity.description : deity.descriptionEn;

  return (
    <Link
      href={`/deities/${deity.slug}`}
      className="group block w-full bg-[#faefe7] hover:bg-[#f5e1d4] active:bg-[#edd0bf] rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 transition-colors duration-150 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="text-sm sm:text-base font-medium text-[#2e2623] group-hover:text-black transition-colors font-devanagari leading-snug truncate">
          {name}
        </div>
        {desc && (
          <div className="text-xs sm:text-[13px] text-[#786a63] group-hover:text-[#524640] transition-colors font-devanagari leading-tight truncate">
            {desc}
          </div>
        )}
      </div>
    </Link>
  );
};
