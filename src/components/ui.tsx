import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
};

/**
 * Buttons stay rectangular with a 1px edge — closer to a lab notebook than
 * a SaaS landing page. The solid variant is charcoal, never aqua-on-parchment,
 * because aqua is too light to carry small text accessibly.
 */
export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 eyebrow transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

  const styles = {
    solid:
      "bg-ink text-paper hover:bg-ink-deep hover:gap-4 border border-ink",
    outline:
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper hover:gap-4",
    ghost: "text-ink/70 hover:text-ink hover:gap-4",
  }[variant];

  const inner = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform duration-300">
        &rarr;
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}

/** Numbered section header with a hairline rule, used on every page. */
export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 pb-6 mb-12 border-b border-stone">
      <span className="eyebrow text-aqua-deep">{index}</span>
      <span className="eyebrow text-ink-soft">{children}</span>
    </div>
  );
}

/** Small category chip. Mauve is reserved for these. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-block border border-mauve/40 text-mauve-deep px-2 py-1 leading-none">
      {children}
    </span>
  );
}
