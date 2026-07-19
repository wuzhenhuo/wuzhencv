# Wu Zhen 吴振 — Portfolio Site

Personal portfolio and CV site for **Wu Zhen (吴振)**, a multimedia artist, projection designer, and Associate Professor at Beijing Dance Academy. The site presents his work across stage multimedia, AI film, projection mapping, and immersive performance, with full English/Chinese bilingual support.

Live at [www.alexzhenwu.com](https://www.alexzhenwu.com).

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS 4
- Radix UI primitives / shadcn-style components (`components/ui`)
- `next-themes` for dark/light mode
- Vercel Analytics

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production bundle |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Project Structure

```
app/                  Next.js App Router entry (layout, page, global styles)
components/           Page sections (hero, about, works, exhibitions, publications, teaching, contact)
components/ui/        Reusable UI primitives (shadcn-style)
lib/                  Portfolio content/data and utilities
hooks/                Custom React hooks
public/               Static assets (images, CV PDF, etc.)
```

## Deployment

Deployed on DigitalOcean App Platform, configured via [.do/app.yaml](.do/app.yaml). Pushes to `master` trigger an automatic deploy to `www.alexzhenwu.com`.
