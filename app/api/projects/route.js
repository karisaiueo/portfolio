import { NextResponse } from "next/server";
import { readProjects, writeProjects, isAuthed } from "../../../lib/store";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await readProjects());
}

export async function PUT(req) {
  if (!isAuthed())
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const list = await req.json().catch(() => null);
  if (!Array.isArray(list))
    return NextResponse.json({ error: "Data tidak valid" }, { status: 400 });
  await writeProjects(list);
  return NextResponse.json({ ok: true });
}
