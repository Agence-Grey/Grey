import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import { devisSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = devisSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: true, mode: "stub", data: parsed.data });
  }

  const payload = {
    ...parsed.data,
    telephone: parsed.data.telephone ?? null,
    ville: parsed.data.ville ?? null,
    estimation_min: parsed.data.estimation_min ?? null,
    estimation_max: parsed.data.estimation_max ?? null,
    estimation_affichee: parsed.data.estimation_affichee ?? null,
    rdv_souhaite: parsed.data.rdv_souhaite ?? false,
    message: parsed.data.message ?? null,
  };

  const { error } = await supabase.from("devis").insert(payload);
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
