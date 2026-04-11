import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // TODO: Wire up Resend to send email to geral@prismasolutions.pt
  // For now, log the request
  console.log("Demo request received:", body);

  return NextResponse.json({ ok: true });
}
