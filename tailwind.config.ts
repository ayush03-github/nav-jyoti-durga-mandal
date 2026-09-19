import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FAF6EE',
          200: '#F3EBD9',
          300: '#E8DCBF',
          400: '#D5C49E',
        },
        saffron: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          500: '#E86014',
          600: '#D24E07',
          700: '#AD3C05',
          800: '#8A2F05',
        },
        maroon: {
          50: '#FDF2F2',
          100: '#FCE7E7',
          500: '#B91C1C',
          700: '#8C1D1D',
          800: '#731414',
          900: '#520B0B',
        },
        gold: {
          300: '#F3D26A',
          400: '#E5B83B',
          500: '#D4A017',
          600: '#B8860B',
          700: '#916805',
        },
        sacred: {
          50: '#F9F8F6',
          100: '#F0EEEA',
          200: '#E2DED7',
          600: '#685D54',
          700: '#4D433C',
          800: '#2C241E',
          900: '#1A1410',
        }
      },
      fontFamily: {
        devanagari: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        heading: ['"Cinzel"', '"Rozha One"', '"Noto Serif Devanagari"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'devotional': '0 4px 20px -2px rgba(140, 29, 29, 0.05), 0 2px 6px -1px rgba(232, 96, 20, 0.06)',
        'devotional-lg': '0 10px 30px -4px rgba(140, 29, 29, 0.08), 0 4px 12px -2px rgba(232, 96, 20, 0.08)',
        'devotional-card': '0 2px 12px rgba(44, 36, 30, 0.04)',
      }
    },
  },
  plugins: [],
};
export default config;
