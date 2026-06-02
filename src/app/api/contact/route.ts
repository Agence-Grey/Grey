import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import { contactSchema } from "@/lib/validations";
import { sendContactNotification } from "@/lib/resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    const emailResult = await sendContactNotification({
      ...parsed.data,
      offre: body?.offre ?? undefined,
    });
    return NextResponse.json({ ok: true, mode: "stub", email: emailResult.ok });
  }

  const payload = {
    nom: parsed.data.nom,
    email: parsed.data.email,
    telephone: parsed.data.telephone ?? null,
    type_studio: parsed.data.type_studio ?? null,
    message: parsed.data.message,
  };

  const { error } = await supabase.from("contacts").insert(payload);
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  sendContactNotification({
    ...parsed.data,
    offre: body?.offre ?? undefined,
  });

  return NextResponse.json({ ok: true });
}
