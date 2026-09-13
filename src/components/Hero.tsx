import { LogoMark } from "./Logo";
import { Button } from "./ui";
import { site } from "@/content/site";
import { JOIN_URL } from "@/content/links";

const disciplines = [
  "Computer Science", "Psychology", "Economics", "Design", "Entrepreneurship",
  "Data Science", "Business", "Biology", "Research", "Product",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* The mark, oversized and bled off the right edge on desktop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 hidden lg:block opacity-[0.07]"
      >
        <LogoMark uid="hero-ghost" className="h-[38rem] w-[38rem]" animated />
      </div>

      <div className="shell relative pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="eyebrow text-ink-soft flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-aqua" />
          {site.school}
        </p>

        <h1 className="veil mt-8 font-display font-semibold text-ink text-[clamp(3.25rem,13vw,10.5rem)] leading-[0.86] tracking-[-0.05em]">
          <span style={{ ["--veil-delay" as string]: "80ms" }}>hello</span>
          <span style={{ ["--veil-delay" as string]: "200ms" }}>world</span>
        </h1>

        <div
          className="mt-8 flex items-center gap-4"
          style={{ animation: "hw-rise 0.9s cubic-bezier(0.16,1,0.3,1) 520ms both" }}
        >
          <span className="eyebrow text-aqua-deep text-[0.8125rem] tracking-[0.22em]">
            People &times; Ideas &times; Impact
          </span>
        </div>

        <p
          className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-ink-soft font-light"
          style={{ animation: "hw-rise 0.9s cubic-bezier(0.16,1,0.3,1) 640ms both" }}
        >
          A student-led technology and innovation community where{" "}
          <span className="text-ink">technology, psychology, economics,
          entrepreneurship, and design</span>{" "}
          collide to build things that matter.
        </p>

        <div
          className="mt-11 flex flex-col sm:flex-row gap-3 sm:gap-4"
          style={{ animation: "hw-rise 0.9s cubic-bezier(0.16,1,0.3,1) 760ms both" }}
        >
          <Button href={JOIN_URL} external>
            Join us
          </Button>
          <Button href="/about" variant="outline">
            Explore what we do
          </Button>
        </div>
      </div>

      {/* Disciplines ticker — the interdisciplinary claim, made visible. */}
      <div className="rule border-b border-stone py-4 overflow-hidden">
        <div className="flex w-max animate-drift">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {disciplines.map((d) => (
                <li key={d} className="flex items-center gap-6 px-6">
                  <span className="eyebrow text-ink-soft whitespace-nowrap">{d}</span>
                  <span className="text-aqua text-xs" aria-hidden="true">&times;</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
