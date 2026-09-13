import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui";
import { upcomingEvents, pastEvents, formatEventDate, type ClubEvent } from "@/content/events";
import { JOIN_URL } from "@/content/links";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Build nights, workshops, hackathons, and founder talks from Hello World at Northeastern University Oakland.",
};

function EventRow({ event, past = false }: { event: ClubEvent; past?: boolean }) {
  const meta = [
    event.time,
    event.location,
  ].filter(Boolean) as string[];

  return (
    <div
      className={`grid gap-5 py-9 md:grid-cols-[14rem_1fr_auto] md:gap-10 md:items-start ${
        past ? "opacity-45" : ""
      }`}
    >
      <div>
        <time dateTime={event.date} className="eyebrow text-aqua-deep block">
          {formatEventDate(event.date)}
        </time>
        {meta.length > 0 && (
          <p className="mt-2 eyebrow text-ink-soft/70">{meta.join(" · ")}</p>
        )}
        {meta.length === 0 && !past && (
          <p className="mt-2 eyebrow text-ink-soft/50">Time &amp; place TBA</p>
        )}
      </div>

      <div>
        <h3 className="font-display text-2xl md:text-[2rem] tracking-[-0.03em]">
          {event.title}
        </h3>
        <p className="mt-3 max-w-xl text-ink-soft leading-relaxed">{event.blurb}</p>
      </div>

      {event.rsvp && !past && (
        <a
          href={event.rsvp}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow shrink-0 self-start border border-ink px-5 py-3 transition-colors duration-300 hover:bg-ink hover:text-paper"
        >
          RSVP &rarr;
        </a>
      )}
    </div>
  );
}

export default function Events() {
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Events"
        title="Come build with us."
        lede="Build nights, workshops, hackathons, and founder talks. Everything is open to every major, and you never need to bring anything but yourself."
      />

      <section className="shell pb-24 md:pb-32">
        {upcoming.length > 0 ? (
          <ul className="divide-y divide-stone border-t border-stone">
            {upcoming.map((e, i) => (
              <Reveal key={e.title + e.date} as="li" delay={i * 80}>
                <EventRow event={e} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal>
            <div className="border border-stone p-10 md:p-16 text-center">
              <p className="font-display text-2xl md:text-3xl tracking-[-0.03em]">
                Nothing on the calendar right now.
              </p>
              <p className="mt-4 text-ink-soft">
                Join on Engage and you&apos;ll hear about the next one first.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={JOIN_URL} external>
                  Join Hello World
                </Button>
              </div>
            </div>
          </Reveal>
        )}

        {past.length > 0 && (
          <div className="mt-20">
            <h2 className="eyebrow text-ink-soft pb-5 border-b border-stone">Past</h2>
            <ul className="divide-y divide-stone">
              {past.map((e) => (
                <li key={e.title + e.date}>
                  <EventRow event={e} past />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
