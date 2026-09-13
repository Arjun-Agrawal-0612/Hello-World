import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Button, SectionLabel, Tag } from "@/components/ui";
import { MemberCard } from "@/components/MemberCard";
import { pillars } from "@/content/pillars";
import { projects } from "@/content/projects";
import { team } from "@/content/team";
import { whyJoin } from "@/content/why";
import { upcomingEvents, formatEventDate } from "@/content/events";
import { site } from "@/content/site";
import { JOIN_URL } from "@/content/links";

export default function Home() {
  const featured = projects.slice(0, 4);
  const next = upcomingEvents()[0];

  return (
    <>
      <Hero />

      {/* ---------- WHAT IS HELLO WORLD ---------- */}
      <section className="shell py-24 md:py-32">
        <SectionLabel index="00">What is Hello World</SectionLabel>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.02] max-w-[16ch]">
              Technology is powerful. People are complicated.{" "}
              <span className="text-aqua-deep">Let&apos;s build for both.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="space-y-6 text-ink-soft leading-relaxed self-end">
            <p>
              The name is the first program most people ever write. For us it means
              something wider — the start of an idea, and an open question:{" "}
              <span className="text-ink font-medium">what can we build?</span>
            </p>
            <p>
              A CS student builds the technology. A psychology student understands
              the people using it. An economics student reads the incentives. A
              designer makes it make sense. A founder turns it into something real.
            </p>
            <p className="text-ink font-medium">
              Hello World puts all of those people in the same room.
            </p>
          </Reveal>
        </div>

        {/* The claim that matters most, set as a standalone statement. */}
        <Reveal delay={80}>
          <div className="mt-20 border-t border-stone pt-10 grid gap-8 md:grid-cols-[auto_1fr] md:gap-14 md:items-center">
            <p className="eyebrow text-mauve-deep whitespace-nowrap">Read this part</p>
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-[-0.02em] max-w-3xl">
              {site.secondMessage}{" "}
              <span className="text-ink-soft">
                Come with an idea, a question, or nothing at all.
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- PILLARS ---------- */}
      <section className="bg-ink text-paper py-24 md:py-32">
        <div className="shell">
          <div className="flex items-baseline gap-4 pb-6 mb-14 border-b border-paper/15">
            <span className="eyebrow text-aqua">01</span>
            <span className="eyebrow text-paper/55">What we do</span>
          </div>

          <Reveal>
            <p className="font-display text-3xl md:text-5xl tracking-[-0.03em] mb-16">
              Learn <span className="text-paper/30">&rarr;</span> Build{" "}
              <span className="text-paper/30">&rarr;</span> Test{" "}
              <span className="text-paper/30">&rarr;</span>{" "}
              <span className="text-aqua">Launch</span>
            </p>
          </Reveal>

          <ol className="grid gap-px bg-paper/15 md:grid-cols-2 lg:grid-cols-4 border border-paper/15">
            {pillars.map((p, i) => (
              <Reveal key={p.number} as="li" delay={i * 90} className="bg-ink">
                <div className="group h-full p-7 md:p-8 transition-colors duration-500 hover:bg-ink-deep">
                  <div className="flex items-baseline justify-between">
                    <span className="eyebrow text-aqua">{p.number}</span>
                    <span className="eyebrow text-paper/30">{p.kicker}</span>
                  </div>
                  <h3 className="mt-10 font-display text-3xl md:text-[2rem] text-paper">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-paper/60">{p.body}</p>
                  <ul className="mt-7 space-y-1.5 border-t border-paper/12 pt-5">
                    {p.detail.map((d) => (
                      <li key={d} className="text-[0.8125rem] text-paper/45 leading-relaxed">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section className="shell py-24 md:py-32">
        <SectionLabel index="02">What we want to build</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] max-w-[14ch]">
              Directions, not a portfolio.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-ink-soft max-w-sm leading-relaxed text-sm">
              We are brand new, so these are the problems we are pointed at — not
              work we are claiming to have finished. Pick one, or bring your own.
            </p>
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-2 border-t border-l border-stone">
          {featured.map((p, i) => (
            <Reveal key={p.title} as="li" delay={i * 80} className="border-b border-r border-stone">
              <article className="group h-full p-7 md:p-9 transition-colors duration-500 hover:bg-paper-bright">
                <div className="flex flex-wrap gap-2">
                  {p.category.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-[1.75rem]">{p.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed text-[0.9375rem]">
                  {p.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-10">
            <Button href="/projects" variant="outline">
              All directions
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ---------- NEXT EVENT ---------- */}
      {next && (
        <section className="shell pb-24 md:pb-32">
          <Reveal>
            <div className="border border-ink/15 p-8 md:p-14 bg-paper-bright">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <p className="eyebrow text-aqua-deep">Next up</p>
                  <h2 className="mt-5 font-display text-[clamp(1.75rem,4.5vw,3rem)] max-w-[18ch]">
                    {next.title}
                  </h2>
                  <p className="mt-5 eyebrow text-ink-soft">
                    {formatEventDate(next.date)}
                    {next.time ? ` · ${next.time}` : ""}
                    {next.location ? ` · ${next.location}` : ""}
                  </p>
                  <p className="mt-5 text-ink-soft max-w-md leading-relaxed">
                    {next.blurb}
                  </p>
                </div>
                <Link
                  href="/events"
                  className="eyebrow shrink-0 border border-ink px-6 py-4 hover:bg-ink hover:text-paper transition-colors duration-300"
                >
                  All events &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* ---------- TEAM ---------- */}
      <section className="shell pb-24 md:pb-32">
        <SectionLabel index="03">Who you&apos;re joining</SectionLabel>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone">
          {team.map((m, i) => (
            <Reveal key={m.name} as="li" delay={i * 70} className="border-b border-r border-stone">
              <MemberCard member={m} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- WHY JOIN ---------- */}
      <section className="shell pb-24 md:pb-32">
        <SectionLabel index="04">Why join</SectionLabel>
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] max-w-[15ch] mb-14">
            Don&apos;t just join a club. Build something.
          </h2>
        </Reveal>
        <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyJoin.map((w, i) => (
            <Reveal key={w.title} as="li" delay={i * 70} className="border-t border-stone pt-6">
              <h3 className="font-display text-xl tracking-[-0.02em]">{w.title}</h3>
              <p className="mt-2 text-ink-soft text-[0.9375rem] leading-relaxed">{w.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- JOIN ---------- */}
      <section className="shell pb-8">
        <Reveal>
          <div className="bg-ink text-paper p-8 py-20 md:p-20 text-center">
            <p className="eyebrow text-aqua">Ready to build?</p>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,9vw,6rem)] leading-[0.92] tracking-[-0.045em]">
              Say hello.
            </h2>
            <p className="mt-8 mx-auto max-w-xl text-paper/65 leading-relaxed">
              Whether you have an idea, a project, a startup, or absolutely no idea
              what you want to build yet — you&apos;re welcome here.
            </p>
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow mt-11 inline-flex items-center gap-3 bg-aqua text-ink px-8 py-4 transition-all duration-300 hover:gap-5"
            >
              Join Hello World
              <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="mt-6 eyebrow text-paper/35">Via Northeastern Engage</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
