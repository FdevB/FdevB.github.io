import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE / BASE are injected by the GitHub Actions workflow (.github/workflows/deploy.yml).
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  vite: { plugins: [tailwindcss()] },
});
