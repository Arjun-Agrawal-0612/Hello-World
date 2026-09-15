import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/**
 * The site-wide social preview card.
 *
 * WHY THIS FILE EXISTS: with no og:image declared, link scrapers fall back to
 * harvesting the first sizeable <img> on the page — which on the homepage is a
 * team member's headshot. Declaring a real image is the only way to stop that.
 *
 * Built only from brand assets already in the repo: public/brand/mark.svg, the
 * palette in globals.css, and the display/mono faces the site already loads.
 * Satori cannot read next/font, so the same families ship as TTFs under
 * src/assets/fonts. Nothing here is generated or invented.
 */

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), "src/assets/fonts", file));

// Inlined as a data URI because Satori resolves <img> but not inline <svg>.
const markDataUri = () => {
  const svg = fs.readFileSync(
    path.join(process.cwd(), "public/brand/mark.svg"),
    "utf8",
  );
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};

// --- palette, mirrored from globals.css @theme
const INK = "#36382e";
const INK_SOFT = "#55574b";
const PAPER_BRIGHT = "#f6f2f0";
const STONE = "#dadad9";
const AQUA_DEEP = "#2a7ca0";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: PAPER_BRIGHT,
          padding: "0 84px",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 118,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 1,
              color: INK,
            }}
          >
            {site.name}
          </div>

          <div
            style={{
              marginTop: 34,
              fontFamily: "IBM Plex Mono",
              fontSize: 25,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: AQUA_DEEP,
            }}
          >
            {site.tagline}
          </div>

          <div
            style={{
              marginTop: 48,
              width: 168,
              height: 1,
              backgroundColor: STONE,
            }}
          />

          <div
            style={{
              marginTop: 26,
              fontFamily: "IBM Plex Mono",
              fontSize: 19,
              letterSpacing: "0.08em",
              color: INK_SOFT,
            }}
          >
            {site.school}
          </div>
        </div>

        <img src={markDataUri()} width={352} height={352} alt="" />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: font("SpaceGrotesk-Bold.ttf"), weight: 700, style: "normal" },
        { name: "IBM Plex Mono", data: font("IBMPlexMono-Medium.ttf"), weight: 500, style: "normal" },
      ],
    },
  );
}
