# Portfolio

Personal portfolio built with [Next.js 15](https://nextjs.org) (App Router), TypeScript and [Tailwind CSS v4](https://tailwindcss.com).

Live: [isaacrosa.dev](https://isaacrosa.dev)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Start the dev server      |
| `npm run build` | Production build          |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                |

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `master` triggers a
production deployment; pull requests get preview deployments.

To deploy manually:

```bash
npx vercel --prod
```

Node version is pinned via `.nvmrc`; build settings live in `vercel.json`.
