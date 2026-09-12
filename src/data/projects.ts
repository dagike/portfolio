import type { Project } from "@/types";

export const projects = [
  {
    slug: "green-star-store",
    name: "Green Star Store",
    tagline:
      "A full-featured ecommerce storefront with real seeded data and a mocked checkout.",
    description:
      "Product catalog with search, filtering, sorting and infinite scroll; product pages with image galleries and reviews; cart, wishlist and promo codes; and a validated multi-step checkout with order confirmation and history. Products, reviews and orders are real data seeded into Postgres and served from a small serverless API.",
    technologies: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "React Router", icon: "reactrouter" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Vitest", icon: "vitest" },
    ],
    demoUrl: "https://green-star-store.vercel.app",
    repoUrl: "https://github.com/dagike/green-star-store",
    screenshot: "/projects/green-star-store/cover.png",
    features: [
      "Home page with a hero, category tiles and a top-rated rail; product cards show sale pricing plus low-stock and out-of-stock badges.",
      "Shop page pairing a filter sidebar (category, price range, minimum rating, in-stock only) with a sort control and an infinite-scroll grid.",
      "Product pages with an image gallery, stock status, a quantity control, and a reviews section with a rating breakdown.",
      "Cart with quantity edits, line removal, promo codes and a live order summary; wishlist items move to the cart individually.",
      "Three-step checkout — shipping, mocked payment, review — with a step indicator and per-step validation.",
      "Order confirmation with an order number and estimated delivery, plus an Orders page listing past orders by email.",
    ],
    details: [
      "A portfolio ecommerce build that runs on real data rather than fixtures: the product catalog, reviews and orders are seeded into a Neon Postgres database and served through a small set of serverless API routes.",
      "The storefront leads with a hero, category tiles and a top-rated rail. Product cards surface sale pricing and low-stock and out-of-stock badges. The shop page pairs a sidebar of filters (category, price range, minimum rating, in-stock only) with a sort control and an infinite-scroll grid.",
      "Each product has an image gallery, stock status, a quantity control, and add-to-cart and wishlist actions, plus a reviews section with a rating breakdown. The cart supports quantity edits, line removal, promo codes and a live order summary with subtotal, shipping and tax, feeding a multi-step, validated checkout.",
      "Payments are mocked — no real charge is ever made.",
    ],
    featured: true,
  },
  {
    slug: "traveling-world-map",
    name: "Traveling World Map",
    tagline:
      "An interactive map of the countries, cities and theme parks I've visited.",
    description:
      "A Leaflet world map that highlights visited countries and drills through a country to city to theme park to ride hierarchy, with a detail panel per park (photos, favourite coaster and flat ride) and a stats panel totalling countries, cities, parks and coasters. An admin mode adds places and manages the login.",
    technologies: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Leaflet", icon: "leaflet" },
      { name: "Fastify", icon: "fastify" },
      { name: "Drizzle ORM", icon: "drizzle" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Node.js", icon: "nodedotjs" },
    ],
    demoUrl: "https://traveling-world-map.vercel.app",
    repoUrl: "https://github.com/dagike/traveling-world-map",
    screenshot: "/projects/traveling-world-map/cover.png",
    features: [
      "Visited countries highlighted on a Leaflet world map, with city and theme-park markers.",
      "Hover a country for its city list, a city for photos, a park for its favourite coaster and flat ride.",
      "Click any element for a detail panel drilling country → city → theme park → rides.",
      "Admin mode (password) adds inline forms to create, edit and delete countries, cities, parks and rides, with a pick-on-map location picker.",
      "Stats panel with totals and lists of countries, parks and favourite coasters.",
    ],
    details: [
      "Visited countries are highlighted on a react-leaflet world map, with city and theme-park markers and a top toolbar. Selecting a park opens a detail panel with photos, the favourite coaster and flat ride, and the full ride list; a stats panel totals countries, cities, theme parks and coasters.",
      "Admin mode adds a country with a been-here or want-to-go status and an optional year, and the login password can be changed from within the app.",
      "The project is an npm workspaces monorepo: a shared package of TypeScript types, a Fastify plus Drizzle plus Postgres REST API, a React map client, and a Vercel function entrypoint that runs the server as a single serverless function.",
    ],
    featured: true,
  },
  {
    slug: "hungryeditor",
    name: "hungryeditor",
    tagline:
      "A fast, native Markdown editor with live preview — no Electron, no IDE weight.",
    description:
      "A native C++20 and Qt 6 Markdown editor built for the editing feel of a real text editor with the live preview of a dedicated Markdown app. Fenced code blocks get real syntax highlighting from the actual language grammar, the preview pane syncs scroll position and renders mermaid diagrams and KaTeX math fully offline, and the whole app cold-starts in under a quarter second on Linux or Windows.",
    technologies: [
      { name: "C++", icon: "cplusplus" },
      { name: "Qt", icon: "qt" },
      { name: "CMake", icon: "cmake" },
    ],
    demoUrl: null,
    repoUrl: "https://github.com/dagike/hungryeditor",
    screenshot: "/projects/hungryeditor/cover.png",
    demos: [
      {
        src: "/projects/hungryeditor/demo/live-preview.mp4",
        poster: "/projects/hungryeditor/demo/live-preview.jpg",
        title: "Live preview",
        description:
          "Typing Markdown with mermaid diagrams and KaTeX math rendering live, side by side with synced scrolling.",
      },
      {
        src: "/projects/hungryeditor/demo/command-palette.mp4",
        poster: "/projects/hungryeditor/demo/command-palette.jpg",
        title: "Command palette",
        description:
          "Fuzzy-searching and running commands from the command palette.",
      },
      {
        src: "/projects/hungryeditor/demo/multi-cursor.mp4",
        poster: "/projects/hungryeditor/demo/multi-cursor.jpg",
        title: "Multi-cursor",
        description:
          "Multi-cursor editing with select-next-occurrence for fast, repeated changes.",
      },
      {
        src: "/projects/hungryeditor/demo/themes.mp4",
        poster: "/projects/hungryeditor/demo/themes.jpg",
        title: "Themes",
        description: "Cycling through the four built-in themes.",
      },
    ],
    features: [
      "Fenced code blocks highlighted with the actual language grammar, not generic monospace.",
      "Side-by-side live preview with synced scrolling, offline mermaid diagrams and KaTeX math.",
      "Multi-cursor editing, select-next-occurrence, rectangular column selection and regex find/replace.",
      "Fuzzy command palette and go-to-anything file and buffer search.",
      "GFM tables with tab navigation and auto-alignment, task lists, footnotes and an outline panel.",
      "Standalone HTML export with inlined assets, PDF export, and four built-in themes plus custom JSON themes.",
      "Cold start under a quarter second; native Linux and Windows packages, no Electron.",
    ],
    details: [
      "hungryeditor is a native Markdown editor for people who live in the terminal but still want a real editor for prose — the editing feel of a proper code editor, the live preview of a dedicated Markdown app, and none of the browser weight of an Electron shell.",
      "Editing features cover multi-cursor and select-next-occurrence, rectangular column selection, regex find/replace and find-in-files, a fuzzy command palette, go-to-anything search, and line move/duplicate/delete/join. Markdown authoring adds heading cycling, GFM tables with tab navigation, task lists with clickable checkboxes that write back to the source, footnotes, autolinks and an outline panel that tracks the caret.",
      "The live preview keeps bidirectional synced scrolling, themed syntax highlighting in fenced code blocks, and bundled mermaid diagrams and KaTeX math that render fully offline behind a strict content-security policy. A filtered file-tree sidebar, session restore and crash-safe autosave round out the workspace, alongside standalone HTML and PDF export and four built-in themes.",
      "Built with C++20 and Qt 6, packaged as .deb and .rpm on Linux and an .msi or portable .zip on Windows.",
    ],
    featured: true,
  },
  {
    slug: "game-library",
    name: "Game Library",
    tagline:
      "A personal catalogue of favourite games with ratings, notes and public comments.",
    description:
      "A public list of quick-view game cards with real-time search, filters and sorting, plus a detail page per game with full info, a personal rating and ranking, private notes and open public comments. Game data is imported from the RAWG API; only the seeded owner account can add, edit or delete.",
    technologies: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Drizzle ORM", icon: "drizzle" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Vercel", icon: "vercel" },
    ],
    demoUrl: "https://game-library-liart.vercel.app",
    repoUrl: "https://github.com/dagike/game-library",
    screenshot: "/projects/game-library/cover.png",
    features: [
      "Public library of quick-view game cards — cover, title, star rating — with real-time search, filters and sorting.",
      "Per-game detail page with full metadata, a personal rating and ranking, private notes, and an open public comment thread.",
      "Games imported from the RAWG API through an admin search-and-import flow rather than typed in by hand.",
      "Box art pulled from SteamGridDB, falling back to RAWG's image when there is no match.",
      "A single seeded owner account gates every add, edit and delete; browsing and commenting stay open to everyone.",
    ],
    details: [
      "The public library page is a grid of quick-view cards — cover, title, star rating — with real-time search, filters and sorting. Each game has a detail page with full metadata, a personal rating and ranking, private notes, and a public comment thread anyone can post to.",
      "Games are imported from the RAWG API rather than typed in by hand: the admin flow searches RAWG and pulls the selected title into the local database. Browsing and commenting are open to everyone; adding, editing and deleting are restricted to a single seeded owner account.",
      "Built on the Next.js App Router with Tailwind and Drizzle over a Neon Postgres database, deployed on Vercel.",
    ],
    featured: false,
  },
  {
    slug: "cybersecurity",
    name: "Web Application Security Demo",
    tagline:
      "The same full-stack app built twice — intentionally vulnerable, then hardened.",
    description:
      "A cookie-session login and notes CRUD app implemented as two variants: one with realistic, intentional web vulnerabilities and one hardened with industry-standard practices. Every flaw is documented as flaw to exploit to fix to principle, with runnable exploit requests and an in-app attack console that fires real requests at the API.",
    technologies: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vite", icon: "vite" },
      { name: "Drizzle ORM", icon: "drizzle" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Zod", icon: "zod" },
    ],
    demoUrl: "https://cybersecurity-fixed.vercel.app",
    repoUrl: "https://github.com/dagike/cybersecurity",
    screenshot: "/projects/cybersecurity/cover.png",
    features: [
      "One cookie-session login and notes CRUD app built twice: an intentionally vulnerable variant and a hardened one with the same features.",
      "Six vulnerability classes mapped to the OWASP Top 10 — SQL injection, broken authentication, IDOR, stored XSS, missing CSRF protection and verbose errors.",
      "Per-flaw write-ups taking each issue from exploit to fix to underlying principle, backed by runnable exploit requests.",
      "In-app attack console that fires real requests at the vulnerable API.",
      "Vulnerable app runs only behind a shared-password gate, holds fake seeded data, carries an insecure-demo banner and re-seeds on a schedule.",
      "Both deployments rate-limited at the edge; databases and secrets fully isolated between the two apps.",
    ],
    details: [
      "One small app — cookie-session login plus notes CRUD — built twice. apps/vulnerable carries realistic, intentional web vulnerabilities; apps/fixed has the same features hardened with standard practices. The write-ups take each flaw from exploit through fix to the underlying principle, backed by runnable exploit requests.",
      "The vulnerable app is a deliberately insecure teaching demo. It holds only fake, seeded data; the unsafe behaviour is off by default and runs only behind a shared-password gate; its database and secrets are fully isolated from everything else; every page carries an insecure-demo banner; both deployments are rate-limited at the edge; and the vulnerable database is re-seeded on a schedule.",
      "The hardened app is the live demo. The gated vulnerable deployment lives at cybersecurity-vulnerable.vercel.app.",
    ],
    featured: false,
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
