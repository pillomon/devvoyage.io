const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const calcLineHeight = (fontSize) => fontSize * 1.5;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      small: '576px',
      medium: '768px',
      large: '992px',
      extra: '1200px',
      'can-hover': { raw: '(hover: hover) and (pointer: fine)' },
      'has-fine-pointer': { raw: '(pointer: fine)' },
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        'other-hand': ['OtherHand'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            h2: {
              fontSize: 30,
              lineHeight: `${calcLineHeight(30)}px`,
            },
            h3: {
              fontSize: 24,
              lineHeight: `${calcLineHeight(24)}px`,
            },
            a: {
              color: colors.white,
              '&:hover': {
                color: 'var(--primary-color)',
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
