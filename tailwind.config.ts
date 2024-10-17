import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        textColor: '#7a7a7a',
        main: '#fba70b',
        secondary: '#f1556a',
        third: '#f4813f',
      },
      padding: {
        main: '100px',
      },
    },
  },
  plugins: [],
};
export default config;
