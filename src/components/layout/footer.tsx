import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

const footerLinks = [
  { href: "/services", label: "Nos offres" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/cgv", label: "CGV" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#1a1a1a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-16">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted-foreground)]">
              Un site représentant votre passion, visible par vos futurs élèves, et des cours rapides à réserver en ligne.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm">
              <Link href="/devis">Demander un devis</Link>
            </Button>
            <Button asChild size="sm" variant="secondary">
              <Link href="/contact">Parler du projet</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Navigation</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted-foreground)]">
              {footerLinks.slice(0, 4).map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Légal</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted-foreground)]">
              {footerLinks.slice(4).map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-[var(--color-muted-foreground)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© {year} L’Agence Grey. Tous droits réservés.</p>
          <p>Conçu pour convertir sans bruit parasite.</p>
        </div>
      </div>
    </footer>
  );
}
