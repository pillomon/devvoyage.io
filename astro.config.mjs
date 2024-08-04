import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://devvoyage.io',
  integrations: [
    sitemap(),
    tailwind(),
    react({
      include: ['**/react/*'],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: {
            type: 'text',
            value: ' 🔗',
          },
        },
      ],
    ],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      // theme: "dracula",
      // Alternatively, provide multiple themes
      // https://shiki.style/guide/dual-themes
      themes: {
        light: 'dracula',
        dark: 'dracula',
      },
      cssVariablePrefix: '--shiki-',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
