import { NextResponse } from "next/server";

const ranges = {
  starter: { min: 149000, max: 199000 },
  pro: { min: 299000, max: 399000 },
  premium: { min: 500000, max: 900000 },
} as const;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { offre?: keyof typeof ranges };
  const offer = body.offre && ranges[body.offre] ? body.offre : "pro";
  const range = ranges[offer];
  return NextResponse.json({
    ok: true,
    offre: offer,
    estimation_min: range.min,
    estimation_max: range.max,
    estimation_affichee: `${Math.round(range.min / 100)}€ – ${Math.round(range.max / 100)}€`,
  });
}
