'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ContentItem } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';
import { getAllDeities, getRelatedContent } from '@/lib/data';
import { 
  Copy, 
  Check, 
  Share2, 
  Flame, 
  ArrowLeft,
  Printer,
  ChevronRight,
  Home,
  Sparkles
} from 'lucide-react';

interface LyricsReaderProps {
  item: ContentItem;
}

export function LyricsReader({ item }: LyricsReaderProps) {
  const { language, t } = useLanguage();
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copied, setCopied] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const deities = getAllDeities();
  const deityObj = deities.find(d => d.slug === item.deity || d.id === item.deity);
  const relatedItems = getRelatedContent(item, 4);

  const getCategoryPath = (type: string) => {
    switch (type) {
      case 'bhajan': return { href: '/bhajans', label: t('bhajans') };
      case 'aarti': return { href: '/aartis', label: t('aartis') };
      case 'chalisa': return { href: '/chalisa', label: t('chalisa') };
      case 'mantra': return { href: '/mantras', label: t('mantras') };
      case 'stotram': return { href: '/stotram', label: t('stotram') };
      case 'shlok': return { href: '/shloks', label: t('shloks') };
      default: return { href: '/bhajans', label: t('bhajans') };
    }
  };

  const getRoutePrefix = (type: string) => {
    switch (type) {
      case 'bhajan': return '/bhajans';
      case 'aarti': return '/aartis';
      case 'chalisa': return '/chalisa';
      case 'mantra': return '/mantras';
      case 'stotram': return '/stotram';
      case 'shlok': return '/shloks';
      default: return '/bhajans';
    }
  };

  const categoryInfo = getCategoryPath(item.type);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(`${item.title}\n\n${item.lyrics}\n\n---\nस्रोत: नव ज्योति दुर्गा मंडल (NJDM)`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${item.title} - Nav Jyoti Durga Mandal (NJDM)`,
      text: `${item.title} के पवित्र लिरिक्स पढ़ें नव ज्योति दुर्गा मंडल पर।`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareToast(true);
        setTimeout(() => setShareToast(false), 2500);
      } catch (e) {
        // ignore
      }
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large': return 'text-xl sm:text-2xl leading-[2.2]';
      case 'xlarge': return 'text-2xl sm:text-3xl leading-[2.4]';
      default: return 'text-lg sm:text-xl leading-[2.0]';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center text-xs sm:text-sm text-sacred-600 mb-6 py-2 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1 hover:text-maroon-700 transition-colors py-1 focus:outline-none focus:underline"
        >
          <Home className="w-3.5 h-3.5 text-saffron-600" />
          <span>{t('home')}</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-sacred-400 flex-shrink-0" />
        <Link 
          href={categoryInfo.href} 
          className="hover:text-maroon-700 transition-colors py-1 focus:outline-none focus:underline"
        >
          {categoryInfo.label}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-sacred-400 flex-shrink-0" />
        <span className="font-semibold text-maroon-900 truncate max-w-[200px] sm:max-w-md" aria-current="page">
          {item.title}
        </span>
      </nav>

      {/* Back to Category Link */}
      <div className="mb-4">
        <Link 
          href={categoryInfo.href}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sacred-600 hover:text-maroon-700 transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('backToCategory')} {categoryInfo.label}</span>
        </Link>
      </div>

      {/* Article Header Card */}
      <header className="bg-cream-50 rounded-3xl border border-cream-200/90 p-6 sm:p-8 shadow-devotional mb-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-saffron-200/20 to-maroon-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gold-200/20 to-cream-100/10 rounded-full blur-3xl pointer-events-none" />

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 relative z-10">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 border border-saffron-200 uppercase tracking-wider">
            {item.category}
          </span>
          {deityObj && (
            <Link
              href={`/deities/${deityObj.slug}`}
              className="text-xs font-medium text-sacred-700 hover:text-maroon-700 bg-cream-200/70 px-3 py-1 rounded-full border border-cream-300 flex items-center gap-1.5 transition-colors"
            >
              <Flame className="w-3.5 h-3.5 text-saffron-600" />
              <span>{language === 'hi' ? deityObj.name : deityObj.englishName}</span>
            </Link>
          )}
        </div>

        {/* Main Sacred Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-devanagari text-sacred-900 leading-tight mb-3 relative z-10">
          {item.title}
        </h1>

        {/* English Title */}
        {item.englishTitle && (
          <p className="text-xs sm:text-sm font-medium text-saffron-700 tracking-wide uppercase mb-4 relative z-10">
            {item.englishTitle}
          </p>
        )}

        {/* Description */}
        {item.description && (
          <p className="text-sm sm:text-base text-sacred-600 max-w-2xl mx-auto leading-relaxed font-devanagari relative z-10">
            {item.description}
          </p>
        )}

        {/* Utility Action Bar */}
        <div className="mt-6 pt-6 border-t border-cream-200 flex flex-wrap items-center justify-between gap-3 relative z-10">
          {/* Font Resizer */}
          <div className="flex items-center gap-1 bg-cream-100/90 p-1 rounded-xl border border-cream-300 text-xs font-medium text-sacred-700">
            <span className="px-2 text-[11px] text-sacred-500 font-semibold uppercase">{t('textSize')}</span>
            <button
              type="button"
              onClick={() => setFontSize('normal')}
              className={`p-1.5 px-2 rounded-lg transition-colors ${fontSize === 'normal' ? 'bg-white text-maroon-800 shadow-xs font-bold' : 'hover:bg-cream-200'}`}
              title={t('resetSize')}
              aria-label="Normal font size"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize('large')}
              className={`p-1.5 px-2 rounded-lg transition-colors ${fontSize === 'large' ? 'bg-white text-maroon-800 shadow-xs font-bold' : 'hover:bg-cream-200'}`}
              title={t('increaseSize')}
              aria-label="Large font size"
            >
              A+
            </button>
            <button
              type="button"
              onClick={() => setFontSize('xlarge')}
              className={`p-1.5 px-2 rounded-lg transition-colors ${fontSize === 'xlarge' ? 'bg-white text-maroon-800 shadow-xs font-bold' : 'hover:bg-cream-200'}`}
              title="Extra large font size"
              aria-label="Extra large font size"
            >
              A++
            </button>
          </div>

          {/* Copy, Share, Print Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-sacred-800 border border-cream-300 transition-all shadow-xs active:scale-95"
              aria-label={t('copyLyrics')}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{t('copiedSuccess')}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sacred-600" />
                  <span>{t('copyLyrics')}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-sacred-800 border border-cream-300 transition-all shadow-xs active:scale-95"
              aria-label={t('share')}
            >
              {shareToast ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{t('linkCopied')}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-sacred-600" />
                  <span>{t('share')}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold p-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-sacred-800 border border-cream-300 transition-all shadow-xs"
              title="Print Lyrics"
              aria-label="Print lyrics"
            >
              <Printer className="w-3.5 h-3.5 text-sacred-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Pure Devotional Lyrics Surface */}
      <main className="bg-cream-50 rounded-3xl border border-cream-200 p-6 sm:p-12 shadow-sm mb-12 relative">
        <div className="max-w-2xl mx-auto">
          {/* Sacred opening emblem */}
          <div className="text-center text-maroon-700/60 font-heading text-lg mb-8 tracking-widest select-none">
            ॥ श्री गणेशाय नमः • ॐ नमः शिवाय • जय माता दी ॥
          </div>

          {/* Hindi Lyrics Text */}
          <div 
            className={`font-devanagari font-medium text-sacred-900 tracking-wide text-center whitespace-pre-line select-text ${getFontSizeClass()}`}
          >
            {item.lyrics}
          </div>

          {/* Sacred closing emblem */}
          <div className="mt-12 pt-8 border-t border-cream-200 text-center text-xs text-sacred-500 font-medium">
            <span className="text-gold-500">❖</span> नव ज्योति दुर्गा मंडल (NJDM) पावन संग्रह <span className="text-gold-500">❖</span>
          </div>
        </div>
      </main>

      {/* Keywords / Tags */}
      {item.keywords && item.keywords.length > 0 && (
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-sacred-500 mr-1">संबंधित कीवर्ड:</span>
          {item.keywords.map((kw, idx) => (
            <Link
              key={idx}
              href={`/search?q=${encodeURIComponent(kw)}`}
              className="text-xs bg-cream-100 hover:bg-cream-200 text-sacred-700 px-2.5 py-1 rounded-lg border border-cream-300 transition-colors"
            >
              #{kw}
            </Link>
          ))}
        </div>
      )}

      {/* Related Devotional Content */}
      {relatedItems.length > 0 && (
        <section className="mt-12 pt-8 border-t border-cream-200">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-saffron-600" />
            <h2 className="text-xl sm:text-2xl font-bold font-devanagari text-sacred-900">
              {t('relatedDevotional')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedItems.map((rel) => {
              const relLink = `${getRoutePrefix(rel.type)}/${rel.slug}`;
              return (
                <article key={rel.id} className="group bg-cream-50 rounded-2xl border border-cream-200/80 p-5 shadow-devotional-card hover:shadow-devotional transition-all duration-300 flex flex-col justify-between hover:border-saffron-300/80">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-200 uppercase tracking-wider">
                        {rel.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-devanagari text-sacred-900 group-hover:text-maroon-800 transition-colors mb-1">
                      <Link href={relLink} className="focus:outline-none focus:underline">
                        {rel.title}
                      </Link>
                    </h3>
                    {rel.excerpt && (
                      <p className="text-xs text-sacred-600 line-clamp-2 leading-relaxed font-devanagari">
                        {rel.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="pt-3 mt-3 border-t border-cream-200/60 flex items-center justify-end">
                    <Link
                      href={relLink}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-700 group-hover:text-maroon-700 transition-colors"
                    >
                      <span>{t('readLyrics')}</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default LyricsReader;
