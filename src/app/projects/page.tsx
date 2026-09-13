import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button, Tag } from "@/components/ui";
import { projects } from "@/content/projects";
import { JOIN_URL } from "@/content/links";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The problems Hello World is pointed at — AI, web, psychology, economics, research, and community projects open to Northeastern Oakland students.",
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
        title="Pick a problem."
        lede="We're new, so this is an honest list: directions we're pointed at rather than work we've finished. Every one of them is open, and none of them require you to already be an expert."
      />

      <section className="shell pb-24 md:pb-32">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone">
          {projects.map((p, i) => (
            <Reveal key={p.title} as="li" delay={(i % 3) * 80} className="border-b border-r border-stone">
              <article className="group flex h-full flex-col p-7 md:p-9 transition-colors duration-500 hover:bg-paper-bright">
                <div className="flex flex-wrap gap-2">
                  {p.category.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
                <h2 className="mt-8 font-display text-2xl md:text-[1.75rem] tracking-[-0.03em]">
                  {p.title}
                </h2>
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
