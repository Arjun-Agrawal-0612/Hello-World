export type ClubEvent = {
  title: string;
  /**
   * ISO date, e.g. "2026-09-16", or null when the date genuinely isn't
   * confirmed yet. Null-dated events render as "Date TBA", sort after all
   * scheduled events, and never expire — so an unconfirmed plan is never
   * presented to students as a fact.
   */
  date: string | null;
  time: string | null;
  location: string | null;
  blurb: string;
  /** Link for the RSVP button, or null to hide the button. */
  rsvp: string | null;
};

/**
 * Add new events here. Scheduled ones move to "Past" automatically by date.
 *
 * TODO: confirm the tabling window and exact spot on campus for Sept 16.
 * TODO: once the first meeting is actually scheduled, set its `date`.
 */
export const events: ClubEvent[] = [
  {
    title: "Find Us At Tabling",
    date: "2026-09-16",
    time: null,
    location: null,
    blurb:
      "Come say hello. Meet the officers, ask what we're building this semester, and put your name down.",
    rsvp: null,
  },
  {
    title: "HelloWorld! — First Meeting",
    date: null,
    time: null,
    location: "Mary Atkins Lounge",
    blurb:
      "Meet the team, hear what we're building this semester, and find where you fit. No experience needed.",
    rsvp: null,
  },
];

/** Treats an ISO date as local end-of-day so events stay listed all day. */
function eventTime(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 23, 59, 59).getTime();
}

/** Scheduled events still ahead of us, soonest first, then undated ones. */
export function upcomingEvents(now: number = Date.now()): ClubEvent[] {
  const scheduled = events
    .filter((e) => e.date !== null && eventTime(e.date) >= now)
    .sort((a, b) => eventTime(a.date!) - eventTime(b.date!));
  const undated = events.filter((e) => e.date === null);
  return [...scheduled, ...undated];
}

/** Only ever contains events that actually had a date and have passed. */
export function pastEvents(now: number = Date.now()): ClubEvent[] {
  return events
    .filter((e) => e.date !== null && eventTime(e.date) < now)
    .sort((a, b) => eventTime(b.date!) - eventTime(a.date!));
}

export function formatEventDate(iso: string | null) {
  if (!iso) return "Date TBA";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

/** True when we have nothing concrete to show for an event yet. */
export function isUnscheduled(e: ClubEvent) {
  return e.date === null;
}
