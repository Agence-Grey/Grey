import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { Button } from "@/components/ui/button";
import { PranaGallery } from "./gallery";

export const metadata: Metadata = buildPageMetadata({
  path: "/portfolio/prana",
  title: "Prana — Maquette Studio Yoga",
  description:
    "Galerie complète de la maquette Prana — design, flow et détails visuels d'un site pour studio de yoga.",
});

export default function PranaPage() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Prana"
      description="Maquette complète d'un site vitrine pour un studio de yoga — chaque écran, chaque détail."
    >
      <div className="space-y-10">
        <PranaGallery />

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
