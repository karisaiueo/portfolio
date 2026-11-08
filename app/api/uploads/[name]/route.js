import fs from "fs/promises";
import path from "path";
import { UPLOADS } from "../../../../lib/store";
export const dynamic = "force-dynamic";
const TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
};

export async function GET(_, { params }) {
  const name = path.basename(params.name);
  try {
    const buf = await fs.readFile(path.join(UPLOADS, name));
    return new Response(buf, {
      headers: {
        "Content-Type":
          TYPES[path.extname(name).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
