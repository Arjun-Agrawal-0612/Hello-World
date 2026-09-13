import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui";
import { pillars } from "@/content/pillars";
import { activities, philosophy } from "@/content/why";
import { JOIN_URL } from "@/content/links";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hello World is an interdisciplinary technology and innovation community at Northeastern University Oakland. Learn what we do and what we believe.",
};

export default function About() {
  return (
    <>
      <PageHeader
        index="00"
        eyebrow="About"
        title="What can we build?"
        lede="Our goal isn't simply to learn technology. It's to use technology to understand people, solve real problems, build products, and create impact."
      />

      {/* --- the name --- */}
      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="bg-ink text-paper p-8 md:p-12 font-mono text-sm leading-loose">
              <p className="text-paper/35"># the first thing you ever write</p>
              <p className="mt-3">
                <span className="text-aqua">print</span>(
                <span className="text-mauve">&quot;Hello, World!&quot;</span>)
                <span className="animate-caret ml-1 text-aqua">_</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-ink-soft leading-relaxed self-center">
            <p>
              For programmers, &ldquo;Hello World&rdquo; is the first thing you build when you
              enter the world of programming. For us the meaning is broader — the
              beginning of an idea, an introduction to a new possibility, an
              invitation to explore what can be built.
            </p>
            <p className="text-ink font-display text-2xl tracking-[-0.02em] leading-snug">
              It isn&apos;t &ldquo;Hello, World, I&apos;m learning to code.&rdquo; It&apos;s{" "}
              <span className="text-aqua-deep">
                &ldquo;Hello, World. What can we build?&rdquo;
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- pillars in depth --- */}
      <section className="shell pb-24 md:pb-32">
        <div className="flex items-baseline gap-4 pb-6 mb-14 border-b border-stone">
          <span className="eyebrow text-aqua-deep">01</span>
          <span className="eyebrow text-ink-soft">Four pillars</span>
        </div>
        <div className="space-y-px bg-stone border border-stone">
          {pillars.map((p, i) => (
            <Reveal key={p.number} delay={i * 70} className="bg-paper">
              <div className="grid gap-6 p-7 md:p-10 md:grid-cols-[6rem_1fr_1.1fr] md:gap-10 md:items-start transition-colors duration-500 hover:bg-paper-bright">
                <span className="eyebrow text-aqua-deep">{p.number}</span>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl tracking-[-0.03em]">
                    {p.title}
                  </h2>
                  <p className="mt-2 eyebrow text-ink-soft">{p.kicker}</p>
                </div>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 md:pt-2">
                  {p.detail.map((d) => (
                    <li key={d} className="text-sm text-ink-soft">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- what we actually do --- */}
      <section className="shell pb-24 md:pb-32">
        <div className="flex items-baseline gap-4 pb-6 mb-14 border-b border-stone">
          <span className="eyebrow text-aqua-deep">02</span>
          <span className="eyebrow text-ink-soft">What we actually do</span>
        </div>
        <Reveal>
          <p className="font-display text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05] max-w-[20ch] mb-14">
            Not another club where you listen to someone talk for an hour.
          </p>
        </Reveal>
        <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.title} as="li" delay={i * 60} className="border-t border-stone pt-6">
              <h3 className="font-display text-xl tracking-[-0.02em]">{a.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{a.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* --- philosophy --- */}
      <section className="bg-ink text-paper py-24 md:py-32">
        <div className="shell">
          <div className="flex items-baseline gap-4 pb-6 mb-14 border-b border-paper/15">
            <span className="eyebrow text-aqua">03</span>
            <span className="eyebrow text-paper/55">What we believe</span>
          </div>
          <ul className="space-y-px">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 70}>
                <div className="grid gap-2 py-7 border-b border-paper/12 md:grid-cols-[1fr_1fr] md:gap-12 md:items-baseline">
                  <h3 className="font-display text-2xl md:text-[2rem] tracking-[-0.03em]">
                    {p.title}
                  </h3>
                  <p className="text-paper/55 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* --- bay area --- */}
      <section className="shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.02] max-w-[14ch]">
              We happen to be standing in the{" "}
              <span className="text-aqua-deep">right place.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-ink-soft leading-relaxed self-center">
            <p>
              Hello World is based at Northeastern University Oakland — students,
              but students sitting inside one of the world&apos;s strongest ecosystems
              for technology, startups, AI, venture capital, and design.
            </p>
            <p>
              We intend to use that: founder talks, startup visits, mentorship,
              project collaborations, and demo days that connect what happens in
              our meetings to what happens across the bridge.
            </p>
            <div className="pt-4">
              <Button href={JOIN_URL} external>
                Join Hello World
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
