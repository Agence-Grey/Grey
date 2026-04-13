import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: false, message: "Webhook Stripe non activé en Sprint 1." }, { status: 501 });
}
