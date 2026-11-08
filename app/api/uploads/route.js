import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { UPLOADS, isAuthed } from "../../../lib/store";
export const dynamic = "force-dynamic";

export async function POST(req) {
  if (!isAuthed())
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const file = (await req.formData()).get("file");
  if (!file || !file.type?.startsWith("image/"))
    return NextResponse.json(
      { error: "File harus berupa gambar" },
      { status: 400 },
    );
  if (file.size > 5 * 1024 * 1024)
    return NextResponse.json({ error: "Maksimal 5 MB" }, { status: 400 });
  const ext = (path.extname(file.name) || ".jpg")
    .toLowerCase()
    .replace(/[^.a-z0-9]/g, "");
  const name = `${Date.now()}${ext}`;
  await fs.mkdir(UPLOADS, { recursive: true });
  await fs.writeFile(
    path.join(UPLOADS, name),
    Buffer.from(await file.arrayBuffer()),
  );
  return NextResponse.json({ path: `/api/uploads/${name}` });
}
