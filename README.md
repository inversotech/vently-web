# vently-web

Sitio público de Vently (`vently.lat`): landing + páginas legales que pide Meta.
Astro 7 + Tailwind CSS 4, 100% estático (sin JS en el cliente). La app vive aparte en `app.vently.lat`.

## Desarrollo

Requiere Node ≥ 22.22 (`nvm use` toma la versión de `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview
```

- Textos y datos de la empresa (RUC, email, URLs de la app): `src/site.ts`
- Landing: `src/pages/index.astro` · Legales: `src/pages/{privacidad,terminos,eliminacion-de-datos}.astro`
- Colores y tipografía: `src/styles/global.css` (`@theme`)
- Imagen para redes (`public/og.png`) e ícono: `node scripts/make-images.mjs`

## Publicación (GitHub Pages)

Cada push a `main` compila y publica con `.github/workflows/deploy.yml`.

Configuración única:
1. Repo en GitHub → Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `vently.lat` (ya está en `public/CNAME`) y activar **Enforce HTTPS** cuando aparezca.
3. DNS de `vently.lat` (registros en el apex):
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - opcional `CNAME www` → `inversotech.github.io`
   - **No tocar** el registro de `app.vently.lat` (apunta al droplet).

URLs que se usan en Meta (Configuración básica de la app / verificación de acceso):
- Sitio: `https://vently.lat`
- Política de privacidad: `https://vently.lat/privacidad`
- Términos: `https://vently.lat/terminos`
- Eliminación de datos: `https://vently.lat/eliminacion-de-datos`
