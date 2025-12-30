import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://filmyfly.work',

  // 👇 CHANGE HERE
  output: 'server',

  adapter: cloudflare(),

  integrations: [sitemap()],

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});
