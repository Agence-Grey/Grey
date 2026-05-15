import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { Button } from "@/components/ui/button";
import { ClassiqueGallery } from "./gallery";

export const metadata: Metadata = buildPageMetadata({
  path: "/portfolio/classique",
  title: "Classique — Maquette Studio de Danse",
  description:
    "Galerie complète de la maquette Classique — design, flow et détails visuels d'un site pour studio de danse.",
});

export default function ClassiquePage() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Classique"
      description="Maquette complète d'un site vitrine pour un studio de danse — chaque écran, chaque détail."
    >
      <div className="space-y-10">
        <ClassiqueGallery />

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
