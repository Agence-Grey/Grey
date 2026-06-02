import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Smartphone, Search, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { SchemaOrg } from "@/components/shared/schema-org";
import { PricingCard } from "@/components/devis/pricing-card";
import { servicePackages } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildPageMetadata({
  path: "/agence-web-nice",
  title: "Agence web Nice | Création de sites pour studios — L'Agence Grey",
  description:
    "Agence web à Nice spécialisée dans la création de sites internet pour studios de yoga, pole dance et sport. Devis gratuit, design sur mesure, SEO local. Basés à Breil-sur-Roya, nous intervenons sur Nice et la Côte d'Azur.",
});

const niceArgs = [
  {
    icon: MapPin,
    title: "Une agence web proche de vous",
    desc: "Basés à Breil-sur-Roya, à quelques kilomètres de Nice, nous connaissons le tissu local et les attentes des professionnels de la Côte d'Azur.",
  },
  {
    icon: Smartphone,
    title: "Des sites pensés mobile",
    desc: "Vos élèves réservent sur leur téléphone. Chaque site que nous créons est optimisé pour mobile, rapide et fluide sur tous les écrans.",
  },
  {
    icon: Search,
    title: "Référencement local",
    desc: "Nous optimisons votre site pour que vos futurs élèves vous trouvent facilement sur Google quand ils cherchent un studio de yoga ou de pole dance à Nice.",
  },
  {
    icon: Palette,
    title: "Design sur mesure",
    desc: "Pas de template générique. Votre site reflète l'ambiance et l'identité de votre studio, pour attirer les bons élèves.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Agence web Nice — L'Agence Grey",
  url: `${siteConfig.url}/agence-web-nice`,
  description:
    "Agence web à Nice spécialisée dans la création de sites internet pour studios de yoga, pole dance et sport.",
  inLanguage: "fr-FR",
  about: {
    "@type": "LocalBusiness",
    name: "L'Agence Grey",
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "367 route de Ciaus",
      addressLocality: "Breil-sur-Roya",
      postalCode: "06540",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "City",
      name: "Nice",
    },
  },
};

export default function AgenceWebNicePage() {
  return (
    <>
      <SchemaOrg data={schema} />

      <SectionWrapper
        eyebrow="Agence web à Nice"
        title="Votre studio mérite un site à la hauteur de votre passion"
        description="Nous créons des sites internet pour les studios de yoga, pole dance, pilates et sport à Nice et sur toute la Côte d'Azur. Design élégant, réservation en ligne, référencement local : tout ce dont vous avez besoin pour développer votre activité."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="!bg-[#7c3aed] hover:!bg-[#6d28d9] !px-8 !py-4 !text-base !font-bold shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            <Link href="/devis">
              Demander un devis gratuit
              <ArrowRight className="size-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/portfolio">Voir nos réalisations</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Pourquoi nous choisir"
        title="Une agence web niçoise qui comprend les studios"
        description="Nous ne sommes pas une agence généraliste. Nous travaillons exclusivement avec des studios de mouvement et de bien-être : yoga, pole dance, pilates, barre au sol, danse."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {niceArgs.map((arg) => (
            <div
              key={arg.title}
              className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <arg.icon className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
              <div>
                <p className="font-semibold text-white">{arg.title}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-muted-foreground)]">
                  {arg.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Nos offres"
        title="Des forfaits adaptés à votre studio à Nice"
        description="Chaque studio est unique. Nos trois offres s'adaptent à votre taille, vos ambitions et votre budget."
      >
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {servicePackages.map((offer, index) => (
            <PricingCard
              key={offer.slug}
              name={offer.name}
              price={offer.price}
              priceNote={offer.priceNote}
              summary={offer.summary}
              features={offer.features}
              featured={index === 1}
              href={`/services/${offer.slug}`}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Nice et ses quartiers"
        title="Nous intervenons dans tout le bassin niçois"
        description="Votre studio est situé à Nice ou dans les communes alentour ? Nous nous déplaçons pour vous rencontrer et comprendre vos besoins."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Nice Centre",
            "Nice Nord",
            "Nice Est (Port, Mont Boron)",
            "Nice Ouest (Fabron, Californie)",
            "Cagnes-sur-Mer",
            "Saint-Laurent-du-Var",
            "Villefranche-sur-Mer",
            "Beaulieu-sur-Mer",
            "Menton",
            "Antibes",
            "Cannes",
            "Monaco",
          ].map((secteur) => (
            <div
              key={secteur}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--color-muted-foreground)]"
            >
              <CheckCircle className="size-4 shrink-0 text-[var(--color-accent)]" />
              {secteur}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-[var(--color-muted-foreground)]">
          Vous êtes en dehors de cette zone ? Pas de problème. Nous travaillons avec des studios
          partout en France, de Paris à Lyon en passant par Bordeaux et Marseille. La proximité,
          pour nous, c&apos;est avant tout la disponibilité et la réactivité.
        </p>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="En résumé"
        title="L'agence web que votre studio attendait"
        description="Un site clair, sans jargon, qui rassure vos élèves et vous fait gagner du temps."
      >
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(168,85,247,0.14),_rgba(255,255,255,0.04))] p-8">
          <ul className="space-y-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
            {[
              "Création de site internet sur mesure pour studios à Nice",
              "Design responsive optimisé mobile — vos élèves réservent sur leur téléphone",
              "Référencement local (Google, Pages Jaunes) pour être trouvé facilement",
              "Prise de rendez-vous en ligne intégrée à votre site",
              "Maintenance et mises à jour incluses (pack Confort et Booster)",
              "Automatisations IA pour les rappels, listes d'attente et avis Google (pack Booster)",
              "Formation incluse pour que vous restiez autonome",
              "Devis gratuit, sans engagement, réponse sous 48h",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="!bg-[#7c3aed] hover:!bg-[#6d28d9] !px-8 !py-4 !text-base !font-bold shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            <Link href="/contact">
              Parler de votre projet
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
