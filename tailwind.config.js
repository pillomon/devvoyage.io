const defaultTheme = require('tailwindcss/defaultTheme');

const calcLineHeight = (fontSize) => fontSize * 1.5;
const primeColor = '#FFBE98';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      small: '576px',
      medium: '768px',
      large: '992px',
      extra: '1200px',
    },
    extend: {
      colors: {
        prime: primeColor,
      },
      fontFamily: {
        sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            h2: {
              fontSize: '30px',
              lineHeight: `${calcLineHeight(30)}px`,
            },
            h3: {
              fontSize: '24px',
              lineHeight: `${calcLineHeight(24)}px`,
            },
            a: {
              color: '#FFFFFF',
              '&:hover': {
                color: primeColor,
              },
              textDecoration: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
