/** @type {import("prettier").Config} */

export default {
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "jsxSingleQuote": false,
  "jsxBracketSameLine": false,
  "endOfLine": "auto",
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}