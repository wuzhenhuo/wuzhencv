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

## Changelog

### 2026-09-22

- **Content**: synced CV data against the March 2026 résumé — added the 2026 World Humanoid Robot Games results (*Superpowered Boys*, *Tian Gong Ji Yue*), *A Moment for Tea*, and the additional *Homeward Flight* festival selection to Exhibitions; extended the About bio to mention the 2026 Dance Cheerleading medals.
- **Selected Works**: added three 2026 pieces with embedded video — *Homeward Flight* (documentary, Bilibili), *Superpowered Boys* (Silver, Dance Cheerleading), and *Tian Gong Ji Yue* (Bronze, Dance Cheerleading) — each with Bilibili + YouTube links and bilingual descriptions.
- **Hero "Record" strip**: added a scannable list of headline credentials (Paralympics design credit, Humanoid Robot Games medals, DanceLab and Theatre of Tomorrow awards, Ph.D.) directly under the hero description.
- **Terminology**: replaced "digital light sculpture" with "humanoid robot performance" + "projection design" in the hero tagline; relabeled Wu Zhen's own AI-generated work from "AI Film" to "AIGC Film" throughout (festival/award proper names left unchanged).
- **Visual design**: replaced the black/white/red "Nothing" theme with a warm editorial palette (cream `#F5F0E6` / ink-navy `#171A2E` in light mode, navy `#0B0E1C` / cream `#EDEAE2` in dark mode, gold `#B8924F`/`#C2A15C` accent), and set the hero name headline in **Fraunces** (warm serif) while keeping the mono type for labels/nav.
