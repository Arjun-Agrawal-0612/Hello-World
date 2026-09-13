import Link from "next/link";
import { LogoMark } from "./Logo";
import { site } from "@/content/site";
import { links, JOIN_URL } from "@/content/links";

/** Only renders links that actually exist — no dead handles on the site. */
function socialEntries() {
  const entries: { label: string; href: string }[] = [];
  if (links.instagram) entries.push({ label: "Instagram", href: links.instagram });
  if (links.linkedin) entries.push({ label: "LinkedIn", href: links.linkedin });
  if (links.github) entries.push({ label: "GitHub", href: links.github });
  if (links.discord) entries.push({ label: "Discord", href: links.discord });
  if (links.email) entries.push({ label: "Email", href: `mailto:${links.email}` });
  return entries;
}

export function SiteFooter() {
  const socials = socialEntries();

  return (
    <footer className="bg-ink text-paper mt-32">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark uid="ftr" className="h-12 w-12" variant="compact" tone="light" />
              <span className="font-display text-2xl font-semibold tracking-[-0.035em]">
                HelloWorld!
              </span>
            </div>
            <p className="eyebrow mt-5 text-aqua">{site.tagline}</p>
            <p className="mt-3 text-sm text-paper/55 max-w-xs leading-relaxed">
              {site.school}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-paper/45">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/events", label: "Events" },
                { href: "/team", label: "Team" },
                { href: "/join", label: "Join" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-draw text-paper/75 hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-paper/45">Elsewhere</h2>
            {socials.length > 0 ? (
              <ul className="mt-5 space-y-3 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw text-paper/75 hover:text-paper"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm text-paper/45 leading-relaxed">
                Socials landing soon. Find us on Engage in the meantime.
              </p>
            )}
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow mt-7 inline-block bg-aqua text-ink px-5 py-3 transition-opacity hover:opacity-85"
            >
              Join on Engage &rarr;
            </a>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-paper/12 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="eyebrow text-paper/40">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p className="eyebrow text-paper/40">
            <span className="text-aqua">$</span> print(&quot;Hello, World!&quot;)
            <span className="animate-caret ml-1 text-aqua">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
