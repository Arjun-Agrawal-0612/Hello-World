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
 * TODO before launch: last names for Mitali / Hershey / Ilisha, one-line bios
 * for everyone except Arjun Agrawal, and socials.
 * Roles are all "Officer" for now — update as titles are decided.
 */
export const team: Member[] = [
  {
    name: "Arjun Agrawal",
    role: "Officer",
    major: "Computer Science + Economics",
    bio: "Interested in technology, entrepreneurship, AI, product development, and building things from scratch.",
    photo: "/team/arjun-agrawal.jpg",
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Arjun Singh",
    role: "Officer",
    major: "Psychology",
    bio: null,
    photo: "/team/arjun-singh.jpg",
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Mitali",
    role: "Officer",
    major: "Computer Science + Biology",
    bio: null,
    photo: "/team/mitali.jpg",
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Hershey",
    role: "Officer",
    major: "Computer Science",
    bio: null,
    photo: "/team/hershey.jpg",
    linkedin: null,
    github: null,
    website: null,
  },
  {
    name: "Ilisha",
    role: "Officer",
    major: "Computer Science + Business",
    bio: null,
    photo: "/team/ilisha.jpg",
    linkedin: null,
    github: null,
    website: null,
  },
];
