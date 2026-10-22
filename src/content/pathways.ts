export type Pathway = {
  number: string;
  name: string;
  title: string;
  /** The one-line difference between the paths. Keep it to a sentence. */
  summary: string;
  body: string;
  examplesLabel: string;
  examples: string[];
  steps: string[];
  note: { label: string; body: string };
};

/**
 * The two ways to build with HelloWorld!. They are equals — keep the copy
 * roughly the same length so the cards stay balanced side by side.
 */
export const pathways: Pathway[] = [
  {
    number: "01",
    name: "Client Projects",
    title: "Build for real clients.",
    summary: "Collaborate with a team to build solutions for real organizations.",
    body: "Student organizations, clubs, and other clients come to us for help with their digital presence. You'll build something genuinely useful alongside other members, and leave with real-world experience to show for it.",
    examplesLabel: "What you might build",
    examples: ["Websites", "Web & mobile apps", "Digital marketing", "Whatever the client needs"],
    steps: [
      "Join a project team, or get placed on one.",
      "Your team is matched with a client and learns what they need.",
      "Design, build, and deliver a solution together.",
    ],
    note: {
      label: "Current clients include",
      body: "MUN Club, Investment Club, and Junoon.",
    },
  },
  {
    number: "02",
    name: "Passion Projects",
    title: "Build what you love.",
    summary: "Bring your own ideas to life, independently or with others.",
    body: "Not every great project needs a client. Have an idea you've always wanted to bring to life? This is your chance to build it, your way.",
    examplesLabel: "What it could be",
    examples: ["An app", "A website", "A project you've started", "Something entirely new"],
    steps: [
      "Pitch your idea to the leadership team — new, or already underway.",
      "Build it solo, or invite other members to join you.",
      "Spend a month building, experimenting, and making real progress.",
      "Present what you built and share what you learned.",
    ],
    note: {
      label: "Good to know",
      body: "Nobody expects a finished product in a month. The goal is meaningful progress on something you genuinely care about.",
    },
  },
];
