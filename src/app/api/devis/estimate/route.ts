import { NextResponse } from "next/server";

/**
 * Base prices (in cents) for each offer
 * Additional needs add to the estimate
 */
const basePrices = {
  essentiel: { min: 149000, max: 199000 },
  confort: { min: 299000, max: 399000 },
  booster: { min: 500000, max: 900000 },
} as const;

/** Price bumps (in cents) for each additional need */
const needBumps: Record<string, { min: number; max: number }> = {
  "Site internet": { min: 50000, max: 100000 },
  "Prise de rendez-vous": { min: 20000, max: 40000 },
  "Paiement en ligne": { min: 30000, max: 50000 },
  "Blog / Actualités": { min: 15000, max: 30000 },
  "Automatisation IA": { min: 50000, max: 150000 },
  "SEO avancé": { min: 20000, max: 40000 },
  "Identité visuelle": { min: 30000, max: 60000 },
  "SEA / Google Ads": { min: 20000, max: 40000 },
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    offre?: keyof typeof basePrices;
    besoins?: string[];
  };

  const offer = body.offre && basePrices[body.offre] ? body.offre : "essentiel";
  const range = { ...basePrices[offer] };

  // Add bumps for selected needs
  for (const besoin of body.besoins ?? []) {
    const bump = needBumps[besoin];
    if (bump) {
      range.min += bump.min;
      range.max += bump.max;
    }
  }

  return NextResponse.json({
    ok: true,
    offre: offer,
    estimation_min: range.min,
    estimation_max: range.max,
    estimation_affichee: `${Math.round(range.min / 100)}€ – ${Math.round(range.max / 100)}€`,
  });
}
