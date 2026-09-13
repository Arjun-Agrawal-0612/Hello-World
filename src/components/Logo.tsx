/**
 * The HelloWorld! mark, rebuilt as inline SVG so it stays crisp at any size,
 * carries no background box, and can animate its orbit.
 *
 * Two variants, because the full mark loses legibility below ~44px:
 *   "full"    — planet, orbit, sparkle. For hero, footer, feature moments.
 *   "compact" — planet and glyph only. For the header and anywhere small.
 *
 * `uid` must be unique per instance on a page — gradient and mask ids are
 * namespaced with it. Passing it explicitly keeps this a server component.
 */
export function LogoMark({
  uid,
  className = "",
  animated = false,
  variant = "full",
  tone = "dark",
}: {
  uid: string;
  className?: string;
  animated?: boolean;
  variant?: "full" | "compact";
  /** "dark" for parchment backgrounds; "light" for charcoal backgrounds,
   *  where the mark's charcoal half would otherwise disappear. */
  tone?: "dark" | "light";
}) {
  const g = `hw-${uid}-g`;
  const g2 = `hw-${uid}-g2`;
  const mask = `hw-${uid}-mask`;
  const base = tone === "light" ? "#EDE6E3" : "#36382E";
  const mid = tone === "light" ? "#9AD3EC" : "#3E7E9B";

  if (variant === "compact") {
    return (
      <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={g} x1="12" y1="82" x2="88" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={base} />
            <stop offset="0.55" stopColor={mid} />
            <stop offset="1" stopColor="#5BC3EB" />
          </linearGradient>
          <mask id={mask}>
            <rect width="100" height="100" fill="black" />
            <circle cx="50" cy="50" r="46" fill="white" />
            <circle cx="42" cy="47" r="43" fill="black" />
          </mask>
        </defs>
        <circle cx="50" cy="50" r="46" stroke={`url(#${g})`} strokeWidth="5" />
        <circle cx="50" cy="50" r="46" fill={`url(#${g})`} mask={`url(#${mask})`} />
        <g strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <polyline points="40,33 25,50 40,67" stroke={base} />
          <line x1="59" y1="29" x2="46" y2="71" stroke={mid} />
          <polyline points="62,33 77,50 62,67" stroke="#5BC3EB" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 190" fill="none" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={g} x1="30" y1="150" x2="172" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={base} />
          <stop offset="0.55" stopColor={mid} />
          <stop offset="1" stopColor="#5BC3EB" />
        </linearGradient>
        <linearGradient id={g2} x1="52" y1="140" x2="150" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={base} />
          <stop offset="1" stopColor="#5BC3EB" />
        </linearGradient>
        <mask id={mask}>
          <rect width="200" height="190" fill="black" />
          <circle cx="94" cy="102" r="66" fill="white" />
          <circle cx="80" cy="98" r="63" fill="black" />
        </mask>
      </defs>

      {/* orbit ring, passing behind the planet */}
      <g className={animated ? "animate-orbit" : undefined} style={{ transformOrigin: "94px 102px" }}>
        <ellipse
          cx="94"
          cy="102"
          rx="88"
          ry="33"
          transform="rotate(-20 94 102)"
          stroke={`url(#${g})`}
          strokeWidth="3.4"
        />
      </g>

      {/* planet: hairline ring plus weighted crescent */}
      <circle cx="94" cy="102" r="66" stroke={`url(#${g2})`} strokeWidth="3.6" />
      <circle cx="94" cy="102" r="66" fill={`url(#${g})`} mask={`url(#${mask})`} />

      {/* code glyph */}
      <g strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <polyline points="80,80 60,102 80,124" stroke={base} />
        <line x1="105" y1="75" x2="88" y2="129" stroke={mid} />
        <polyline points="112,80 132,102 112,124" stroke="#5BC3EB" />
      </g>

      {/* orbit crossing in front, lower left */}
      <path
        d="M 15 92 A 88 33 -20 0 0 118 160"
        stroke={`url(#${g2})`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* the idea */}
      <path
        className={animated ? "animate-twinkle" : undefined}
        style={{ transformOrigin: "176px 44px" }}
        d="M176 24 C177.6 39 182 43.4 195 46 C182 48.6 177.6 53 176 68 C174.4 53 170 48.6 157 46 C170 43.4 174.4 39 176 24 Z"
        fill="#5BC3EB"
      />
    </svg>
  );
}

/** Mark plus wordmark, set in the site's display face. */
export function LogoLockup({
  uid,
  className = "",
  markClass = "h-8 w-8",
  animated = false,
  variant = "compact",
  tone = "dark",
}: {
  uid: string;
  className?: string;
  markClass?: string;
  animated?: boolean;
  variant?: "full" | "compact";
  tone?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark uid={uid} className={markClass} animated={animated} variant={variant} tone={tone} />
      <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.035em] leading-none">
        HelloWorld!
      </span>
    </span>
  );
}
