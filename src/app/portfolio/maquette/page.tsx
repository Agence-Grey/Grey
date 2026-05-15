import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildPageMetadata({
  title: "Maquette Forge Performance",
  description:
    "Galerie complète de la maquette Forge Performance — design, flow et détails visuels d'un site pour studio de préparation physique.",
});

const maquetteImages = [
  "/portfolio/maquette/img_4d930aae2969.png",
  "/portfolio/maquette/img_791c0a0a3380.png",
  "/portfolio/maquette/img_7d2d07a36b3f.png",
  "/portfolio/maquette/img_7f2e848e586d.png",
  "/portfolio/maquette/img_a69f473feace.png",
  "/portfolio/maquette/img_d21866675b37.png",
  "/portfolio/maquette/img_dac5c57bd131.png",
  "/portfolio/maquette/img_dd2f369788fd.png",
  "/portfolio/maquette/img_e3a4b7df3625.png",
];

export default function MaquettePage() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Maquette Forge Performance"
      description="Maquette complète d'un site vitrine pour studio de préparation physique — chaque écran, chaque détail."
    >
      <div className="space-y-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {maquetteImages.map((src, index) => (
            <div
              key={src}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
            >
              <Image
                src={src}
                alt={`Maquette écran ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="secondary">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 size-4" />
              Retour au portfolio
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
