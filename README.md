# 🎋 Anyaman Bambu AR Rahman — Website

Website produk UMKM anyaman bambu premium dari Tasikmalaya, dibangun dengan **Next.js 14**, **TypeScript**, dan **Tailwind CSS**.

---

## 🚀 Setup & Jalankan Lokal

### Prasyarat
- Node.js 18+ 
- npm atau yarn

### Langkah Instalasi

```bash
# 1. Masuk ke folder project
cd anyaman-bambu

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📁 Struktur Project

```
src/
├── app/                    # Next.js App Router (pages)
│   ├── page.tsx            # Beranda
│   ├── about/page.tsx      # Tentang Kami
│   ├── products/page.tsx   # Produk
│   ├── kemitraan/page.tsx  # Kemitraan
│   ├── faq/page.tsx        # FAQ
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
│
├── components/             # Semua komponen UI
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CartSidebar.tsx
│   ├── ColorPaletteSelector.tsx
│   ├── home/
│   ├── about/
│   ├── products/
│   ├── kemitraan/
│   └── faq/
│
├── context/                # React Context providers
│   ├── CartContext.tsx
│   └── PaletteContext.tsx
│
├── data/                   # 🔧 Mock data (mudah diganti!)
│   ├── products.ts         # Data produk
│   ├── faq.ts              # Data FAQ
│   ├── mitra.ts            # Data kemitraan
│   ├── about.ts            # Data tentang kami
│   └── palettes.ts         # Konfigurasi warna
│
├── lib/
│   └── utils.ts
│
└── styles/
    └── globals.css
```

---

## 🎨 Kustomisasi Warna (Color Palette)

Tersedia 4 tema warna yang bisa dipilih langsung di website:

| Tema | Primary | Secondary | Tertiary |
|------|---------|-----------|----------|
| Bambu Natural | Hijau #4A7C59 | Coklat #8B6B3D | Emas #C9A96E |
| Midnight Forest | Hijau Gelap | Emas | Mint |
| Sakura Earth | Terracotta | Sage | Peach |
| Ocean Breeze | Teal | Coral | Cyan |

Untuk menambah tema baru, edit `src/data/palettes.ts`.

---

## 📝 Mengganti Data (Mock Data)

Semua data ada di folder `src/data/`. Ganti sesuai kebutuhan:

- **Produk**: `src/data/products.ts` — tambah/edit produk, harga, gambar
- **FAQ**: `src/data/faq.ts` — edit pertanyaan & jawaban
- **Mitra**: `src/data/mitra.ts` — daftar mitra dan paket kemitraan
- **Tentang**: `src/data/about.ts` — profil brand, founder, workshop, dll
- **Warna**: `src/data/palettes.ts` — tema warna

---

## 🌐 Deploy ke Vercel

### Cara 1: Via GitHub (Recommended)
1. Push kode ke GitHub repository
2. Login ke [vercel.com](https://vercel.com)
3. Import repository tersebut
4. Vercel akan auto-detect Next.js dan deploy otomatis

### Cara 2: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Setelah Deploy
1. Ganti `metadataBase` di `src/app/layout.tsx` dengan URL Vercel Anda
2. Ganti URL di `src/app/sitemap.ts` dan `robots.ts`
3. Ganti nomor WhatsApp `6281234567890` di semua file
4. Ganti email `hello@arrahman-bambu.id` di footer

---

## 🔧 Environment Variables (Opsional)

Buat file `.env.local` jika diperlukan:

```env
NEXT_PUBLIC_WHATSAPP=6281234567890
NEXT_PUBLIC_EMAIL=hello@arrahman-bambu.id
NEXT_PUBLIC_SITE_URL=https://arrahman-bambu.id
```

---

## ✅ Fitur

- [x] Beranda dengan hero, produk unggulan, statistik, pencapaian
- [x] Halaman Produk dengan filter kategori & keranjang belanja
- [x] Halaman Tentang Kami dengan timeline, profil founder, peta, workshop, UNESCO
- [x] Halaman Kemitraan dengan sistem reseller/distributor/korporat
- [x] Halaman FAQ dengan accordion & kategori filter
- [x] Color Palette Switcher (4 tema)
- [x] Keranjang belanja dengan checkout via WhatsApp
- [x] Responsive mobile-first design
- [x] SEO optimized (metadata, sitemap, robots.txt)
- [x] TypeScript + Tailwind CSS
- [x] Ready deploy ke Vercel

---

## 📞 Kontak

Untuk pertanyaan teknis website, hubungi pengembang.
Untuk pertanyaan produk: [WhatsApp AR Rahman](https://wa.me/6281234567890)
