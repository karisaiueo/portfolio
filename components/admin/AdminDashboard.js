"use client";
import { useEffect, useState } from "react";

const CATS = ["Website", "Poster", "UI Mockup", "Other"];
const blank = () => ({ id: "p" + Date.now(), category: "Website", title: { en: "", id: "" }, short: { en: "", id: "" }, long: { en: "", id: "" }, role: { en: "", id: "" }, points: { en: [], id: [] }, tools: [], url: "", image: "" });
const api = async (u, o) => {
  const r = await fetch(u, o);
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || "Permintaan gagal");
  return d;
};
const JSON_H = { "Content-Type": "application/json" };

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(null);
  const [pw, setPw] = useState("");
  const [list, setList] = useState([]);
  const [d, setD] = useState(null);
  const [toolsText, setToolsText] = useState("");
  const [lt, setLt] = useState("en");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(""), 3000); };
  const load = () => api("/api/projects").then(setList).catch(() => {});

  useEffect(() => { api("/api/admin").then((r) => setAuthed(r.ok)).catch(() => setAuthed(false)); load(); }, []);

  const login = async (e) => {
    e.preventDefault();
    try { await api("/api/admin", { method: "POST", headers: JSON_H, body: JSON.stringify({ password: pw }) }); setAuthed(true); setPw(""); }
    catch (err) { flash(err.message); }
  };
  const logout = async () => { await api("/api/admin", { method: "DELETE" }); setAuthed(false); };

  const persist = async (next, ok = "Tersimpan") => {
    setBusy(true);
    try { await api("/api/projects", { method: "PUT", headers: JSON_H, body: JSON.stringify(next) }); setList(next); flash(ok); return true; }
    catch (err) { flash(err.message); return false; }
    finally { setBusy(false); }
  };

  const edit = (p) => { const x = p ? JSON.parse(JSON.stringify(p)) : blank(); setD(x); setToolsText((x.tools || []).join(", ")); setLt("en"); };
  const set = (k, v) => setD({ ...d, [k]: { ...d[k], [lt]: v } });
  const upload = async (e) => {
    const f = e.target.files?.[0]; if (!f) return;
    const fd = new FormData(); fd.append("file", f);
    try { const r = await api("/api/uploads", { method: "POST", body: fd }); setD((x) => ({ ...x, image: r.path })); }
    catch (err) { flash(err.message); }
  };
  const save = async (e) => {
    e.preventDefault();
    if (!d.title.en.trim()) { setLt("en"); return flash("Judul (EN) wajib diisi"); }
    const clean = { ...d, tools: toolsText.split(",").map((x) => x.trim()).filter(Boolean), points: { en: d.points.en.filter((x) => x.trim()), id: d.points.id.filter((x) => x.trim()) } };
    const i = list.findIndex((x) => x.id === d.id);
    const next = i >= 0 ? list.map((x, k) => (k === i ? clean : x)) : [...list, clean];
    if (await persist(next, i >= 0 ? "Proyek diperbarui" : "Proyek ditambahkan")) setD(null);
  };
  const del = (p) => confirm(`Hapus "${p.title.en || p.title.id}"?`) && persist(list.filter((x) => x.id !== p.id), "Proyek dihapus");
  const move = (i, dir) => {
    const j = i + dir; if (j < 0 || j >= list.length) return;
    const n = [...list]; [n[i], n[j]] = [n[j], n[i]]; persist(n, "Urutan disimpan");
  };

  if (authed === null) return <main className="adm"><p>Memuat…</p></main>;

  if (!authed)
    return (
      <main className="adm adm-center">
        <form className="adm-card adm-login" onSubmit={login}>
          <h1>Admin</h1>
          <p>Masuk untuk mengelola portofolio.</p>
          <input type="password" placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus />
          <button className="adm-btn primary">Masuk</button>
          {msg && <p className="adm-msg err">{msg}</p>}
        </form>
      </main>
    );

  return (
    <main className="adm">
      <header className="adm-head">
        <div><h1>Kelola portofolio</h1><p>{list.length} proyek</p></div>
        <div className="adm-actions">
          <a className="adm-btn" href="/" target="_blank" rel="noreferrer">Lihat website ↗</a>
          <button className="adm-btn" onClick={logout}>Keluar</button>
          <button className="adm-btn primary" onClick={() => edit(null)}>+ Tambah proyek</button>
        </div>
      </header>

      {list.length === 0 && (
        <div className="adm-card adm-empty">
          <h3>Belum ada proyek</h3>
          <p>Sampai kamu menambahkan proyek, website menampilkan contoh bawaan. Tambah proyek pertamamu untuk menggantinya.</p>
        </div>
      )}

      <div className="adm-list">
        {list.map((p, i) => (
          <article key={p.id} className="adm-card adm-row">
            <div className="adm-thumb">{p.image ? <img src={p.image} alt="" /> : <span>No image</span>}</div>
            <div className="adm-info">
              <strong>{p.title.en || p.title.id}</strong>
              <small>{p.category}{p.tools?.length ? " · " + p.tools.join(", ") : ""}</small>
              <p>{p.short.en || p.short.id}</p>
            </div>
            <div className="adm-actions">
              <button className="adm-icon" disabled={i === 0 || busy} onClick={() => move(i, -1)} aria-label="Naik">↑</button>
              <button className="adm-icon" disabled={i === list.length - 1 || busy} onClick={() => move(i, 1)} aria-label="Turun">↓</button>
              <button className="adm-btn" onClick={() => edit(p)}>Edit</button>
              <button className="adm-btn danger" onClick={() => del(p)}>Hapus</button>
            </div>
          </article>
        ))}
      </div>

      {d && (
        <div className="adm-ov" onClick={() => setD(null)}>
          <form className="adm-card adm-form" onClick={(e) => e.stopPropagation()} onSubmit={save}>
            <h2>{list.some((x) => x.id === d.id) ? "Edit proyek" : "Proyek baru"}</h2>

            <div className="adm-img">
              <div className="adm-thumb big">{d.image ? <img src={d.image} alt="" /> : <span>No image</span>}</div>
              <div>
                <label className="adm-btn">Upload gambar<input type="file" accept="image/*" hidden onChange={upload} /></label>
                <input placeholder="atau tempel URL gambar" value={d.image} onChange={(e) => setD({ ...d, image: e.target.value })} />
              </div>
            </div>

            <div className="adm-grid">
              <label>Kategori
                <select value={d.category} onChange={(e) => setD({ ...d, category: e.target.value })}>
                  {[...new Set([...CATS, d.category])].map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label>Tools (pisahkan dengan koma)<input value={toolsText} onChange={(e) => setToolsText(e.target.value)} placeholder="HTML, CSS, WordPress" /></label>
              <label className="full">Link website (opsional)<input value={d.url} onChange={(e) => setD({ ...d, url: e.target.value })} placeholder="https://" /></label>
            </div>

            <div className="adm-tabs">
              {["en", "id"].map((l) => <button type="button" key={l} className={lt === l ? "on" : ""} onClick={() => setLt(l)}>{l === "en" ? "English" : "Indonesia"}</button>)}
            </div>
            <label>Judul<input value={d.title[lt]} onChange={(e) => set("title", e.target.value)} /></label>
            <label>Deskripsi singkat<input value={d.short[lt]} onChange={(e) => set("short", e.target.value)} /></label>
            <label>Deskripsi lengkap (untuk pop up)<textarea rows={4} value={d.long[lt]} onChange={(e) => set("long", e.target.value)} /></label>
            <label>Peran<input value={d.role[lt]} onChange={(e) => set("role", e.target.value)} placeholder="Design to code, development" /></label>
            <label>Poin penting (satu baris satu poin)
              <textarea rows={3} value={d.points[lt].join("\n")} onChange={(e) => set("points", e.target.value.split("\n"))} />
            </label>

            <div className="adm-actions end">
              <button type="button" className="adm-btn" onClick={() => setD(null)}>Batal</button>
              <button className="adm-btn primary" disabled={busy}>{busy ? "Menyimpan…" : "Simpan"}</button>
            </div>
          </form>
        </div>
      )}
      {msg && <div className="adm-toast">{msg}</div>}
    </main>
  );
}
