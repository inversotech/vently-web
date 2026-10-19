// Regenerates public/og.png and public/apple-touch-icon.png: `node scripts/make-images.mjs`
import sharp from 'sharp';

const mark = (size, x = 0, y = 0) => `
  <g transform="translate(${x} ${y}) scale(${size / 32})">
    <rect width="32" height="32" rx="9" fill="#17221d"/>
    <path d="M9 10.5l7 11 7-11" fill="none" stroke="#2fae62" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f6faf7"/>
  <circle cx="1050" cy="80" r="320" fill="#2fae62" opacity="0.12"/>
  ${mark(64, 88, 88)}
  <text x="170" y="134" font-family="Helvetica Neue, Arial, sans-serif" font-size="40" font-weight="700" fill="#17221d">vently</text>
  <text x="88" y="330" font-family="Helvetica Neue, Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="-2" fill="#17221d">Tu vendedor con IA</text>
  <text x="88" y="412" font-family="Helvetica Neue, Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="-2" fill="#17221d">en WhatsApp.</text>
  <text x="88" y="500" font-family="Helvetica Neue, Arial, sans-serif" font-size="32" fill="#5d6b64">No inventa precios. Sabe cuándo pedirte ayuda.</text>
  <text x="88" y="566" font-family="Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="600" fill="#1f8a4c">vently.lat</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="180" height="180" fill="#17221d"/>${mark(180)}</svg>`))
  .png()
  .toFile('public/apple-touch-icon.png');
console.log('ok');
