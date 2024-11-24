const defaultTheme = require('tailwindcss/defaultTheme');

const calcLineHeight = (fontSize) => fontSize * 1.5;
const primaryColor = '#FFBE98';
const secondaryColor = '#04080D';

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
        primary: primaryColor,
        secondary: secondaryColor,
      },
      fontFamily: {
        sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        ani: 'rotate 3s linear infinite',
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
              color: '#FFFFFF',
              '&:hover': {
                color: primaryColor,
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
