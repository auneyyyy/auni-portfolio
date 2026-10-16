// @ts-check
import { defineConfig } from 'astro/config';

// On Vercel, the production URL is provided automatically.
// If you add a custom domain, replace the fallback below with it.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: vercelUrl ? `https://${vercelUrl}` : 'https://auni-portfolio.vercel.app',
});
