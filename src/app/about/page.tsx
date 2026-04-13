import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { aboutValues } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos",
  description:
    "Découvrez Adrien et Ophélie, le duo derrière L’Agence Grey, et leur vision d’un web clair, rassurant et efficace.",
});

const differentiators = [
  "Une approche personnalisable à chaque client et à chaque métier.",
  "Des prix clairs, sans surprises ni frais cachés.",
  "Des sites modernes, évolutifs et pensés pour être visibles sur le web.",
  "Une maintenance fiable pour garder votre site à jour, sécurisé et performant.",
];

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="À propos"
        title="Une aventure humaine et professionnelle"
        description="Deux associés, une vision commune, et une même obsession : proposer un web qui rassure."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 text-base leading-8 text-[var(--color-muted-foreground)]">
            <p>
              Nous sommes Adrien et Ophélie, un couple uni depuis plus de deux ans et désormais associés dans une même vision : mettre le web à la portée des petites entreprises françaises.
            </p>
            <p>
              Après avoir travaillé ensemble comme chefs de rayon chez Boulanger Nice Valley, nous avons choisi de bâtir une entreprise à notre image : familiale, proche de ses clients et fondée sur la confiance.
            </p>
            <p>
              Comme vous, nous savons ce que c’est que de gérer une petite structure : chaque détail compte. C’est précisément pour cela que nous avons voulu créer une agence capable d’apporter de la clarté, de la méthode et une vraie tranquillité d’esprit.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {["Adrien", "Ophélie"].map((name) => (
              <div key={name} className="rounded-[2rem] border border-white/10 bg-white/5 p-4">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(168,85,247,0.18),_rgba(255,255,255,0.04))] p-4">
                  <div className="flex h-full items-end rounded-[1.25rem] border border-white/10 bg-black/50 p-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Placeholder photo</p>
                      <p className="mt-2 text-xl font-semibold text-white">{name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Le duo"
        title="Deux profils différents, une même exigence"
        description="La technique d’un côté, la stratégie et les mots de l’autre. L’ensemble doit tenir debout, pas simplement avoir belle allure."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Adrien — l’expertise technique
            </p>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-muted-foreground)]">
              <p>
                Je suis développeur web sur mon temps libre depuis 2019, formé à l’école informatique 42 Paris, et je maîtrise les technologies modernes comme React, Node.js et TypeScript.
              </p>
              <p>
                Ma première expérience dans l’artisanat, en tant que charpentier formé chez les Compagnons du Devoir en 2016, m’a appris la rigueur et le goût du travail bien fait.
              </p>
              <p>
                Aujourd’hui, je conçois des sites robustes, adaptés aux besoins concrets des studios de yoga, pole dance et sport en tout genre, avec le même soin qu’un ouvrage de charpente.
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Ophélie — la stratégie et les mots
            </p>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-muted-foreground)]">
              <p>
                Après une classe préparatoire littéraire et une licence de lettres, je choisis aujourd’hui de mettre mes compétences rédactionnelles au service de votre entreprise avec des textes clairs, structurés et percutants.
              </p>
              <p>
                Mon master en marketing me permet aussi de vous accompagner dans vos choix stratégiques, d’anticiper vos besoins et de donner une vraie visibilité à votre activité sur votre site internet.
              </p>
              <p>
                Mon rôle est de faire en sorte que chaque message soit compréhensible, cohérent et crédible — parce qu’un beau site sans fond ne rassure personne.
              </p>
            </div>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Valeurs"
        title="Le web qui rassure"
        description="Chez Grey, nous aidons les studios de yoga, pole dance et sport en tout genre à développer leur visibilité en ligne sans perdre de temps."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5 text-base leading-8 text-[var(--color-muted-foreground)]">
            <p>
              Notre objectif : vous permettre d’avoir un site internet professionnel, clair et efficace — sans que vous ayez à vous soucier de la technique.
            </p>
            <p>
              Parce que vous avez déjà un métier à faire tourner, nous avons imaginé une solution simple, rapide et adaptée à chaque client, pour que votre présence en ligne soit un véritable atout, et non une contrainte.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(168,85,247,0.14),_rgba(255,255,255,0.04))] p-7">
            <ul className="space-y-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
              {aboutValues.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Organisation"
        title="Nos rôles au sein de L’Agence Grey"
        description="Une répartition simple, lisible et complémentaire pour éviter les zones floues."
      >
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(168,85,247,0.12),_rgba(255,255,255,0.04))] p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 text-base leading-8 text-[var(--color-muted-foreground)]">
              <p>
                Adrien assure la création et la maintenance technique des sites, garantissant performance et fiabilité.
              </p>
              <p>
                Ophélie s’occupe de la gestion client, du marketing et des contenus, pour que chaque site reflète l’identité et les ambitions de nos partenaires.
              </p>
            </div>
            <div className="space-y-4 text-base leading-8 text-[var(--color-muted-foreground)]">
              <p>
                Ensemble, nous formons une équipe complémentaire, unie par la même volonté : offrir à nos clients un web qui rassure.
              </p>
              <p>
                L’objectif est toujours le même : vous permettre de rester concentré sur votre activité pendant que nous veillons sur votre visibilité en ligne.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Ce que nous faisons"
        title="Des sites utiles, performants et simples à gérer"
        description="Pas de complexité gratuite. Chaque offre doit servir un besoin concret."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5 text-base leading-8 text-[var(--color-muted-foreground)]">
            <p>
              Chez Agence Grey, nous concevons des sites internet professionnels pensés pour être utiles, performants et simples à gérer.
            </p>
            <p>
              Nos offres s’articulent autour de trois niveaux d’accompagnement : la création de site sur mesure, la gestion et l’optimisation continue (maintenance, identité visuelle, visibilité), et, pour les entreprises qui souhaitent accélérer leur croissance, des solutions avancées intégrant automatisations intelligentes et référencement payant.
            </p>
            <p>
              L’objectif reste toujours le même : offrir à nos clients une présence en ligne claire, rassurante et efficace, sans leur faire perdre de temps ni alourdir leur quotidien.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Ce qui nous distingue
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
              {differentiators.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Ancrage"
        title="Basés à Breil-sur-Roya, présents partout en France"
        description="La proximité n’est pas une question de kilomètres, mais de disponibilité, de clarté et de réactivité."
      >
        <div className="space-y-5 text-base leading-8 text-[var(--color-muted-foreground)]">
          <p>
            Nous sommes basés en région PACA, à Breil-sur-Roya, mais nous travaillons avec des professionnels partout en France, avec la même exigence de qualité, de réactivité et de proximité.
          </p>
          <p>
            En résumé, Grey, c’est le web qui rassure : des sites clairs, des tarifs transparents, un accompagnement humain — pour que vous restiez concentré sur votre métier, pendant que nous veillons sur votre visibilité en ligne.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
