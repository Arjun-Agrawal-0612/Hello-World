import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button, SectionLabel, Tag } from "@/components/ui";
import { pathways } from "@/content/pathways";
import { projects } from "@/content/projects";
import { JOIN_URL } from "@/content/links";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Two ways to build with HelloWorld! at Northeastern University Oakland: client projects for real organizations, and passion projects built around your own ideas.",
  alternates: { canonical: "./" },
};

const statusCopy = {
  idea: "Open direction",
  active: "In progress",
  shipped: "Shipped",
} as const;

export default function Projects() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Projects"
        title="Two ways to build."
        lede="Join a team building for a real client, or bring an idea of your own and build it your way. Both paths are open to every member, whatever your major or experience."
      />

      {/* ---------- PATHWAYS ---------- */}
      <section className="shell pb-24 md:pb-32">
        <SectionLabel index="01">Two ways in</SectionLabel>

        <ul className="grid md:grid-cols-2 border-t border-l border-stone">
          {pathways.map((p, i) => (
            <Reveal key={p.number} as="li" delay={i * 100} className="border-b border-r border-stone">
              <article className="flex h-full flex-col p-7 md:p-9 lg:p-12 transition-colors duration-500 hover:bg-paper-bright">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow text-aqua-deep">{p.number}</span>
                  <span className="eyebrow text-ink-soft">{p.name}</span>
                </div>
                <h2 className="mt-10 font-display text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.03em]">
                  {p.title}
                </h2>
                <p className="mt-5 font-display text-xl leading-snug tracking-[-0.02em]">
                  {p.summary}
                </p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{p.body}</p>

                <h3 className="mt-9 eyebrow text-ink-soft">{p.examplesLabel}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.examples.map((e) => (
                    <li key={e}>
                      <Tag>{e}</Tag>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-9 eyebrow text-ink-soft">How it works</h3>
                <ol className="mt-4 divide-y divide-stone border-y border-stone">
                  {p.steps.map((s, n) => (
                    <li key={s} className="flex items-baseline gap-4 py-3.5">
                      <span aria-hidden="true" className="eyebrow text-aqua-deep">
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{s}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-9">
                  <p className="eyebrow text-mauve-deep">{p.note.label}</p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed">{p.note.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- DIRECTIONS ---------- */}
      <section className="shell pb-24 md:pb-32">
        <SectionLabel index="02">Open directions</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] max-w-[14ch]">
              Pick a problem.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-ink-soft max-w-sm leading-relaxed text-sm">
              We&apos;re new, so this is an honest list: directions we&apos;re pointed at
              rather than work we&apos;ve finished. Every one of them is open, and none
              of them require you to already be an expert.
            </p>
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone">
          {projects.map((p, i) => (
            <Reveal key={p.title} as="li" delay={(i % 3) * 80} className="border-b border-r border-stone">
              <article className="group flex h-full flex-col p-7 md:p-9 transition-colors duration-500 hover:bg-paper-bright">
                <div className="flex flex-wrap gap-2">
                  {p.category.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-[1.75rem] tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {p.blurb}
                </p>
                <p className="mt-7 flex items-center gap-2 eyebrow text-ink-soft/70">
                  <span
                    aria-hidden="true"
                    className={`inline-block h-1.5 w-1.5 rounded-full ${
                      p.status === "idea" ? "bg-mauve" : "bg-aqua"
                    }`}
                  />
                  {statusCopy[p.status]}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <div className="mt-16 border border-ink/15 bg-paper-bright p-8 md:p-14">
            <h2 className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] max-w-[18ch] tracking-[-0.03em]">
              Your idea isn&apos;t on this list.
            </h2>
            <p className="mt-5 max-w-xl text-ink-soft leading-relaxed">
              Good. Bring it. The fastest way onto a project team is to show up
              with a problem you actually care about.
            </p>
            <div className="mt-9">
              <Button href={JOIN_URL} external>
                Join and pitch it
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
