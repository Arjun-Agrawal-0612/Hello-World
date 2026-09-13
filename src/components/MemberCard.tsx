import Image from "next/image";
import type { Member } from "@/content/team";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Renders whatever we actually have. No photo yields a typographic initial
 * plate rather than a grey silhouette; no bio simply omits the line.
 */
export function MemberCard({ member }: { member: Member }) {
  const social = [
    member.linkedin && { label: "LinkedIn", href: member.linkedin },
    member.github && { label: "GitHub", href: member.github },
    member.website && { label: "Site", href: member.website },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article className="group h-full p-7 md:p-8 transition-colors duration-500 hover:bg-paper-bright">
      <div className="relative aspect-4/5 w-full overflow-hidden bg-stone/45">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span
              aria-hidden="true"
              className="font-display text-6xl font-semibold tracking-[-0.04em] text-ink/20 transition-colors duration-500 group-hover:text-ink/30"
            >
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>

      <p className="eyebrow mt-6 text-aqua-deep">{member.role}</p>
      <h3 className="mt-2.5 font-display text-xl tracking-[-0.025em]">{member.name}</h3>
      <p className="mt-1 text-[0.8125rem] text-ink-soft">{member.major}</p>

      {member.bio && (
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{member.bio}</p>
      )}

      {social.length > 0 && (
        <ul className="mt-5 flex gap-4">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow link-draw text-ink-soft hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
