# Raju Kumar — Portfolio

Personal site for Raju Kumar, Environmental Science student (Tribhuvan College of
Environment & Development Sciences / Nalanda University centre, Neemrana).

Next.js 15 (App Router) · Tailwind CSS · TypeScript.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

| Path                   | What it is                                                       |
| ---------------------- | ---------------------------------------------------------------- |
| `app/page.tsx`         | All page content — experience, projects, skills etc. are arrays at the top |
| `app/ui.tsx`           | Shared pieces: `Section`, `Button`, `CardStack`, `Badges`, `Highlights`, `Figures` |
| `app/theme-toggle.tsx` | Light/dark switch, persisted to `localStorage`                   |
| `app/layout.tsx`       | Fonts, metadata, no-flash theme script                           |
| `app/globals.css`      | Colour tokens (light + dark) and the drafting-grid background    |
| `public/`              | Resume PDF and portrait                                          |

## Design

A spec-sheet layout: paper background with a faint hairline grid, bordered card
stacks, monospace labels and tags, and a single green accent. Fonts are
**IBM Plex Sans** and **IBM Plex Mono**.

Page order: hero + stats strip → Experience → Featured Projects → Skills →
Education & Certifications → Recognition & Leadership → contact call-to-action.

## Editing content

Everything is plain data near the top of `app/page.tsx`. Each project has a
title, tag, one-line description, tool badges, optional key figures and
highlight bullets; add or reorder entries in the `projects` array.

## Deploy

Push to a Git remote and import the repo on Vercel — no configuration needed.
