'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck, HeartHandshake, BookOpen, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { language, t } = useLanguage();

  const breadcrumbs = [
    { label: language === 'hi' ? 'परिचय' : 'About NJDM' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <div className="bg-cream-50 rounded-3xl border border-cream-200/90 p-6 sm:p-10 shadow-devotional text-center mb-10 relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron-500 to-maroon-700 text-white mx-auto flex items-center justify-center text-3xl font-bold font-heading shadow-md mb-4">
          ॐ
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-devanagari text-sacred-900 mb-2">
          {language === 'hi' ? 'नव ज्योति दुर्गा मंडल (NJDM)' : 'Nav Jyoti Durga Mandal (NJDM)'}
        </h1>

        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-saffron-700 mb-4">
          {language === 'hi' ? 'भक्ति साहित्य एवं पावन संकीर्तन संग्रह' : 'Devotional Literature & Sacred Chants Platform'}
        </p>

        <p className="text-sm sm:text-base text-sacred-700 leading-relaxed font-devanagari max-w-2xl mx-auto">
          {language === 'hi'
            ? 'नव ज्योति दुर्गा मंडल एक समर्पित आध्यात्मिक मंच है, जो सनातन परंपरा के पावन भजनों, आरतियों, चालीसाओं, मंत्रों एवं स्तोत्रों को उनके विशुद्ध एवं प्रामाणिक स्वरूप में भक्तों तक पहुंचाने हेतु कृतसंकल्पित है।'
            : 'Nav Jyoti Durga Mandal is a dedicated devotional platform committed to preserving and presenting authentic Hindi bhajans, aartis, chalisas, and Vedic chants in their purest form.'}
        </p>
      </div>

      {/* Purpose & Principles */}
      <div className="space-y-8">
        
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6 shadow-devotional-card">
            <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-devanagari text-sacred-900 mb-2">
              {language === 'hi' ? 'प्रामाणिक पाठ' : 'Authentic Lyrics'}
            </h3>
            <p className="text-xs sm:text-sm text-sacred-600 leading-relaxed font-devanagari">
              {language === 'hi'
                ? 'सभी भजन एवं आरतियों के शब्द पारंपरिक व मूल स्वरूप में संरक्षित हैं, बिना किसी अनावश्यक फेरबदल के।'
                : 'All lyrics preserve traditional wording, line breaks, and sacred Sanskrit/Devanagari character integrity.'}
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6 shadow-devotional-card">
            <div className="w-10 h-10 rounded-xl bg-maroon-100 text-maroon-700 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-devanagari text-sacred-900 mb-2">
              {language === 'hi' ? 'सुगम पठन अनुभव' : 'Peaceful Reading'}
            </h3>
            <p className="text-xs sm:text-sm text-sacred-600 leading-relaxed font-devanagari">
              {language === 'hi'
                ? 'शांत, विज्ञापन-रहित एवं स्पष्ट देवनागरी फॉन्ट के साथ साधना व नित्य पाठ के लिए अनुकूलित।'
                : 'Calm, clutter-free typography with adjustable font size, fast search, and one-click copy/share tools.'}
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6 shadow-devotional-card">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-devanagari text-sacred-900 mb-2">
              {language === 'hi' ? 'संस्कृति संरक्षण' : 'Cultural Heritage'}
            </h3>
            <p className="text-xs sm:text-sm text-sacred-600 leading-relaxed font-devanagari">
              {language === 'hi'
                ? 'नवरात्रि, जन्माष्टमी, शिवरात्रि आदि पावन पर्वों के विशेष संकलनों को सहजता से उपलब्ध कराना।'
                : 'Dedicated festival collections celebrating major Hindu festivals and divine deity traditions.'}
            </p>
          </div>
        </div>

        {/* Content Preservation Policy */}
        <section className="bg-cream-100/70 rounded-3xl border border-cream-300 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold font-devanagari text-sacred-900 mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-saffron-600" />
            <span>{language === 'hi' ? 'हमारी निष्ठा एवं संकल्प' : 'Our Dedication'}</span>
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-sacred-700 font-devanagari">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'hi' ? 'भक्ति गीतों और स्तुतियों की पवित्रता को सर्वोपरि रखना।' : 'Preserving the reverence and sanctity of devotional songs and hymns.'}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'hi' ? 'मोबाइल, टैबलेट व कंप्यूटर पर निर्बाध व तीव्र गति से पठन सुविधा प्रदान करना।' : 'Providing fast, mobile-first, and accessible reading across all devices.'}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'hi' ? 'द्विभाषी (हिंदी एवं अंग्रेजी) इंटरफ़ेस के साथ सभी आयु वर्ग के भक्तों के लिए सरल संचालन।' : 'Bilingual navigation empowering readers to switch effortlessly between Hindi and English.'}</span>
            </li>
          </ul>
        </section>

        {/* Official Information Placeholder Note */}
        <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-xs text-sacred-500 italic">
          // TODO: Official contact details, mandal history, address and executive members information will be updated upon official release.
        </div>

      </div>
    </div>
  );
}
