import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: false, message: "Billing portal prévu en phase 3." }, { status: 501 });
}
