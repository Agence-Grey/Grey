import Link from "next/link";

const contactBlocks = [
  {
    label: "Email",
    value: "agencegrey06@gmail.com",
    href: "mailto:agencegrey06@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+33 6 18 00 85 31",
    href: "https://wa.me/33618008531",
  },
  {
    label: "Zone",
    value: "Breil-sur-Roya, région PACA · accompagnement partout en France",
    href: null,
  },
] as const;

export function ContactInfo() {
  return (
    <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(168,85,247,0.12),_rgba(255,255,255,0.04))] p-6 sm:p-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Infos contact</p>
        <h2 className="text-2xl font-semibold text-white">Parlons du projet calmement, mais sérieusement.</h2>
        <p className="text-sm leading-7 text-[var(--color-muted-foreground)]">
          Si votre studio a besoin d’un site plus clair, plus crédible ou simplement moins bricolé, on peut cadrer ça ensemble.
        </p>
      </div>

      <div className="space-y-4">
        {contactBlocks.map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">{item.label}</p>
            {item.href ? (
              <Link href={item.href} className="mt-2 block text-base font-medium text-white transition hover:text-[var(--color-accent)]">
                {item.value}
              </Link>
            ) : (
              <p className="mt-2 text-base font-medium text-white">{item.value}</p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
