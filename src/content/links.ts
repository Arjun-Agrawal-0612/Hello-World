/**
 * Every outbound link on the site. Swap a value here and it updates
 * the navbar, the join section, the footer, and the mobile menu at once.
 *
 * Set a value to `null` to hide that link everywhere.
 */
export const links = {
  /** PRIMARY CALL TO ACTION — the JOIN button points here. */
  engage: "https://engage.northeastern.edu/feeds?type=club&type_id=36481&tab=about",

  // TODO: paste real handles/URLs, or set to null to hide.
  instagram: null as string | null,
  linkedin: null as string | null,
  github: null as string | null,
  discord: null as string | null,

  // TODO: confirm the club contact email.
  email: null as string | null,
} as const;

/** Whether the primary join link is still a placeholder. */
export const JOIN_URL = links.engage;
