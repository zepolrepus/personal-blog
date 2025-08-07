// @ts-check
import { defineConfig } from 'astro/config';
import rehypeCallouts from 'rehype-callouts';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [rehypeCallouts],
  },

  adapter: vercel()
});