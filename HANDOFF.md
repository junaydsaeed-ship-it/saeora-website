# HANDOFF.md — Saeora Website

## 1. Project Overview
Next.js 16 marketing site for Saeora, an influencer marketing agency — deployed on Netlify.

**Stack:** Next.js 16 (app router), React 19, Tailwind v4, Framer Motion v12, Radix UI, TypeScript  
**Key files:**
- `app/layout.tsx` — root layout, metadata, hidden Netlify form (for scanner)
- `app/contact/page.tsx` — contact form, Netlify Forms AJAX submission
- `app/opengraph-image.tsx` — auto-generated OG image via Next.js ImageResponse
- `app/not-found.tsx` — branded 404
- `public/netlify-form.html` — static HTML form; Netlify's scanner detects this at build time
- `components/Navbar.tsx` — animated mobile menu, scroll lock, passive listeners
- `netlify.toml` — build config with `@netlify/plugin-nextjs`
- `AGENTS.md` — warns: this Next.js version has breaking changes, read local docs

**Repo:** `github.com/junaydsaeed-ship-it/saeora-website` · branch `main` · deployed at `saeora.com` on Netlify (project: `saeora.com`)

---

## 2. Current Status
**Actively being worked on:** Netlify Forms integration — form submissions not appearing in dashboard.

**Completed this session:**
- Full mobile optimisation (dvh, passive scroll, animated menu, tap targets, responsive padding)
- Replaced Resend API route → Formspree (`@formspree/react`) → Netlify Forms (current)
- OG image (`opengraph-image.tsx`), branded 404 (`not-found.tsx`), link focus styles
- Contact page: text wordmark (consistent with Navbar), URL param role pre-selection (`?type=brand/creator`)
- CtaBanner CTAs now carry `?type=brand` / `?type=creator` params
- About copy cleaned (removed "across every niche, every platform")
- Netlify deploy configured; all commits pushed to `main`

**Last known blocker:** Form submissions were silently swallowed. Root cause: POSTing to `"/"` — Next.js serverless runtime intercepted before Netlify's CDN-level form handler.  
**Fix applied (latest commit `8498c3e`):** Changed POST target to `"/netlify-form.html"` (static file → CDN intercepts first). **Not yet confirmed working** — deploy was triggered but not tested.

---

## 3. Key Decisions
- **Netlify Forms over Formspree** — Formspree AJAX requires disabling reCAPTCHA or a paid custom key; Netlify Forms is free and integrated
- **Static `public/netlify-form.html`** — Next.js app router components aren't scanned by Netlify's form detector; static HTML in `public/` is
- **POST to `/netlify-form.html` not `"/"`** — Next.js serverless intercepts `POST /` before Netlify Forms CDN handler sees it
- **`min-h-[100dvh]`** — fixes mobile Safari address bar ghost space on Hero and Contact
- **`@formspree/react` removed** — uninstalled after switch to Netlify Forms
- **No env vars needed** — form ID hardcoded; `.env.local` (contained old Resend key) deleted

---

## 4. Next Steps
1. **Verify form works** — after latest Netlify deploy completes, submit a test on live site; check Netlify → Forms → contact → Verified submissions (also check Spam tab)
2. **Set up email notifications** — Netlify → Forms → contact → Form notifications → add email
3. **Connect custom domain** — Netlify → Domain management → add `saeora.com`, update DNS
4. **Run `netlify init`** — CLI not yet linked to Netlify site (user was at login step when session ended); needed for CLI deploys
5. **Fix git author** — commits show generic `j@Junayds-MacBook-Pro.local`; run `git config --global user.name / user.email`
6. **Remaining audit items** (lower priority): rate limiting on form [not applicable with Netlify Forms], sitemap static dates, `saeora-logo-black.png` dead asset cleanup

---

## 5. Context Notes
- **Netlify Forms + Next.js gotcha:** Netlify's form scanner only reads static HTML; the CDN form handler only fires before static-file routes, not Next.js serverless routes. Both problems require `public/netlify-form.html`.
- `app/icon.png` (1600×1600) serves as favicon automatically in Next.js app router — no separate favicon.ico needed
- Preview server runs on port 3003 (port 3000 was in use); config in `.claude/launch.json` has `"autoPort": true`
- The `AGENTS.md` warning about breaking Next.js changes is real — check `node_modules/next/dist/docs/` before any Next.js API changes
- `saeora-logo-black.png` in `/public/` is unused — safe to delete when cleaning up
