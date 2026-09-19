'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '@/lib/i18n';
import { SearchBar } from './SearchBar';
import { ChevronDown } from 'lucide-react';

const SHLOK_TEXT = "या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const [displayedCount, setDisplayedCount] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const [showCursor, setShowCursor] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const shlokContainerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Split text cleanly into Devanagari grapheme clusters so matras & conjuncts render accurately
  const graphemes = useMemo(() => {
    if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
      const segmenter = new (Intl as any).Segmenter('hi', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(SHLOK_TEXT), (s: any) => s.segment);
    }
    return Array.from(SHLOK_TEXT);
  }, []);

  // Detect prefers-reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Typing animation for Devanagari Shlok
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedCount(graphemes.length);
      setIsTypingComplete(true);
      setShowCursor(false);
      return;
    }

    let timer: NodeJS.Timeout;
    let cursorTimer: NodeJS.Timeout;

    // Start typing after a calm 750ms intro delay
    const startTimeout = setTimeout(() => {
      setShowCursor(true);
      let currentIndex = 0;

      timer = setInterval(() => {
        currentIndex += 1;
        setDisplayedCount(currentIndex);

        if (currentIndex >= graphemes.length) {
          clearInterval(timer);
          setIsTypingComplete(true);
          // Gently remove cursor after typing finishes
          cursorTimer = setTimeout(() => {
            setShowCursor(false);
          }, 650);
        }
      }, 55);
    }, 750);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(timer);
      clearTimeout(cursorTimer);
    };
  }, [graphemes, prefersReducedMotion]);

  // Scroll-driven transition for Desktop (lg >= 1024px)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number | null = null;

    const updateScroll = () => {
      if (!containerRef.current || window.innerWidth < 1024) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Opacity reaches 0 when the section below hero hits 15% of screen height from top
      const targetThreshold = window.innerHeight * 0.15;
      const totalScrollToTarget = rect.height - targetThreshold;

      if (totalScrollToTarget <= 0) return;

      // Progress 0.0 (at top of page) -> 1.0 (when section below hits 15% from viewport top)
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollToTarget, 0), 1);

      // 1. Background Image: scale down 1.10 -> 1.00, opacity dissolves until section hits 15% from top
      if (bgImageRef.current) {
        const bgScale = 1.10 - progress * 0.10;
        // Smooth gradual fade reaching 0 at progress = 1.0
        const bgOpacity = Math.max(0, 1 - Math.pow(progress, 1.8));
        bgImageRef.current.style.transform = `scale3d(${bgScale.toFixed(4)}, ${bgScale.toFixed(4)}, 1)`;
        bgImageRef.current.style.opacity = bgOpacity.toFixed(4);
      }

      // 2. Center Shlok: scale down 1.0 -> 0.94, translateY 0px -> -40px, reaching 0 opacity at target
      if (shlokContainerRef.current) {
        const shlokScale = 1.0 - progress * 0.06;
        const shlokTranslateY = -progress * 40;
        const shlokOpacity = Math.max(0, 1 - Math.pow(progress, 1.5));
        shlokContainerRef.current.style.transform = `translate3d(0, ${shlokTranslateY.toFixed(2)}px, 0) scale3d(${shlokScale.toFixed(4)}, ${shlokScale.toFixed(4)}, 1)`;
        shlokContainerRef.current.style.opacity = shlokOpacity.toFixed(4);
      }

      // 3. Scroll indicator: fades smoothly within first 20% of scroll
      if (scrollIndicatorRef.current) {
        const indicatorOpacity = Math.max(0, 1 - progress / 0.20);
        scrollIndicatorRef.current.style.opacity = indicatorOpacity.toFixed(4);
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updateScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  // Format visible typed text into lines
  const visibleText = graphemes.slice(0, displayedCount).join('');
  const lines = visibleText.split('\n');

  return (
    <>
      {/* 
        =======================================================
        DESKTOP HERO (lg: >= 1024px) - Calm Devotional Experience
        =======================================================
      */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-full h-[180vh]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-sacred-950 flex flex-col items-center justify-center">
          
          {/* Devotional Background Image Layer */}
          <div
            ref={bgImageRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform will-change-opacity"
            style={{
              backgroundImage: `url('/images/hero-bg.jpg')`,
              transform: prefersReducedMotion ? 'scale(1)' : 'scale(1.1)',
              opacity: 1,
            }}
          />

          {/* Devotional Warm Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-sacred-950/40 to-sacred-950/75 pointer-events-none" />

          {/* Center Sacred Shlok Typography with Header Title Font and Generous Line Spacing */}
          <div
            ref={shlokContainerRef}
            className="relative z-10 max-w-6xl mx-auto px-6 text-center will-change-transform will-change-opacity flex flex-col items-center justify-center select-none"
          >
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#FFFDF5] tracking-wide leading-[1.8] sm:leading-[1.9] md:leading-[2.0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {lines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                    {idx === lines.length - 1 && showCursor && (
                      <span className="inline-block w-[3.5px] h-[0.8em] bg-gold-400 align-middle ml-2 shadow-[0_0_14px_rgba(243,210,106,0.95)] animate-pulse" />
                    )}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          {/* Subtle Devotional Scroll Indicator */}
          <div
            ref={scrollIndicatorRef}
            className="absolute bottom-8 inset-x-0 z-10 flex flex-col items-center justify-center gap-1.5 text-cream-200/80 font-heading pointer-events-none transition-opacity duration-300"
          >
            <span className="text-xs uppercase tracking-widest text-gold-300/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {language === 'hi' ? 'नीचे स्क्रॉल करें' : 'Scroll down'}
            </span>
            <ChevronDown className="w-4 h-4 text-gold-400 animate-bounce drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
          </div>
        </div>
      </div>

      {/* 
        =======================================================
        MOBILE / TABLET HERO (< 1024px) - Unchanged & Clean
        =======================================================
      */}
      <section className="lg:hidden relative overflow-hidden bg-sacred-950 text-white h-[calc(100svh-4rem)] sm:h-[calc(100vh-4rem)] min-h-[400px] flex flex-col justify-end items-center border-b border-cream-200">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
        />
        <div className="sm:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="sm:hidden w-full max-w-2xl mx-auto px-4 pb-6 relative z-10">
          <SearchBar 
            size="large"
            placeholder={language === 'hi' ? 'भजन, आरती, चालीसा खोजें...' : 'Search bhajans, aartis, chalisas...'}
          />
        </div>
      </section>
    </>
  );
};
