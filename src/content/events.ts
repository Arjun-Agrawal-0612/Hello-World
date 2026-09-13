export type ClubEvent = {
  title: string;
  /** ISO date, e.g. "2026-09-16". Drives sorting and the <time> element. */
  date: string;
  /** Human-readable time, or null if not set yet. */
  time: string | null;
  location: string | null;
  blurb: string;
  /** Link for the RSVP button, or null to hide the button. */
  rsvp: string | null;
};

/**
 * Add new events here. Past ones drop off the site automatically by date,
 * so nothing needs deleting.
 */
export const events: ClubEvent[] = [
  {
    title: "Find Us At Tabling",
    date: "2026-09-16",
    // TODO: confirm tabling window and exact spot on campus.
    time: null,
    location: null,
    blurb:
      "Come say hello. Meet the officers, ask what we're building this semester, and put your name down.",
    rsvp: null,
  },
  {
    title: "Hello World — First Meeting",
    // TODO: confirm the real first-meeting date.
    date: "2026-09-23",
    time: null,
    location: null,
    blurb:
      "Meet the team, hear what we're building, and find your place in Hello World. No experience needed.",
    rsvp: null,
  },
];

/** Treats an ISO date as local midnight so events stay listed all day. */
function eventTime(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 23, 59, 59).getTime();
}

export function upcomingEvents(now: number = Date.now()): ClubEvent[] {
  return events
    .filter((e) => eventTime(e.date) >= now)
    .sort((a, b) => eventTime(a.date) - eventTime(b.date));
}

export function pastEvents(now: number = Date.now()): ClubEvent[] {
  return events
    .filter((e) => eventTime(e.date) < now)
    .sort((a, b) => eventTime(b.date) - eventTime(a.date));
}

export function formatEventDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
