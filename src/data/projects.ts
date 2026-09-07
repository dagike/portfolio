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
    details: [
      "A portfolio ecommerce build that runs on real data rather than fixtures: the product catalog, reviews and orders are seeded into a Neon Postgres database and served through a small set of serverless API routes.",
      "The storefront leads with a hero, category tiles and a top-rated rail. Product cards surface sale pricing and low-stock and out-of-stock badges. The shop page pairs a sidebar of filters (category, price range, minimum rating, in-stock only) with a sort control and an infinite-scroll grid.",
      "Each product has an image gallery, stock status, a quantity control, and add-to-cart and wishlist actions, plus a reviews section with a rating breakdown. The cart supports quantity edits, line removal, promo codes and a live order summary with subtotal, shipping and tax, feeding a multi-step, validated checkout.",
      "Payments are mocked — no real charge is ever made.",
    ],
    featured: true,
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
    details: [
      "One small app — cookie-session login plus notes CRUD — built twice. apps/vulnerable carries realistic, intentional web vulnerabilities; apps/fixed has the same features hardened with standard practices. The write-ups take each flaw from exploit through fix to the underlying principle, backed by runnable exploit requests.",
      "The vulnerable app is a deliberately insecure teaching demo. It holds only fake, seeded data; the unsafe behaviour is off by default and runs only behind a shared-password gate; its database and secrets are fully isolated from everything else; every page carries an insecure-demo banner; both deployments are rate-limited at the edge; and the vulnerable database is re-seeded on a schedule.",
      "The hardened app is the live demo. The gated vulnerable deployment lives at cybersecurity-vulnerable.vercel.app.",
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
    details: [
      "Visited countries are highlighted on a react-leaflet world map, with city and theme-park markers and a top toolbar. Selecting a park opens a detail panel with photos, the favourite coaster and flat ride, and the full ride list; a stats panel totals countries, cities, theme parks and coasters.",
      "Admin mode adds a country with a been-here or want-to-go status and an optional year, and the login password can be changed from within the app.",
      "The project is an npm workspaces monorepo: a shared package of TypeScript types, a Fastify plus Drizzle plus Postgres REST API, a React map client, and a Vercel function entrypoint that runs the server as a single serverless function.",
    ],
    featured: false,
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
    details: [
      "The public library page is a grid of quick-view cards — cover, title, star rating — with real-time search, filters and sorting. Each game has a detail page with full metadata, a personal rating and ranking, private notes, and a public comment thread anyone can post to.",
      "Games are imported from the RAWG API rather than typed in by hand: the admin flow searches RAWG and pulls the selected title into the local database. Browsing and commenting are open to everyone; adding, editing and deleting are restricted to a single seeded owner account.",
      "Built on the Next.js App Router with Tailwind and Drizzle over a Neon Postgres database, deployed on Vercel.",
    ],
    featured: false,
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
