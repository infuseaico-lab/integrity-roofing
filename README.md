# Inegrity Roofing

Responsive roofing website built with Vite, semantic HTML, CSS, and JavaScript.

## Develop

Use Node.js 22+ and the existing checkout; no separate worktree is needed.

```sh
npm ci --cache /tmp/inegrity-npm-cache
npm run dev -- --port 5173
```

## Production

```sh
npm run build
npm run preview -- --port 4173
```

Deploy `dist/` to a static host. Fonts and photos are served locally. No secrets are required.

## Before launch

- Confirm the requested spelling **Inegrity Roofing**.
- The reference site https://ahi-roofing.com/ was inaccessible from the build environment. Verify actual services and business copy against it before publishing.
- Supply the real business phone, contact email, address, service area, licensing, and actual project photography. No reviews, certifications, or geographic claims have been invented.
- Connect the estimate form to a real server or form service, with spam protection and privacy/consent handling. Currently it generates a local text download and explicitly does not submit information.
- Supply the production domain, then add absolute canonical and Open Graph image URLs, generate a sitemap, and register it with search engines. Local SEO requires verified address and service area before adding RoofingContractor structured data.
- Metadata, crawlable semantic content, a single H1, FAQ and organization JSON-LD, descriptive alt text, responsive breakpoints, and robots.txt are included. Search rankings cannot be guaranteed.

## Image attribution

Local illustrative house images are from the assets of [codewithsadee/realvine](https://github.com/codewithsadee/realvine), whose README states the project is free to use. They are not Inegrity Roofing projects. Replace with company-owned photos before launch. Typography is distributed by @fontsource; font licenses are included in those npm packages.
