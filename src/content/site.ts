/**
 * Global site identity. Edit here, it propagates everywhere.
 */
export const site = {
  name: "Hello World",
  wordmark: "hello world",
  tagline: "People × Ideas × Impact",
  school: "Northeastern University Oakland",

  /** One-sentence description. Used in the hero and in social share cards. */
  description:
    "A student-led technology and innovation community at Northeastern University Oakland. We bring together technology, psychology, economics, entrepreneurship, and design to build things that matter.",

  /** The single idea we want someone to remember. */
  coreMessage:
    "Hello World brings together people from different disciplines to build technology that solves real problems.",

  /** The second thing we want them to remember. */
  secondMessage: "You don't have to be a CS major to belong here.",

  /** TODO: replace with the real deployment URL before printing the QR code. */
  url: "https://helloworld-neu.vercel.app",

  seoKeywords: [
    "Hello World Northeastern Oakland",
    "Hello World Northeastern",
    "Northeastern Oakland technology club",
    "Northeastern Oakland CS club",
    "Northeastern Oakland startup club",
    "Northeastern Oakland AI club",
  ],
} as const;
