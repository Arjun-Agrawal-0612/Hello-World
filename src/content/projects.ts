export type ProjectCategory =
  | "AI"
  | "WEB"
  | "PSYCHOLOGY"
  | "ECONOMICS"
  | "STARTUPS"
  | "RESEARCH"
  | "COMMUNITY";

export type Project = {
  category: ProjectCategory[];
  title: string;
  blurb: string;
  /** "idea" = something we could build. "active" = a real team is on it.
   *  "shipped" = it exists. Only move a project out of "idea" when it is true. */
  status: "idea" | "active" | "shipped";
};

/**
 * These are directions, not a portfolio. Everything below is marked "idea"
 * on purpose — promote one to "active"/"shipped" only when it genuinely is.
 */
export const projects: Project[] = [
  {
    category: ["AI"],
    title: "AI × Education",
    blurb:
      "An AI study tool that adapts to how an individual student actually learns, instead of serving everyone the same deck.",
    status: "idea",
  },
  {
    category: ["PSYCHOLOGY", "RESEARCH"],
    title: "Interfaces & Motivation",
    blurb:
      "Do different interface designs measurably change student motivation and follow-through? Build two versions and find out.",
    status: "idea",
  },
  {
    category: ["ECONOMICS", "AI"],
    title: "Economics of AI",
    blurb:
      "Analyze how AI is reshaping consumer behavior, labor markets, and the way people make decisions under uncertainty.",
    status: "idea",
  },
  {
    category: ["WEB", "COMMUNITY"],
    title: "Sites for Real Clients",
    blurb:
      "Design and ship websites and digital tools for student organizations and Oakland small businesses that need them.",
    status: "idea",
  },
  {
    category: ["AI", "PSYCHOLOGY"],
    title: "Human Performance",
    blurb:
      "Technology built around fitness, productivity, learning, and the habits that actually stick.",
    status: "idea",
  },
  {
    category: ["AI", "RESEARCH"],
    title: "Computer Vision",
    blurb:
      "Teach a system to read movement, environments, and behavior — then ask what that should and shouldn't be used for.",
    status: "idea",
  },
  {
    category: ["ECONOMICS", "PSYCHOLOGY"],
    title: "Behavioral Economics",
    blurb:
      "Run experiments on how people respond to incentives, pricing, social proof, and defaults.",
    status: "idea",
  },
];
