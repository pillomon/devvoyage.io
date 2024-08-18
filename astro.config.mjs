import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://devvoyage.io',
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
  },
  integrations: [
    sitemap(),
    tailwind(),
    react({
      include: ['**/react/*'],
    }),
    mdx(),
  ],
});
