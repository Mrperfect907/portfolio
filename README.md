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

| Path                 | What it is                                              |
| -------------------- | ------------------------------------------------------- |
| `app/page.tsx`       | All page content — every section lives here              |
| `app/ui.tsx`         | Shared pieces: `Project`, `Metrics`, `Steps`, `ImageSlot` |
| `app/theme-toggle.tsx` | Light/dark switch, persisted to `localStorage`         |
| `app/layout.tsx`     | Fonts, metadata, no-flash theme script                    |
| `tailwind.config.ts` | Colour and font tokens                                    |
| `public/`            | Resume PDF and images                                     |

## Design tokens

- `paper` `#fbfbf9` — light background
- `ink` `#12141a` — light text / dark background
- `moss` `#3f6b4f`, `moss-light` `#7fa88c` — accent, used sparingly
- Fonts: **Archivo** (display), **Newsreader** (body), **JetBrains Mono** (labels)

## Editing content

Everything is plain data in `app/page.tsx` — skills, education, certifications
and references are arrays you can edit in place. Project case studies are
`<Project>` blocks.

## Images still needed

`ImageSlot` renders a dashed placeholder wherever an image is missing. Each one
states the filename, aspect ratio and what the shot should be. To fill one,
drop the file in `public/` and swap the `<ImageSlot .../>` for an `<Image />`.

Currently outstanding:

- `esg-dashboard.png` — 16:10, 1440×900, the Power BI view

Supplied: `public/raju.jpg` — hero portrait, 900×1350 (2:3).

Map exports from the UHI, Jharia and Odisha studies would also carry those
sections well.

## Deploy

Push to a Git remote and import the repo on Vercel — no configuration needed.
