import Link from "next/link";

const contactBlocks = [
  {
    label: "Email",
    value: "contact@agencegrey.fr",
    href: "mailto:contact@agencegrey.fr",
  },
  {
    label: "Téléphone",
    value: "À confirmer",
    href: null,
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

      <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-black/20 p-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
        Note : l’email de contact et le téléphone peuvent encore être remplacés par vos coordonnées finales avant mise en ligne.
      </div>
    </div>
  );
}
