import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui";
import { MemberCard } from "@/components/MemberCard";
import { team } from "@/content/team";
import { JOIN_URL } from "@/content/links";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The officers behind HelloWorld! at Northeastern University Oakland — computer science, psychology, economics, biology, and business.",
  alternates: { canonical: "./" },
};

export default function Team() {
  const majors = Array.from(
    new Set(team.flatMap((m) => m.major.split("+").map((s) => s.trim()))),
  );

  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Team"
        title="Who you're joining."
        lede="Five officers, five different paths through the same question. This is who you'll actually be building with."
      />

      <section className="shell pb-16">
        <Reveal>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 pb-10 border-b border-stone">
            {majors.map((m) => (
              <li key={m} className="eyebrow text-ink-soft">
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-32">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone">
          {team.map((m, i) => (
            <Reveal key={m.name} as="li" delay={(i % 3) * 80} className="border-b border-r border-stone">
              <MemberCard member={m} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <div className="mt-16 border border-ink/15 bg-paper-bright p-8 md:p-14">
            <h2 className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] max-w-[20ch] tracking-[-0.03em]">
              There&apos;s room on this page.
            </h2>
            <p className="mt-5 max-w-xl text-ink-soft leading-relaxed">
              We&apos;re a new club, which means the people who show up early get to
              shape what this becomes. If that sounds like you, come find us.
            </p>
            <div className="mt-9">
              <Button href={JOIN_URL} external>
                Join HelloWorld!
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
