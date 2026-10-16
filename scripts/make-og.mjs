// Generates public/og-image.png (social preview) and PNG favicons.
// Run with: npm run og   (re-run after changing your name or role in src/data/portfolio.ts)
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { profile } from '../src/data/portfolio.ts';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const font = "'Arial Black', 'Segoe UI Black', 'Segoe UI', Arial, sans-serif";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff6ec"/>
  <circle cx="1080" cy="80" r="220" fill="#ffc93c" fill-opacity=".55"/>
  <rect x="-60" y="430" width="300" height="300" rx="60" fill="#a48bff" fill-opacity=".4" transform="rotate(18 90 580)"/>
  <rect x="86" y="96" width="96" height="96" rx="24" fill="#1b1530"/>
  <rect x="78" y="88" width="96" height="96" rx="24" fill="#ff6a5c" stroke="#1b1530" stroke-width="4"/>
  <text x="126" y="153" text-anchor="middle" font-family="${font}" font-weight="900" font-size="42" fill="#1b1530">${esc(profile.initials)}</text>
  <text x="76" y="340" font-family="${font}" font-weight="900" font-size="120" fill="#1b1530" letter-spacing="-4">${esc(profile.shortName)}<tspan fill="#ff6a5c">.</tspan></text>
  <rect x="84" y="388" width="${Math.min(1040, profile.role.length * 21 + 48)}" height="64" rx="14" fill="#1b1530"/>
  <rect x="78" y="382" width="${Math.min(1040, profile.role.length * 21 + 48)}" height="64" rx="14" fill="#a48bff" stroke="#1b1530" stroke-width="3"/>
  <text x="102" y="426" font-family="${font}" font-weight="700" font-size="32" fill="#1b1530">${esc(profile.role)}</text>
  <text x="80" y="540" font-family="${font}" font-size="28" fill="#4d4566">${esc(profile.location)}</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-image.png');

const fav = await readFile('public/favicon.svg');
await sharp(fav, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(fav, { density: 600 })
  .resize(140, 140)
  .extend({ top: 20, bottom: 20, left: 20, right: 20, background: '#fff6ec' })
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('✓ og-image.png, favicon-32.png, apple-touch-icon.png generated in /public');
