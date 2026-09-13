import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { whyJoin } from "@/content/why";
import { links, JOIN_URL } from "@/content/links";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join HelloWorld! at Northeastern University Oakland. No coding experience required — every major welcome.",
  alternates: { canonical: "./" },
};

export default function Join() {
  const socials = [
    links.instagram && { label: "Instagram", href: links.instagram },
    links.linkedin && { label: "LinkedIn", href: links.linkedin },
    links.github && { label: "GitHub", href: links.github },
    links.discord && { label: "Discord", href: links.discord },
    links.email && { label: "Email", href: `mailto:${links.email}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <section className="shell pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex items-center gap-4">
          <LogoMark uid="join" className="h-12 w-12" variant="compact" />
          <p className="eyebrow text-aqua-deep">Ready to build?</p>
        </div>

        <h1
          className="mt-10 font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.88] tracking-[-0.05em]"
          style={{ animation: "hw-rise 0.9s cubic-bezier(0.16,1,0.3,1) 60ms both" }}
        >
          Say hello.
        </h1>

        <Reveal delay={140}>
          <p className="mt-10 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-ink-soft">
            Whether you have an idea, a project, a startup, or absolutely no idea
            what you want to build yet — you&apos;re welcome here.{" "}
            <span className="text-ink">{site.secondMessage}</span>
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex w-full items-center justify-between gap-6 bg-ink text-paper px-8 py-7 transition-colors duration-500 hover:bg-ink-deep sm:w-auto sm:gap-20"
          >
            <span>
              <span className="eyebrow text-aqua block">Northeastern Engage</span>
              <span className="mt-2 block font-display text-2xl md:text-3xl tracking-[-0.03em]">
                Join HelloWorld!
              </span>
            </span>
            <span
              aria-hidden="true"
              className="text-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
            >
              &rarr;
            </span>
          </a>
        </Reveal>

        {/* Engage sits behind Northeastern SSO. Say so, so a student scanning
            at the table isn't surprised by a login wall. */}
        <Reveal delay={260}>
          <p className="mt-5 text-sm text-ink-soft max-w-md leading-relaxed">
            Engage asks you to sign in with your Northeastern account first.
            That&apos;s expected — it&apos;s how the university tracks club membership.
          </p>
        </Reveal>

        {socials.length > 0 && (
          <Reveal delay={280}>
            <div className="mt-14 pt-8 border-t border-stone">
              <p className="eyebrow text-ink-soft">Or find us at</p>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw font-display text-xl tracking-[-0.02em]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        <div className="mt-20 pt-10 border-t border-stone">
          <h2 className="eyebrow text-ink-soft mb-10">What you get out of it</h2>
          <ul className="grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {whyJoin.map((w, i) => (
              <Reveal key={w.title} as="li" delay={i * 70}>
                <h3 className="font-display text-xl tracking-[-0.02em]">{w.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {w.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
