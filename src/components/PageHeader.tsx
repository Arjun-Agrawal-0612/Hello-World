import { Reveal } from "./Reveal";

export function PageHeader({
  index,
  eyebrow,
  title,
  lede,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="shell pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="flex items-baseline gap-4 pb-6 border-b border-stone">
        <span className="eyebrow text-aqua-deep">{index}</span>
        <span className="eyebrow text-ink-soft">{eyebrow}</span>
      </div>
      <h1
        className="mt-12 font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.9] tracking-[-0.045em] max-w-[13ch]"
        style={{ animation: "hw-rise 0.9s cubic-bezier(0.16,1,0.3,1) 60ms both" }}
      >
        {title}
      </h1>
      {lede && (
        <Reveal delay={140}>
          <p className="mt-9 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-ink-soft">
            {lede}
          </p>
        </Reveal>
      )}
    </header>
  );
}
