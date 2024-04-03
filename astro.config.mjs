import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});
