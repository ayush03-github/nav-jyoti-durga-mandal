'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  compact?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-cream-200/80 p-1 border border-cream-300 text-sm font-medium transition-all shadow-sm">
      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
          language === 'hi'
            ? 'bg-maroon-700 text-white shadow-sm'
            : 'text-sacred-700 hover:text-sacred-900 hover:bg-cream-100'
        }`}
        aria-label="Switch UI to Hindi"
      >
        हिन्दी
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
          language === 'en'
            ? 'bg-maroon-700 text-white shadow-sm'
            : 'text-sacred-700 hover:text-sacred-900 hover:bg-cream-100'
        }`}
        aria-label="Switch UI to English"
      >
        English
      </button>
    </div>
  );
};
