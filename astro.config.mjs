import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://filmyfly.work',
    output: 'static',
    integrations: [sitemap()],
    build: {
        inlineStylesheets: 'auto',
    },
    compressHTML: true,
});
