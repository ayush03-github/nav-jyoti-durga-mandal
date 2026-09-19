'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { LanguageToggle } from './LanguageToggle';
import { Heart, Sparkles, Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const categories = [
    { href: '/bhajans', labelKey: 'bhajans' },
    { href: '/aartis', labelKey: 'aartis' },
    { href: '/chalisa', labelKey: 'chalisa' },
  ];

  // const exploreLinks = [
  //   { href: '/deities', labelKey: 'deities' },
  //   { href: '/festivals', labelKey: 'festivals' },
  //   { href: '/search', labelKey: 'search' },
  //   { href: '/about', labelKey: 'about' },
  // ];

  return (
    <footer className="bg-gradient-to-b from-cream-100 to-cream-200/90 border-t border-cream-300 text-sacred-800 pt-12 pb-24 sm:pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-cream-300/80">

          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-maroon-700 flex items-center justify-center text-white font-bold font-heading text-xl shadow-md">
                ॐ
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-sacred-900 leading-tight">
                  {t('siteTitle')}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-sacred-600 leading-relaxed font-devanagari">
              {t('footerTagline')}
            </p>

            <div className="pt-2">
              <LanguageToggle />
            </div>
          </div>

          {/* Devotional Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-maroon-800 mb-4 font-devanagari flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-saffron-600" />
              <span>{t('categories')}</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sacred-600 hover:text-maroon-700 hover:underline transition-colors block py-0.5"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore & Collections */}
          {/* <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-maroon-800 mb-4 font-devanagari flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-saffron-600" />
              <span>{t('quickLinks')}</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sacred-600 hover:text-maroon-700 hover:underline transition-colors block py-0.5"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Organization & Respect Note */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-maroon-800 font-devanagari">
              {t('devotionalPurpose')}
            </h4>
            <p className="text-xs text-sacred-600 leading-relaxed">
              {language === 'hi'
                ? 'यह वेबसाइट नव ज्योति दुर्गा मंडल के भक्ति साहित्य, भजन व आरतियों के पठन एवं साधना हेतु समर्पित है। समस्त पाठ प्रामाणिक व पारंपरिक स्वरूप में सुरक्षित हैं।'
                : 'Dedicated to the devotional literature, bhajans, and hymns of Nav Jyoti Durga Mandal for spiritual reading, worship, and preservation.'
              }
            </p>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sacred-500">
          <p>{t('copyrightNotice')}</p>
        </div>
      </div>
    </footer>
  );
};
