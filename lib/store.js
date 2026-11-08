import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { cookies } from "next/headers";

export const DATA = path.join(process.cwd(), "data");
const FILE = path.join(DATA, "projects.json");
export const UPLOADS = path.join(DATA, "uploads");

export async function readProjects() {
  try { return JSON.parse(await fs.readFile(FILE, "utf8")); } catch { return []; }
}
export async function writeProjects(list) {
  await fs.mkdir(DATA, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(list, null, 2));
}
export const token = () =>
  crypto.createHash("sha256").update((process.env.ADMIN_PASSWORD || "") + "|portfolio-admin").digest("hex");
export function isAuthed() {
  return !!process.env.ADMIN_PASSWORD && cookies().get("admin")?.value === token();
}
