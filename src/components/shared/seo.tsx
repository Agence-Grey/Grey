import type { Metadata } from "next";

type BuildPageMetadataProps = {
  title: string;
  description: string;
  noIndex?: boolean;
};

export function buildPageMetadata({ title, description, noIndex = false }: BuildPageMetadataProps): Metadata {
  return {
    title,
    description,
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
