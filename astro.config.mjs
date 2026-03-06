// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Nahj14.github.io',
  base: '/Nahj-Institute',
  integrations: [mdx(), sitemap()],
});