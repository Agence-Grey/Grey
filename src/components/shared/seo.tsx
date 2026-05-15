import type { Metadata } from "next";

type BuildPageMetadataProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  path?: string;
};

export function buildPageMetadata({
  title,
  description,
  noIndex = false,
  path,
}: BuildPageMetadataProps): Metadata {
  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title,
      description,
      ...(path ? { url: path } : {}),
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
