'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from './types';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export const translations: Translations = {
  // Brand & Navigation
  siteTitle: { en: "Nav Jyoti Durga Mandal", hi: "नव ज्योति दुर्गा मंडल" },
  siteShort: { en: "NJDM", hi: "एनजेडीएम" },
  home: { en: "Home", hi: "होम" },
  bhajans: { en: "Bhajans", hi: "भजन" },
  aartis: { en: "Aartis", hi: "आरती" },
  chalisa: { en: "Chalisa", hi: "चालीसा" },
  mantras: { en: "Mantras", hi: "मंत्र" },
  stotram: { en: "Stotram", hi: "स्तोत्र" },
  shloks: { en: "Shloks", hi: "श्लोक" },
  deities: { en: "Deities", hi: "देवी-देवता" },
  festivals: { en: "Festivals", hi: "पर्व एवं उत्सव" },
  about: { en: "About NJDM", hi: "परिचय" },
  search: { en: "Search", hi: "खोजें" },

  // Hero & Search
  heroTitle: { en: "Sacred Devotional Collection", hi: "पावन भक्ति एवं स्तुति संग्रह" },
  heroSubtitle: {
    en: "Explore sacred Hindi bhajans, aartis, chalisas, mantras, stotrams and festival collections with pure devotion.",
    hi: "नव ज्योति दुर्गा मंडल के पावन संग्रह से प्रामाणिक हिंदी भजन, आरती, चालीसा, स्तोत्र एवं उत्सव संग्रह का पठन करें।"
  },
  searchPlaceholder: { en: "Search bhajans, aartis, chalisas, deities...", hi: "भजन, आरती, चालीसा, भगवान का नाम खोजें..." },
  searchButton: { en: "Search", hi: "खोजें" },
  quickFilters: { en: "Quick Filters", hi: "त्वरित चयन" },
  allCategories: { en: "All Categories", hi: "सभी श्रेणियां" },
  allDeities: { en: "All Deities", hi: "सभी देवी-देवता" },

  // Sections
  featuredBhajans: { en: "Popular & Featured Bhajans", hi: "लोकप्रिय एवं प्रमुख भजन" },
  featuredAartis: { en: "Sacred Aarti Collection", hi: "आरती संग्रह" },
  featuredChalisa: { en: "Divine Chalisa Sangrah", hi: "चालीसा संग्रह" },
  browseByDeity: { en: "Browse by Deity", hi: "देवी-देवताओं के अनुसार देखें" },
  festivalsSpecial: { en: "Festival Special Collections", hi: "पर्व एवं उत्सव विशेष संग्रह" },
  exploreCategories: { en: "Explore All Devotional Categories", hi: "सभी भक्ति श्रेणियां देखें" },
  viewAll: { en: "View All", hi: "सभी देखें" },
  readLyrics: { en: "Read Lyrics", hi: "पढ़ें" },
  readMore: { en: "Read Full Text", hi: "संपूर्ण पाठ पढ़ें" },
  listenOrRead: { en: "Read Devotional Text", hi: "पावन पाठ पढ़ें" },

  // Reader utilities
  copyLyrics: { en: "Copy Lyrics", hi: "लिरिक्स कॉपी करें" },
  copiedSuccess: { en: "Lyrics copied to clipboard!", hi: "लिरिक्स कॉपी हो गए!" },
  share: { en: "Share", hi: "शेयर करें" },
  linkCopied: { en: "Link copied to clipboard!", hi: "लिंक कॉपी हो गया!" },
  textSize: { en: "Text Size", hi: "फ़ॉन्ट आकार" },
  increaseSize: { en: "Increase Font Size", hi: "अक्षर बड़े करें" },
  decreaseSize: { en: "Decrease Font Size", hi: "अक्षर छोटे करें" },
  resetSize: { en: "Reset Size", hi: "सामान्य आकार" },
  backToCategory: { en: "Back to", hi: "वापस जाएं" },
  relatedDevotional: { en: "Related Devotional Content", hi: "संबंधित भक्ति रचनाएं" },

  // Listing page filters
  filterByDeity: { en: "Filter by Deity", hi: "ईष्ट देव अनुसार" },
  filterAll: { en: "All", hi: "सभी" },
  resultsCount: { en: "items found", hi: "प्रविष्टियां उपलब्ध" },
  noResultsTitle: { en: "No devotional content found", hi: "कोई सामग्री नहीं मिली" },
  noResultsDesc: { en: "Try searching with a different keyword, deity name, or browse all categories.", hi: "कृपया किसी अन्य शब्द, देवी-देवता के नाम से खोजें या सभी श्रेणियां देखें।" },
  clearFilters: { en: "Clear Filters", hi: "फ़िल्टर हटाएं" },

  // Footer & About
  footerTagline: {
    en: "Preserving and presenting sacred devotional heritage with reverence and simplicity.",
    hi: "सनातन भक्ति परंपरा एवं पावन भजनों का निष्ठावान संकलन।"
  },
  quickLinks: { en: "Quick Links", hi: "त्वरित लिंक्स" },
  categories: { en: "Categories", hi: "श्रेणियां" },
  organization: { en: "Organization", hi: "संस्था" },
  devotionalPurpose: { en: "Devotional Purpose", hi: "उद्देश्य" },
  copyrightNotice: {
    en: "© 2026 Nav Jyoti Durga Mandal. Since 1974",
    hi: "© 2026 नव ज्योति दुर्गा मंडल । भक्ति एवं आध्यात्मिक पठन हेतु समर्पित।"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'hi',
  setLanguage: () => { },
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('hi');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('njdm_lang') as Language;
      if (savedLang === 'en' || savedLang === 'hi') {
        setLanguageState(savedLang);
      }
    } catch (e) {
      // ignore SSR / storage errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('njdm_lang', lang);
    } catch (e) {
      // ignore
    }
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key]['hi'] || key;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
