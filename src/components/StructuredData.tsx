import { site } from "@/content/site";
import { links } from "@/content/links";

/**
 * Organization schema. Only emits facts we can stand behind — `sameAs` is
 * omitted entirely until real social profiles exist in links.ts, rather than
 * publishing empty or guessed URLs to search engines.
 */
export function StructuredData() {
  const sameAs = [links.instagram, links.linkedin, links.github, links.discord].filter(
    Boolean,
  ) as string[];

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: "HelloWorld Northeastern Oakland",
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University",
    },
    location: {
      "@type": "Place",
      name: "Northeastern University Oakland",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oakland",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(links.email ? { email: links.email } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Schema is a static literal built from our own content files.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
