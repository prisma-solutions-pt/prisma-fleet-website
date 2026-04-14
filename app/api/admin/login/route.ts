import { NextResponse } from "next/server";
import { ADMIN_COOKIE, hashPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const next = String(form.get("next") ?? "/admin");

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.redirect(new URL("/admin/login?err=config", request.url), { status: 303 });
  }

  if (password !== expected) {
    return NextResponse.redirect(new URL("/admin/login?err=invalid", request.url), { status: 303 });
  }

  const token = await hashPassword(password);
  const res = NextResponse.redirect(new URL(next, request.url), { status: 303 });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
