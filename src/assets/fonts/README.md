# OG-image fonts

These TTFs exist solely so `src/app/opengraph-image.tsx` can render the social
card in the site's real typefaces. Satori (the renderer behind `next/og`)
cannot read `next/font`, and it cannot parse WOFF2 — so the same two families
the site already loads are vendored here as TrueType.

They are **not** served to browsers. Page typography still comes from
`next/font/google` in `src/app/layout.tsx`.

| File | Family | Used for |
|---|---|---|
| `SpaceGrotesk-Bold.ttf` | Space Grotesk 700 | the `HelloWorld!` wordmark |
| `IBMPlexMono-Medium.ttf` | IBM Plex Mono 500 | tagline and school line |

Both families are licensed under the SIL Open Font License 1.1; the full texts
are alongside as `OFL-SpaceGrotesk.txt` and `OFL-IBMPlexMono.txt`.
