/**
 * Global site identity. Edit here, it propagates everywhere.
 *
 * NAMING RULE — the official organization name is exactly "HelloWorld!".
 * The exclamation mark and the capitalization are both intentional. Use
 * `site.name` anywhere the organization is named. The lowercase "hello world"
 * form is a historical programming reference and is only ever used as quoted
 * prose (e.g. the print statement), never as the organization's name.
 */
export const site = {
  name: "HelloWorld!",
  tagline: "People × Ideas × Impact",
  school: "Northeastern University Oakland",

  /** The promise, in three verbs. Used under the hero. */
  promise: "Understand people. Build technology. Turn ideas into impact.",

  /** One-sentence description. Used in the hero and in social share cards. */
  description:
    "HelloWorld! is a student-led technology and innovation community at Northeastern University Oakland. We bring together technology, psychology, economics, entrepreneurship, and design to build things that matter.",

  /** The single idea we want someone to remember. */
  coreMessage:
    "HelloWorld! brings together people from different disciplines to build technology that solves real problems.",

  /** The second thing we want them to remember. */
  secondMessage: "You don't have to be a CS major to belong here.",

  /** TODO: replace with the real deployment URL before printing the QR code.
   *  Open Graph, the canonical tag, and the sitemap all read from this. */
  url: "https://helloworld-neu.vercel.app",

  seoKeywords: [
    "HelloWorld! Northeastern Oakland",
    "HelloWorld Northeastern",
    "HelloWorld! club",
    "Northeastern Oakland technology club",
    "Northeastern Oakland CS club",
    "Northeastern Oakland innovation",
    "Northeastern Oakland entrepreneurship",
    "Northeastern Oakland AI club",
    "Northeastern Oakland student organization",
  ],
} as const;
