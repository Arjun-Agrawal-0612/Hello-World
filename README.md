# HelloWorld! — website

Northeastern University Oakland. **People × Ideas × Impact**

## Naming

The official organization name is exactly **`HelloWorld!`** — one word, capital
H and W, with the exclamation mark. It is not "Hello World", "hello world", or
"HelloWorld".

Use `site.name` from `src/content/site.ts` anywhere the organization is named,
rather than typing the string. The only place the spaced lowercase form appears
is the About page, where it quotes the *programming phrase* `print("Hello,
World!")` — that is a quotation, not our name.

Next.js 16 · React 19 · Tailwind v4 · TypeScript. Every page is statically
generated, so it loads fast on a phone at the tabling booth.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Changing content without touching layout

All copy that changes over time lives in `src/content/`. Edit these; the whole
site updates. You should not need to open a component to add a person or an event.

| File | What it controls |
| --- | --- |
| `site.ts` | Club name, tagline, description, SEO keywords, **deployed URL** |
| `links.ts` | Engage link and every social. Set a value to `null` to hide it everywhere |
| `team.ts` | Officer cards |
| `projects.ts` | Project directions and their categories |
| `events.ts` | Events. Past ones drop off automatically by date |
| `pillars.ts` | Understand / Build / Validate / Launch |
| `why.ts` | "Why join", philosophy, and activities lists |

### Adding a person

Append to the array in `src/content/team.ts`. `bio`, `photo`, and the socials
accept `null` — a missing photo renders their initials, a missing bio just omits
the line. Put headshots in `public/team/` and reference them as `/team/name.jpg`.

### Adding an event

Append to `src/content/events.ts` with an ISO `date` (`"2026-10-08"`). It sorts
itself and moves to "Past" on its own. `time`, `location`, and `rsvp` accept `null`.

`date` also accepts `null`, for an event that is real but not yet scheduled. It
renders as "Date TBA", sorts after every scheduled event, and never expires —
so a plan is never shown to students as a confirmed fact. Give it a real date
once one exists.

### Hiding a social link

Set it to `null` in `links.ts`. Nothing renders a dead link — the footer falls
back to pointing at Engage.

## Brand

Defined once in `src/app/globals.css` under `@theme`. Do not introduce colors
outside this palette.

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#36382E` | Charcoal Brown — text, dark sections |
| `paper` | `#EDE6E3` | Parchment — page background |
| `stone` | `#DADAD9` | Alabaster Grey — rules and borders |
| `aqua` | `#5BC3EB` | Sky Aqua — primary accent |
| `mauve` | `#AF7595` | Dusty Mauve — category tags only |

`ink-deep`, `ink-soft`, `paper-bright`, `aqua-deep`, and `mauve-deep` are derived
shades. `aqua-deep` and `mauve-deep` exist because the raw aqua and mauve are too
light to carry small text accessibly on parchment — use them for text, and the
raw values for fills and borders.

Type: **Space Grotesk** (display), **IBM Plex Sans** (body), **IBM Plex Mono** (labels).

### Logo

`src/components/Logo.tsx` renders the mark as inline SVG. Two variants:

- `variant="full"` — planet, orbit, sparkle. Only legible above ~64px.
- `variant="compact"` — planet and glyph. Use anywhere small, including the header.

Use `tone="light"` on charcoal backgrounds, or the mark's dark half disappears.
Each instance needs a unique `uid` so its gradient ids don't collide.

The original raster logo and the palette reference are kept in `public/brand/`.

## Before launch

- [ ] Set the real deployed URL in `src/content/site.ts` (`url`) — Open Graph,
      the canonical tags, the sitemap and the structured data all read from it.
- [ ] Fill in the `TODO`s in `team.ts` (last names, bios, socials) and
      `events.ts` (tabling time and place, first-meeting date once confirmed).
- [ ] Add socials to `links.ts`. Anything left `null` stays hidden sitewide.
- [ ] Generate the QR code against the deployed URL, not localhost.

Note: the join link points at Northeastern Engage, which requires Northeastern
SSO. The Join page tells visitors this so the login wall isn't a surprise.
