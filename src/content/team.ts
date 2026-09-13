export type Member = {
  name: string;
  role: string;
  major: string;
  /** null renders the card without a bio line. Do not invent one. */
  bio: string | null;
  /** Path under /public, e.g. "/team/arjun.jpg". null renders initials. */
  photo: string | null;
  linkedin: string | null;
  github: string | null;
  website: string | null;
};

/**
 * NOTHING HERE IS INVENTED.
 * TODO before launch: last names for Mithali / Hershey / Ilisha, one-line bios
 * for everyone except Arjun Agrawal, headshots into /public/team/, and socials.
 * Roles are all "Officer" for now — update as titles are decided.
 */
export const team: Member[] = [
  {
    name: "Arjun Agrawal",
    role: "Officer",
    major: "Computer Science + Economics",
    bio: "Interested in technology, entrepreneurship, AI, product development, and building things from scratch.",
    photo: null,
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Arjun Singh",
    role: "Officer",
    major: "Psychology",
    bio: null,
    photo: null,
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Mithali",
    role: "Officer",
    major: "Computer Science + Biology",
    bio: null,
    photo: null,
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Hershey",
    role: "Officer",
    major: "Computer Science",
    bio: null,
    photo: null,
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Ilisha",
    role: "Officer",
    major: "Computer Science + Business",
    bio: null,
    photo: null,
    linkedin: null,
    github: null,
    website: null,
  },
];
