import { NextResponse } from "next/server";
import { isAuthed, token } from "../../../lib/store";
export const dynamic = "force-dynamic";

export async function GET() { return NextResponse.json({ ok: isAuthed() }); }

export async function POST(req) {
  const { password } = await req.json().catch(() => ({}));
  if (!process.env.ADMIN_PASSWORD)
    return NextResponse.json({ error: "ADMIN_PASSWORD belum diatur di .env.local" }, { status: 500 });
  if (password !== process.env.ADMIN_PASSWORD)
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin", token(), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("admin");
  return res;
}
