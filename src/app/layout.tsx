import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SnapchatMobileNav } from '@/components/SnapchatMobileNav';

export const metadata: Metadata = {
  title: 'Nav Jyoti Durga Mandal (NJDM) | Bhajan, Aarti, Chalisa & Mantra',
  description: 'Explore Hindi bhajans, aartis, chalisas, mantras, stotrams and shloks from Nav Jyoti Durga Mandal. Sacred devotional collection presented cleanly.',
  keywords: [
    'Nav Jyoti Durga Mandal',
    'NJDM',
    'bhajan lyrics',
    'hindi bhajan',
    'aarti lyrics',
    'hanuman chalisa',
    'durga chalisa',
    'shiv aarti',
    'ganesh aarti',
    'devotional lyrics in hindi',
    'भजन लिरिक्स',
    'आरती संग्रह',
    'चालीसा संग्रह'
  ],
  authors: [{ name: 'Nav Jyoti Durga Mandal' }],
  metadataBase: new URL('https://njdm.org'),
  openGraph: {
    title: 'Nav Jyoti Durga Mandal (NJDM) | Devotional Chants & Lyrics',
    description: 'Explore authentic Hindi bhajans, aartis, chalisas and mantras.',
    siteName: 'Nav Jyoti Durga Mandal',
    locale: 'hi_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Inter:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF6EE] text-sacred-900 antialiased selection:bg-saffron-100 selection:text-maroon-900">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-20 sm:pb-0">
            {children}
          </main>
          <Footer />
          <SnapchatMobileNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
