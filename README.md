This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy ke Vercel

### Cara 1 — lewat GitHub (disarankan)

1. Buat repository baru di [github.com/new](https://github.com/new).
2. Dari folder project, jalankan:

   ```bash
   git add .
   git commit -m "Siap deploy"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

3. Buka [vercel.com/new](https://vercel.com/new), lalu import repository tersebut.
4. Framework akan otomatis terdeteksi **Next.js** — biarkan pengaturan default.
5. Buka **Environment Variables**, tambahkan:

   | Name | Value |
   |---|---|
   | `ADMIN_PASSWORD` | password admin pilihanmu |

6. Klik **Deploy** dan tunggu sampai selesai.
7. Tambahkan domain sendiri di **Project Settings > Domains** (opsional).

### Cara 2 — lewat CLI

```bash
npm i -g vercel
vercel login
vercel            # deploy preview
vercel --prod     # deploy production
```

Tambahkan environment variable lewat dashboard Vercel atau:

```bash
vercel env add ADMIN_PASSWORD production
```

### Catatan penting

- Halaman publik dan gambar di `public/projects/` berjalan normal di Vercel.
- Fitur **/admin menyimpan data ke file lokal** (`data/projects.json` dan `data/uploads`). Filesystem Vercel bersifat sementara dan read-only, jadi perubahan/upload dari admin **tidak akan tersimpan permanen**.
- Kalau admin harus berfungsi di production, gunakan penyimpanan eksternal (Vercel Blob/KV, Supabase, atau S3) atau hosting VPS dengan disk permanen.
- Jangan commit `.env.local`. Untuk production, isi `ADMIN_PASSWORD` lewat Environment Variables Vercel.
