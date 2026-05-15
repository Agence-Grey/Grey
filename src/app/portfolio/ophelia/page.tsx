import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { Button } from "@/components/ui/button";
import { OpheliaGallery } from "./gallery";

export const metadata: Metadata = buildPageMetadata({
  title: "Ophelia — Maquette Pole Dance",
  description:
    "Galerie complete de la maquette Ophelia — design, flow et details visuels d'un site pour studio de pole dance.",
});

export default function OpheliaPage() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Ophelia"
      description="Maquette complete d'un site vitrine pour un studio de pole dance — chaque ecran, chaque detail."
    >
      <div className="space-y-10">
        <OpheliaGallery />

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
