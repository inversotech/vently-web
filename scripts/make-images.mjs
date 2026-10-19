// Regenerates public/og.png (social preview) with the Vently logo: `node scripts/make-images.mjs`
// The logo files themselves come from the app (app.vently.lat public/brand and public/icons).
import sharp from 'sharp';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f6faf7"/>
  <circle cx="1050" cy="80" r="320" fill="#2fae62" opacity="0.12"/>
  <text x="172" y="134" font-family="Helvetica Neue, Arial, sans-serif" font-size="40" font-weight="700" fill="#17221d">Vently</text>
  <text x="88" y="330" font-family="Helvetica Neue, Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="-2" fill="#17221d">Tus pedidos por WhatsApp,</text>
  <text x="88" y="412" font-family="Helvetica Neue, Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="-2" fill="#17221d">ordenados y cobrados.</text>
  <text x="88" y="500" font-family="Helvetica Neue, Arial, sans-serif" font-size="32" fill="#5d6b64">Para pastelerías y negocios que venden por encargo.</text>
  <text x="88" y="566" font-family="Helvetica Neue, Arial, sans-serif" font-size="26" font-weight="600" fill="#1f8a4c">vently.lat</text>
</svg>`;

const mark = await sharp('public/icons/icon-512.png').resize(68, 68).png().toBuffer();

await sharp(Buffer.from(og))
  .composite([{ input: mark, left: 88, top: 84 }])
  .png()
  .toFile('public/og.png');
console.log('ok');
