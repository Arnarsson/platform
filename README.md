# HARKA — Next.js + Clerk + i18n Starter 🚀

Production‑ready starter with App Router (TypeScript), Tailwind, Clerk auth, role gating (admin/teacher/student), i18n (da/en), theme toggle, and Playwright tests.

## Quick Start

1) Install deps

```bash
npm i
```

2) Copy environment and configure Clerk

```bash
cp .env.example .env.local
# Fill NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY
```

3) Run dev server

```bash
npm run dev
```

Visit http://localhost:3000

## Vercel Preview via CLI

Use the built-in Vercel CLI scripts for preview and production deploys.

1) Login and link project (one-time)

```bash
npm run vercel:login
npm run vercel:link
```

2) Configure environment in Vercel Dashboard

- Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` to your Vercel Project → Settings → Environment Variables for both Preview and Production.

3) Pull Vercel env locally (optional but recommended)

```bash
npm run vercel:pull:preview
# or for prod values
npm run vercel:pull:prod
```

4) Deploy a preview

```bash
npm run vercel:preview
# Returns a preview URL you can share
```

5) Promote to production

```bash
npm run vercel:prod
```

Local dev with Vercel env:

```bash
npm run vercel:dev
```

## Included Routes

Public:
- `/` Landing
- `/learn/ai-kompas`
- `/community/power-hour`
- `/pricing`

Protected:
- `/learn/dashboard`
- `/learn/courses`
- `/profile`

Admin:
- `/admin/quick-access`
- `/admin/dashboard`
- `/admin/users`
- `/admin/content`
- `/admin/courses`

Teacher:
- `/teach/dashboard`
- `/teach/upload`
- `/teacher-access`

## Auth & Roles

- Middleware requires authentication for protected namespaces in dev by default. Role checks run in server components using helpers in `lib/auth/roles.ts`.
- Flip `STRICT_ROLE_CHECK_IN_MIDDLEWARE` in `middleware.ts` to enforce role checks at the edge.

### Set Admin Role (Clerk)

1. Sign up in the running app, then open Clerk Dashboard → Users → your user → Public metadata → `{ "role": "admin" }` → Save.
2. Visit `/admin/quick-access`.

Teacher role works similarly with `{ "role": "teacher" }`.

## i18n and Theme

- Language toggle persists to cookie `lang` and localStorage. Server components read cookie for SSR. Strings live in `lib/i18n/translations.ts`.
- Theme uses `next-themes` (system/light/dark).

## UI Kit

Minimal `Button`, `Card`, `Navbar`, plus Theme and Language toggles.

## Testing

Smoke and access tests via Playwright.

```bash
npx playwright install
npm run test:e2e
```

## Notes

- WCAG‑friendly focus styles and `prefers-reduced-motion` respected by default.
- Tailwind configured for performance and minimal client JS.
- Key components log mounts and guard decisions to aid debugging.
