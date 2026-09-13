"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup, LogoMark } from "./Logo";
import { JOIN_URL } from "@/content/links";

const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          lifted || open
            ? "bg-paper/85 backdrop-blur-md border-b border-stone"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="shell flex items-center justify-between h-[4.5rem]">
          <Link
            href="/"
            aria-label="Hello World — home"
            className="relative z-10 transition-opacity hover:opacity-65"
          >
            <LogoLockup uid="hdr" markClass="h-[1.875rem] w-[1.875rem]" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-9"
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`eyebrow link-draw transition-colors ${
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                  style={active ? { backgroundSize: "100% 1px" } : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow bg-ink text-paper px-5 py-2.5 transition-colors duration-300 hover:bg-aqua hover:text-ink"
            >
              Join
            </a>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden relative z-10 -mr-2 p-2 text-ink"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="block w-[22px] space-y-[6px]">
              <span
                className={`block h-px bg-ink transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px bg-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-ink transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile sheet — deliberately a sibling of <header>. The header uses
          backdrop-blur, which would make it the containing block for any
          fixed-position descendant and collapse this panel to zero height. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="md:hidden fixed inset-x-0 top-[4.5rem] bottom-0 z-40 bg-paper overflow-y-auto"
      >
        <nav aria-label="Mobile" className="shell flex min-h-full flex-col pt-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-[2.75rem] leading-[1.15] tracking-[-0.035em] py-2 border-b border-stone/60 text-ink"
              style={{
                animation: open
                  ? `hw-rise 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 60 + 60}ms both`
                  : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 bg-ink text-paper eyebrow px-6 py-4 text-center"
            style={{
              animation: open
                ? `hw-rise 0.55s cubic-bezier(0.16,1,0.3,1) ${nav.length * 60 + 90}ms both`
                : undefined,
            }}
          >
            Join Hello World &rarr;
          </a>

          <div className="mt-auto pb-10 pt-12 flex items-center gap-3 text-ink-soft">
            <LogoMark uid="sheet" className="h-6 w-6" variant="compact" />
            <span className="eyebrow">People &times; Ideas &times; Impact</span>
          </div>
        </nav>
      </div>
    </>
  );
}
