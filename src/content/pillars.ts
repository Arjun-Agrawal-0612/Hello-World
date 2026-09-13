export type Pillar = {
  number: string;
  title: string;
  kicker: string;
  body: string;
  detail: string[];
};

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Understand",
    kicker: "People & behavior",
    body: "Understand people.",
    detail: [
      "Psychology",
      "Behavioral science",
      "Decision-making",
      "Human-computer interaction",
      "Motivation & cognition",
    ],
  },
  {
    number: "02",
    title: "Build",
    kicker: "Technology & products",
    body: "Build technology.",
    detail: [
      "Web development",
      "Software engineering",
      "AI & machine learning",
      "Data science",
      "Computer vision",
      "Product & UX/UI",
    ],
  },
  {
    number: "03",
    title: "Validate",
    kicker: "Experiments & evidence",
    body: "Test ideas.",
    detail: [
      "User interviews",
      "Experiments",
      "Data",
      "Economic reasoning",
      "Prototyping",
      "User feedback",
    ],
  },
  {
    number: "04",
    title: "Launch",
    kicker: "Ideas & impact",
    body: "Turn ideas into impact.",
    detail: [
      "Products",
      "Startups",
      "Research",
      "Community initiatives",
      "Open-source projects",
      "Org collaborations",
    ],
  },
];
