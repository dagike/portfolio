# Portfolio

Personal portfolio built with [Next.js 15](https://nextjs.org) (App Router),
React 19, TypeScript and [Tailwind CSS v4](https://tailwindcss.com). Every
page is statically generated.

Live: [isaacrosa.dev](https://isaacrosa.dev)

## Highlights

- **Content as data.** Every page reads from a typed object or array in
  `src/data/`; there is no copy embedded in components beyond page chrome.
  Adding a project or a timeline entry means editing one file.
- **Static by default.** Every route, including each project's detail page,
  is prerendered at build time — no server rendering, no client fetch for
  content.
- **No flash of the wrong theme.** A three-state (system/light/dark) toggle
  persisted to `localStorage`, applied by an inline script before first paint.
- **One validation module, two runtimes.** The contact form's rules live in a
  single file imported by both the client component and the API route, so
  client and server checks can't drift apart.
- **Progressive enhancement.** The timeline's scroll-reveal animation and the
  header's mobile menu are the only real client-side behaviour; with no JS,
  or with reduced motion requested, every page still renders complete and
  legible.

## Tech stack

| | |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19, TypeScript (strict) |
| Styling | Tailwind CSS v4 — token-driven, no `tailwind.config.js` |
| Fonts | Geist and Geist Mono, self-hosted via `next/font/google` |
| Email | [Resend](https://resend.com), for the contact form |
| Analytics | `@vercel/analytics` |
| Icons | Hand-picked [simple-icons](https://simpleicons.org) paths, inlined — no icon package dependency |
| Node | 22 (pinned in `.nvmrc`) |
| Hosting | Vercel |

## Routes

| Route | Rendering | Shows |
| --- | --- | --- |
| `/` | Static | Hero, capability chips, toolbox icon strip, featured projects |
| `/projects` | Static | Every project, featured first |
| `/projects/[slug]` | Static (prerendered per project) | Tech stack, demo or screenshot, features, write-up |
| `/about` | Static | Bio and a grouped skills toolbox |
| `/timeline` | Static | Work and education history |
| `/contact` | Static | Contact form and social links |
| `POST /api/contact` | Server | Validates and sends a contact message |

`/projects/[slug]` sets `dynamicParams = false` and lists every slug via
`generateStaticParams`, so all project pages are built up front and an
unknown slug 404s rather than being rendered on demand. `not-found.tsx`,
`error.tsx` and `global-error.tsx` cover the 404 and error-boundary cases —
`global-error.tsx` is styled with inline CSS variables (with hard-coded
fallbacks) since it can render before the stylesheet has loaded.

## Project structure

```
src/
├─ app/            # Routes (App Router). Pages import data + components.
│  ├─ projects/[slug]/  # generateStaticParams + generateMetadata per project
│  └─ api/contact/      # POST handler for the contact form
├─ components/     # UI. Server by default; "use client" only where needed
│                   # for state, effects, or event handlers.
├─ data/           # All site copy — one file per content area, each closed
│                   # with `as const satisfies <Type>` (see below).
├─ types/          # The contracts data/ is checked against. Re-exported
│                   # from types/index.ts so callers do `from "@/types"`.
└─ lib/            # Pure helpers (no React) shared across components/routes.

public/
└─ projects/<slug>/  # cover.png, and demo/*.mp4 + demo/*.jpg for projects
                      # that showcase recorded clips instead of a live demo.
```

The `@/*` path alias (in `tsconfig.json`) resolves to `./src/*`.

## Content model

Every file in `src/data/` ends with the same pattern:

```ts
export const projects = [ /* … */ ] as const satisfies readonly Project[];
```

`as const` locks the literal shape (exact strings, readonly arrays);
`satisfies` then checks it against the type from `src/types/` without
widening it. A missing field, a typo'd key, or a value of the wrong type is a
compile error — but every call site still sees precise literal types, not a
generic `string`.

### Adding a project

Add an entry to `src/data/projects.ts` matching the `Project` type
(`src/types/project.ts`):

- `slug` — matches the GitHub repo name; becomes the `/projects/<slug>` route.
- `screenshot` — `/projects/<slug>/cover.png`.
- `demoUrl` — a live URL, or `null` to hide the "Live demo" button entirely
  (both the card and the detail page already guard on it).
- `demos` *(optional)* — an array of `{ src, poster, title, description }`
  clips. When set, the detail page renders a tabbed video player in place of
  the static screenshot instead of stacking both.
- `technologies` — each needs a `name` and a simple-icons `icon` slug. **Add
  the slug to `src/lib/tech-icons.ts` first** — an icon not found there
  silently falls back to a plain circle rather than erroring. `tech-icons.ts`
  also carries two hand-drawn glyphs (`adobeexperienceplatform`,
  `adobeanalytics`) since Adobe withdrew its marks from simple-icons in v14.
- `featured` — controls whether it appears in the home page's grid.

### Adding a timeline entry

Add an entry to `src/data/timeline.ts` matching `WorkEntry | EducationEntry`
(`src/types/timeline.ts`), discriminated by `kind`. `start`/`end` are
`TimelinePoint` strings — `"YYYY"` or `"YYYY-MM"` — formatted by
`formatTimelinePoint` / `formatTimelineRange` in `src/lib/timeline.ts`; an
`end` of `null` renders as "Present".

## Design system and theming

`src/app/globals.css` defines every design token as a CSS custom property on
`:root` — a 10-stop accent ramp, a spacing scale (`3xs` → `4xl`), type sizes,
radii, and semantic colours (`--background`, `--surface`, `--border`,
`--accent`, `--ring`, …). An `@theme inline` block re-exports each token
under the name Tailwind expects, which is why utility classes throughout the
app read `py-3xl`, `gap-2xs`, `bg-surface-muted` — there's no separate
`tailwind.config.js`.

Theming has three states, in priority order:

1. Light values on `:root` (the default).
2. System dark, via `@media (prefers-color-scheme: dark)`.
3. An explicit `data-theme="light"` or `data-theme="dark"` attribute, which
   wins over the system preference in either direction.

An inline script in `src/app/layout.tsx`, injected before the stylesheet
loads, reads the stored choice from `localStorage` and sets the attribute
before first paint — no flash of the wrong theme on load. `ThemeToggle`
(`src/components/theme-toggle.tsx`) cycles system → light → dark and persists
the explicit choices; choosing "system" clears the stored value.

## Contact form

`src/lib/contact.ts` is the single source of truth for validation — field
limits, the loose-but-workable email check, and the honeypot field name —
imported by both `src/components/contact-form.tsx` (client) and
`src/app/api/contact/route.ts` (server). The client validates for a good UX;
the route re-validates everything itself, since the client is never trusted.

The route, in order: rejects malformed JSON, silently accepts (without
sending) anything with the honeypot field filled in, validates the real
fields, then sends through Resend with `replyTo` set to the visitor's email.

Required environment variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Where messages are delivered |
| `CONTACT_FROM_EMAIL` | The Resend-verified sending address |

If any are missing, the route logs an error and returns a 500 rather than
crashing at build time. There is no rate limiting on the endpoint — the
honeypot is the only abuse mitigation.

## Accessibility and progressive enhancement

- A skip-to-content link is the first focusable element on every page.
- A single `:focus-visible` outline (the `--ring` token) is applied globally.
- Navigation landmarks carry `aria-label`s; the mobile menu manages
  `aria-expanded`, closes on Escape, and locks body scroll while open.
- The project-demo player (`src/components/project-demos.tsx`) is a real ARIA
  tabs widget — roving tabindex, Arrow/Home/End key support.
- The timeline's reveal animation only activates once JS has mounted **and**
  the visitor hasn't requested reduced motion; otherwise every entry renders
  fully visible immediately. A site-wide `prefers-reduced-motion` rule also
  flattens all transitions and animations.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To exercise the contact
form locally, add a `.env.local` with the three variables listed above.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deployment

Deployed on [Vercel](https://vercel.com) (`vercel.json` sets clean URLs and
no trailing slashes). Every push to `master` triggers a production
deployment; pull requests get preview deployments. All media is served from
`public/` — `next.config.ts` carries no image or rewrite configuration.

To deploy manually:

```bash
npx vercel --prod
```

Node version is pinned via `.nvmrc`.
