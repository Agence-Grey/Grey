import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: false, message: "Stripe Checkout arrive en phase 3." }, { status: 501 });
}
