import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contactez L’Agence Grey pour cadrer un site plus clair, plus crédible et plus utile à votre activité.",
});

export default function ContactPage() {
  return (
    <SectionWrapper
      eyebrow="Contact"
      title="Un besoin clair mérite une réponse claire"
      description="Décrivez votre activité, votre besoin et ce que vous attendez du site. Nous revenons vers vous rapidement."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactForm />
        <ContactInfo />
      </div>
    </SectionWrapper>
  );
}
