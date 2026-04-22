# Genuine Plumbing Pros — v3

Fresh rebuild. Not a fork of v1 or v2.

## Stack

- Astro 6 (static output)
- Tailwind v4 (CSS-first via `@theme` in `src/styles/tokens.css`)
- Cloudflare Pages (git-integrated deploys)
- `@astrojs/sitemap`
- Typography: Archivo Black (display) + Inter (body) + JetBrains Mono (meta)

## Run

```bash
npm install
npm run dev
npm run build
```

## Deploy

Cloudflare Pages git-integrated. Every push to `main` deploys to production. Every push to a branch deploys to a preview URL.

## Voice rule

Copy MUST follow the business-voice rule:

- Business name (**Genuine Plumbing Pros**) is the voice throughout.
- Owner first name ("Justin") appears ONLY on `/about/`, one paragraph max.
- Never "I". "We" allowed sparingly.
- No "N things. One thing." formulas.
- No "we live here" / "our neighborhood" framing (site covers all Chicago suburbs).
- ASCII-safe: no em-dashes, no curly quotes.

GitHub Action at `.github/workflows/voice-rule.yml` fails the build if any pattern sneaks in.

## Placeholders to swap

- Phone `(630) 555-0000` — Justin's real number
- GA4 ID `G-XXXXXXXXXX`
- IL Plumber License `#058-XXXXXX`
- Hero photo (currently gradient-only)
