/**
 * ============================================================
 *  KONFIGURASI BRAND & LOGO — src/data/site.ts
 * ============================================================
 *
 *  File ini adalah satu-satunya tempat untuk mengatur:
 *  - Logo navbar (gambar atau teks)
 *  - Nama & tagline brand
 *  - Info kontak (WhatsApp, email, dll)
 *
 *  TIDAK PERLU menyentuh file lain untuk mengubah logo.
 * ============================================================
 */

export const SITE_CONFIG = {
  brandName: "AR Rahman",
  brandTagline: "Anyaman Bambu",

  /**
   * KONFIGURASI LOGO NAVBAR
   * ========================
   * Ubah `type` untuk beralih antara mode gambar dan mode teks:
   *
   * ▶ MODE TEKS (default — tidak perlu gambar):
   *   type: "text"
   *   → Menampilkan ikon bambu + brandName + brandTagline
   *
   * ▶ MODE GAMBAR (pakai logo/foto custom):
   *   type: "image"
   *   → Menampilkan file gambar dari `src`
   *
   * CARA GANTI KE MODE GAMBAR:
   *   1. Pilih salah satu metode di bawah (lokal atau Cloudinary)
   *   2. Ubah type menjadi "image"
   *   3. Isi src, width, height sesuai file logo kamu
   */
  logo: {
    type: "text" as "text" | "image",

    // ── OPSI A: ASSET LOKAL ────────────────────────────────
    // Letakkan file logo di folder: /public/images/logo.png
    // Lalu isi seperti ini:
    //   src: "/images/logo.png"
    //
    // ── OPSI B: CLOUDINARY (gratis) ───────────────────────
    // Setelah upload ke Cloudinary, URL-nya seperti:
    //   src: "https://res.cloudinary.com/NAMA_CLOUDMU/image/upload/v123456/logo.png"
    //
    src: "/images/logo.png",       // ← ganti URL di sini
    alt: "Anyaman Bambu AR Rahman",
    width: 140,   // ← lebar logo dalam pixel (navbar height ~64px, sesuaikan)
    height: 40,   // ← tinggi logo dalam pixel
  },

  contact: {
    // ── WAJIB DIISI ────────────────────────────────────────
    // Nomor WA tanpa + atau 0 di depan, pakai 62 (kode negara Indonesia)
    // Contoh: 08123456789 → 6281234567890 (Ubah 0 pertama → 62)
    whatsapp: "6281234567890",
    email: "hello@arrahman-bambu.id",
    address: "Desa Mulyasari, Kec. Ciawi, Tasikmalaya, Jawa Barat",
    instagram: "https://instagram.com/arrahman.bambu",
    youtube: "https://youtube.com/@arrahmanbambu",
    maps: "https://maps.google.com/?q=-7.2575,108.1057",
  },
};

/**
 * Helper: generate link WhatsApp dengan pesan otomatis
 */
export const waLink = (message?: string) => {
  const base = `https://wa.me/${SITE_CONFIG.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
