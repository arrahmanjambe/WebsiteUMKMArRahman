export type Mitra = {
  id: string;
  name: string;
  type: "distributor" | "retailer" | "reseller" | "corporate";
  location: string;
  description: string;
  logo?: string;
  since: string;
  testimonial?: string;
  contact?: string;
};

export type MitraType = {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  requirements: string[];
  commission?: string;
  minOrder?: string;
};

export const MITRA_TYPES: MitraType[] = [
  {
    id: "reseller",
    title: "Reseller",
    description: "Cocok untuk individu atau pelaku usaha kecil yang ingin memasarkan produk kami.",
    icon: "🛍️",
    benefits: [
      "Harga khusus reseller (diskon 15–25%)",
      "Materi pemasaran digital gratis",
      "Dukungan WhatsApp Group reseller",
      "Update produk & promo terbaru",
      "Tanpa fee pendaftaran",
    ],
    requirements: [
      "Komitmen pembelian minimal Rp 500.000/bulan",
      "Aktif berjualan di minimal 1 platform",
      "Mengikuti panduan branding kami",
    ],
    commission: "15–25%",
    minOrder: "Rp 500.000/bulan",
  },
  {
    id: "distributor",
    title: "Distributor",
    description: "Untuk pelaku bisnis yang ingin mendistribusikan produk ke wilayah tertentu secara eksklusif.",
    icon: "🚚",
    benefits: [
      "Harga distributor (diskon 30–40%)",
      "Area distribusi eksklusif",
      "Prioritas stok produk baru",
      "Dukungan marketing penuh",
      "Training product knowledge",
      "Co-branding opportunity",
    ],
    requirements: [
      "Minimal pembelian Rp 5.000.000/bulan",
      "Memiliki jaringan distribusi yang aktif",
      "Perjanjian kerjasama resmi",
      "Wilayah distribusi tidak tumpang tindih",
    ],
    commission: "30–40%",
    minOrder: "Rp 5.000.000/bulan",
  },
  {
    id: "corporate",
    title: "Korporat & Event",
    description: "Untuk perusahaan atau penyelenggara event yang membutuhkan souvenir dalam jumlah besar.",
    icon: "🏢",
    benefits: [
      "Harga korporat khusus",
      "Custom branding & packaging",
      "Dedicated account manager",
      "Pengiriman terkoordinasi",
      "Sertifikat authenticity",
      "Invoice resmi",
    ],
    requirements: [
      "Minimal order 100 pcs",
      "Pembayaran DP 50% di awal",
      "Lead time minimal 14 hari kerja",
    ],
    minOrder: "100 pcs",
  },
];

export const MITRA_LIST: Mitra[] = [
  {
    id: "mitra-001",
    name: "Toko Kerajinan Nusantara",
    type: "retailer",
    location: "Jakarta Selatan",
    description: "Toko kerajinan tangan premium yang telah bermitra sejak 2021.",
    since: "2021",
    testimonial:
      "Produk AR Rahman Jambe selalu jadi favorit pelanggan kami. Kualitasnya konsisten dan packaging-nya sangat menarik.",
  },
  {
    id: "mitra-002",
    name: "Archipelago Craft Store",
    type: "distributor",
    location: "Bali",
    description: "Distributor produk kerajinan lokal untuk pasar wisatawan mancanegara di Bali.",
    since: "2020",
    testimonial:
      "Topi pantai AR Rahman Jambe sangat diminati wisatawan. Kami bangga bisa memperkenalkan produk lokal berkualitas ke dunia.",
  },
  {
    id: "mitra-003",
    name: "Green Living Co.",
    type: "corporate",
    location: "Surabaya",
    description: "Perusahaan yang menjadikan produk kami sebagai souvenir korporat ramah lingkungan.",
    since: "2022",
    testimonial: "Souvenir custom AR Rahman Jambe menjadi buah bibir di setiap event kami. Sangat profesional dalam pelayanan.",
  },
  {
    id: "mitra-004",
    name: "Pesona Lokal Boutique",
    type: "retailer",
    location: "Yogyakarta",
    description: "Butik produk lokal premium yang mengangkat kerajinan nusantara.",
    since: "2022",
  },
  {
    id: "mitra-006",
    name: "Eco Souvenir Jakarta",
    type: "reseller",
    location: "Jakarta",
    description: "Platform souvenir ramah lingkungan yang memasarkan produk lokal secara online.",
    since: "2023",
  },
];

export const MITRA_STEPS = [
  {
    step: "01",
    title: "Daftar & Konsultasi",
    description: "Hubungi kami melalui formulir pendaftaran atau WhatsApp. Tim kami akan menghubungi untuk sesi konsultasi awal.",
  },
  {
    step: "02",
    title: "Pilih Paket Kemitraan",
    description: "Diskusikan jenis kemitraan yang paling sesuai dengan bisnis dan kapasitas Anda.",
  },
  {
    step: "03",
    title: "Perjanjian & Onboarding",
    description: "Tanda tangani perjanjian kerjasama dan ikuti sesi onboarding produk knowledge.",
  },
  {
    step: "04",
    title: "Mulai Berjualan",
    description: "Terima kit pemasaran, akses harga khusus, dan mulai raih keuntungan bersama.",
  },
];
