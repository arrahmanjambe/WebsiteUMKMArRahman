/**
 * ============================================================
 *  DATA PRODUK — src/data/products.ts
 * ============================================================
 *
 *  CARA MENGGANTI GAMBAR PRODUK:
 *
 *  ▶ OPSI A — ASSET LOKAL:
 *    Taruh foto di /public/images/products/
 *    Ubah `image` menjadi: "/images/products/topi-fedora.jpg"
 *
 *  ▶ OPSI B — CLOUDINARY (direkomendasikan):
 *    "https://res.cloudinary.com/NAMA_CLOUD/image/upload/v.../products/topi-fedora.jpg"
 *
 *  Field `images` = array untuk galeri multi-foto di halaman detail.
 * ============================================================
 */

export type ProductSize = {
  label: string;
  description?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: "topi" | "peci" | "custom";
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  detailSections: {
    title: string;
    content: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  recommendations: {
    title: string;
    items: string[];
  }[];
  image: string;         // gambar utama
  images: string[];      // galeri (termasuk gambar utama)
  badge?: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  sizes: ProductSize[];
  isCustomizable: boolean;
  minOrder: number;
  guarantee: string;
  shippingNote: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "all",    name: "Semua Produk", description: "Lihat semua koleksi kami" },
  { id: "topi",   name: "Topi",         description: "Koleksi topi anyaman premium" },
  { id: "peci",   name: "Peci",         description: "Peci tradisional berkualitas" },
  // { id: "custom", name: "Custom Order", description: "Pesanan sesuai kebutuhan" },
];

export const PRODUCTS: Product[] = [
  // ─────────────────────────────────────────────────────────
  // 1. TOPI FEDORA
  // ─────────────────────────────────────────────────────────
  {
    id: "prod-001",
    name: "Topi Fedora",
    slug: "topi-fedora",
    category: "topi",
    categoryLabel: "Topi",
    price: 100000,
    description:
      "Topi fedora anyaman bambu klasik dengan aksen list hitam. Siluet timeless yang elegan, ringan, dan bernapas alami.",
    longDescription:
      "Dirancang dengan siluet klasik yang tak lekang oleh waktu, topi ini menampilkan anyaman bambu dengan rona emas alami (natural tan) yang hangat, memberikan kesan elegan yang membumi. Paduan warna aslinya yang organik dipertegas oleh aksen list hitam, menciptakan garis kontras yang tajam pada tampilan santai Anda. Menggunakan serat bambu pilihan yang membiarkan kulit kepala Anda tetap bernafas di bawah terik matahari, menjadikannya teman setia untuk perjalanan panjang. Teksturnya yang kokoh namun ringan, serta pendar warnanya yang mengingatkan pada cahaya sore hari, akan membawa Anda kembali pada aroma liburan musim panas di masa kecil—saat hari-hari terasa lebih lambat dan matahari terasa jauh lebih bersahabat.",
    detailSections: [
      {
        title: "Desain Klasik Kontemporer",
        content:
          "Siluet fedora dengan flat brim yang tegas, dirancang untuk memberikan perlindungan maksimal dari sinar matahari tanpa mengorbankan gaya. Aksen list hitam yang kontras memberikan garis modern yang kuat, menjadikannya pelengkap sempurna untuk dikenakan saat ini dan tetap relevan hingga bertahun-tahun mendatang.",
      },
      {
        title: "Serat Bambu Pilihan",
        content:
          "100% menggunakan serat bambu alami yang dipanen secara berkelanjutan. Karakter bambu yang secara alami \"dingin\" memungkinkan sirkulasi udara maksimal di cuaca panas, serta memberikan bobot yang ringan namun struktur yang jauh lebih kuat dan tahan lama dibandingkan topi jerami biasa.",
      },
      {
        title: "Dibuat Sepenuhnya dengan Tangan",
        content:
          "Setiap helai bambu diraut dan dianyam satu per satu secara manual dengan tingkat ketelitian yang tinggi. Perhatikan lebih dekat alur anyaman spiralnya yang rapi dan rapat, sebuah dedikasi waktu dan kesabaran untuk memastikan tidak ada dua topi yang benar-benar identik, menjadikan setiap bagian memiliki \"sidik jari\" pengrajinnya.",
      },
    ],
    specifications: [
      { label: "Lebar Brim", value: "5–6 cm" },
      { label: "Tinggi Crown", value: "11 cm" },
      { label: "Diameter Kepala", value: "20 cm" },
      { label: "Material", value: "100% Serat Bambu Alami" },
      { label: "Finishing", value: "Aksen List Hitam" },
      { label: "Teknik", value: "Anyaman Tangan" },
    ],
    recommendations: [
      {
        title: "Rekomendasi Penggunaan",
        items: [
          "Tropical Escape: Pantai, resort, dan liburan musim panas.",
          "Semi-Formal Outdoor: Garden party, pernikahan terbuka, dan acara sore hari.",
          "Urban Chic: Eksplorasi kota, kafe terbuka, dan pameran seni.",
        ],
      },
    ],
    // 🔧 GANTI dengan foto produk asli (lokal atau Cloudinary)
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456093/Pedora_2_whpcx0.png",
    images: [
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456093/Pedora_2_whpcx0.png",
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456094/Pedora_1_ubw3hu.png",
    ],
    badge: "",
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    sizes: [
      { label: "S", description: "Diameter ±19 cm" },
      { label: "M", description: "Diameter 20 cm (standar)" },
      { label: "L", description: "Diameter ±21 cm" },
    ],
    isCustomizable: true,
    minOrder: 1,
    guarantee: "Garansi penggantian jika rusak saat pengiriman (lapor 1×24 jam)",
    shippingNote: "Estimasi pengiriman 2–5 hari kerja ke seluruh Indonesia",
  },

  // ─────────────────────────────────────────────────────────
  // 2. TOPI KOBOY
  // ─────────────────────────────────────────────────────────
  {
    id: "prod-002",
    name: "Topi Koboy",
    slug: "topi-koboy",
    category: "topi",
    categoryLabel: "Topi",
    price: 100000,
    description:
      "Siluet western ikonik dengan anyaman bambu keras berona madu alami. Kokoh, ringan, dan berkarakter kuat.",
    longDescription:
      "Lahir dari ketekunan rautan tangan, topi ini menghidupkan kembali kegagahan siluet western klasik melalui anyaman bambu keras berona madu alami yang memikat. Struktur anyamannya yang rapat dan kaku memberikan ketahanan fisik yang tak tertandingi, namun tetap menjaga bobotnya tetap ringan saat menempuh perjalanan di bawah terik matahari. Kontras tajam dari list hitam di sepanjang tepiannya bukan sekadar hiasan, melainkan bingkai yang mempertegas karakter berani dan petualang pada setiap pemakainya. Serat bambu pilihan ini membiarkan kulit kepala Anda senantiasa sejuk, seolah membawa kesegaran angin lembah ke tengah hari yang panas.",
    detailSections: [
      {
        title: "Siluet Western yang Ikonik",
        content:
          "Dirancang dengan pinch crown yang tegas dan brim yang kokoh untuk perlindungan maksimal. Desain ini diciptakan untuk menjadi kawan setia petualangan Anda sekarang, dan tetap menjadi benda yang layak diwariskan di kemudian hari.",
      },
      {
        title: "Serat Bambu Keras Pilihan",
        content:
          "100% menggunakan anyaman bambu alami yang diproses khusus agar lebih kaku dan tahan lama. Sifat alaminya memungkinkan sirkulasi udara yang optimal di cuaca panas, serta memberikan tekstur organik yang semakin berkarakter seiring waktu pemakaian.",
      },
      {
        title: "Dibuat Sepenuhnya dengan Tangan",
        content:
          "Setiap helai bambu diraut dan dianyam satu per satu dengan kesabaran tinggi. Perhatikan detail kecil seperti lubang ventilasi (metal eyelet) dan kerapihan list hitamnya—sebuah dedikasi manual yang memastikan setiap topi memiliki keunikan tersendiri yang tidak dimiliki mesin.",
      },
    ],
    specifications: [
      { label: "Lebar Brim", value: "9 cm (perlindungan ekstra hingga area leher)" },
      { label: "Tinggi Crown", value: "11 cm (sirkulasi udara optimal)" },
      { label: "Diameter Kepala", value: "20 cm (standar dewasa)" },
      { label: "Material", value: "Bambu Keras Pilihan" },
      { label: "Finishing", value: "Aksen List Hitam + Metal Eyelet" },
      { label: "Teknik", value: "Anyaman Tangan" },
    ],
    recommendations: [
      {
        title: "Rekomendasi Penggunaan",
        items: [
          "Petualangan Alam: Savana, perbukitan, atau perjalanan road trip yang eksotis.",
          "Festival & Outdoor: Festival musik folk, acara berkuda, hingga garden party bertema rustic.",
          "Statement Style: Sentuhan \"Urban Cowboy\" yang berwibawa di kafe terbuka atau pameran seni.",
        ],
      },
    ],
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456099/Koboi_1_qqgk7d.png",
    images: [
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456099/Koboi_1_qqgk7d.png",
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456097/Koboi_2_jaa47x.png",
    ],
    badge: "Terlaris",
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    sizes: [
      { label: "S", description: "Diameter ±19 cm" },
      { label: "M", description: "Diameter 20 cm (standar)" },
      { label: "L", description: "Diameter ±21 cm" },
    ],
    isCustomizable: true,
    minOrder: 1,
    guarantee: "Garansi penggantian jika rusak saat pengiriman (lapor 1×24 jam)",
    shippingNote: "Estimasi pengiriman 2–5 hari kerja ke seluruh Indonesia",
  },

  // ─────────────────────────────────────────────────────────
  // 3. TOPI LUTFY
  // ─────────────────────────────────────────────────────────
  {
    id: "prod-003",
    name: "Topi Lutfy",
    slug: "topi-lutfy",
    category: "topi",
    categoryLabel: "Topi",
    price: 100000,
    description:
      "Topi brim lebar dengan anyaman bambu emas alami dan aksen list merah yang ceria. Cocok untuk pantai dan garden party.",
    longDescription:
      "Dirancang dengan siluet lebar yang memikat, topi ini menampilkan anyaman bambu pilihan dalam rona emas alami yang hangat dan bercahaya. Paduan warna aslinya yang organik dipertegas oleh aksen list merah yang berani, menciptakan garis kontras yang ceria dan penuh energi pada tampilan Anda. Menggunakan serat bambu pilihan yang membiarkan kulit kepala Anda tetap bernapas di bawah terik matahari, menjadikannya pelindung setia sekaligus statement piece yang elegan. Teksturnya yang kokoh namun ringan, serta pendar warnanya yang mengingatkan pada cahaya pagi, akan membawa Anda kembali pada tawa riang liburan musim panas di masa kecil—saat hari-hari terasa lebih panjang dan penuh dengan petualangan yang menyenangkan.",
    detailSections: [
      {
        title: "Siluet Lebar yang Menawan",
        content:
          "Dirancang dengan brim luas untuk perlindungan wajah maksimal dari sinar matahari tanpa kehilangan sentuhan gaya. Desain ini diciptakan untuk menjadi pelengkap penampilan Anda yang paling berkesan saat ini, dan tetap indah untuk diwariskan kelak.",
      },
      {
        title: "Serat Bambu Alami",
        content:
          "100% menggunakan anyaman bambu alami yang memberikan sirkulasi udara optimal. Karakter bambunya yang ringan namun kuat memastikan topi ini tetap nyaman dikenakan sepanjang hari, sekaligus semakin lembut seiring waktu pemakaian.",
      },
      {
        title: "Dibuat Sepenuhnya dengan Tangan",
        content:
          "Setiap detail anyaman dan pemasangan list merahnya diselesaikan satu per satu secara manual dengan penuh kesabaran. Perhatikan kehalusan teksturnya—sebuah bukti dedikasi tangan pengrajin yang memastikan setiap topi memiliki keistimewaan tersendiri.",
      },
    ],
    specifications: [
      { label: "Lebar Brim", value: "10 cm" },
      { label: "Tinggi Crown", value: "11 cm" },
      { label: "Diameter Kepala", value: "20 cm" },
      { label: "Material", value: "100% Serat Bambu Alami" },
      { label: "Finishing", value: "Aksen List Merah" },
      { label: "Teknik", value: "Anyaman Tangan" },
    ],
    recommendations: [
      {
        title: "Rekomendasi Penggunaan",
        items: [
          "Beach & Resort: Berjalan di tepi pantai, bersantai di kolam renang, atau makan siang di tepi laut.",
          "Garden Party: Pesta kebun, piknik elegan, atau acara santai di ruang terbuka.",
          "Fashion Statement: Sentuhan warna berani pada gaun musim panas atau busana linen saat berwisata.",
        ],
      },
    ],
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456095/Lutfi_1_ftztau.png",
    images: [
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456095/Lutfi_1_ftztau.png",
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456094/Lutfi_2_vbvxmt.png",
    ],
    badge: "",
    inStock: true,
    rating: 4.9,
    reviewCount: 64,
    sizes: [
      { label: "S", description: "Diameter ±19 cm" },
      { label: "M", description: "Diameter 20 cm (standar)" },
      { label: "L", description: "Diameter ±21 cm" },
    ],
    isCustomizable: true,
    minOrder: 1,
    guarantee: "Garansi penggantian jika rusak saat pengiriman (lapor 1×24 jam)",
    shippingNote: "Estimasi pengiriman 2–5 hari kerja ke seluruh Indonesia",
  },

  // ─────────────────────────────────────────────────────────
  // 4. PECI
  // ─────────────────────────────────────────────────────────
  {
    id: "prod-004",
    name: "Peci Anyaman Bambu",
    slug: "peci-anyaman-bambu",
    category: "peci",
    categoryLabel: "Peci",
    price: 100000,
    description:
      "Peci kopyah klasik dari anyaman serat bambu pilihan dipadukan bludru hitam premium. Elegan, sejuk, dan bernapas.",
    longDescription:
      "Teranyam dari helaian serat bambu pilihan yang berpadu dengan kelembutan bludru pekat, peci ini adalah sebuah penghormatan tenang pada tradisi kerajinan Nusantara. Dengan siluet kopyah klasik, kami mempertemukan anyaman serat bambu pilihan dalam rona madu alami yang membumi dengan kemewahan bludru hitam pekat. Karakter bambunya yang rapat namun berpori memastikan sirkulasi udara maksimal, menjaga kepala Anda tetap sejuk saat menempuh perjalanan panjang atau beribadah, seolah membawa ketenangan angin sore ke dalam setiap langkah Anda. Pendar warna bambu yang hangat kontras dengan kelembutan bludru, menciptakan keseimbangan yang elegan antara kesederhanaan dan kewibawaan yang bersahaja.",
    detailSections: [
      {
        title: "Harmoni Tradisi & Modernitas",
        content:
          "Peci ini adalah perpaduan berani antara warisan budaya dan estetika modern. Sisi anyaman bambunya menonjolkan akar tradisi, sementara bludru hitam pekat dan aksen jala tipis di sekeliling crown memberikan garis modern yang kuat dan tajam pada tampilan formal Anda.",
      },
      {
        title: "Serat Bambu Pilihan & Bludru Premium",
        content:
          "100% menggunakan anyaman bambu alami yang diproses agar kaku namun ringan. Karakter bambu ini mendinginkan secara alami, sementara bludru premium yang lembut memberikan kenyamanan ekstra. Keduanya akan semakin menyatu dan personal mengikuti bentuk kepala Anda seiring waktu pemakaian.",
      },
      {
        title: "Dibuat Sepenuhnya dengan Tangan",
        content:
          "Setiap helai bambu diraut dan dianyam, serta setiap jengkal bludru dipasang satu per satu secara manual dengan ketelitian tinggi. Perhatikan detail kecil di bagian atas—sebuah dedikasi manual yang memastikan tidak ada dua peci yang benar-benar identik.",
      },
    ],
    specifications: [
      { label: "Tinggi Peci", value: "9 cm" },
      { label: "Diameter Kepala", value: "20 cm" },
      { label: "Material Utama", value: "Anyaman Serat Bambu Alami" },
      { label: "Material Pelapis", value: "Bludru Hitam Premium" },
      { label: "Teknik", value: "Anyaman Tangan" },
    ],
    recommendations: [
      {
        title: "Rekomendasi Penggunaan",
        items: [
          "Momen Religi: Ibadah, merayakan hari raya, atau acara pengajian.",
          "Acara Formal & Budaya: Pernikahan, pertemuan formal, atau acara budaya.",
          "Kenyamanan Sehari-hari: Bobot ringan dan bahan bernapas untuk pemakaian harian.",
        ],
      },
    ],
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456100/Peci_2_rv2u0r.png",
    images: [
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456100/Peci_2_rv2u0r.png",
      "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456094/Peci_1_siqrb5.png",
    ],
    badge: "Terlaris",
    inStock: true,
    rating: 4.8,
    reviewCount: 203,
    sizes: [
      { label: "S", description: "Diameter ±19 cm" },
      { label: "M", description: "Diameter 20 cm (standar)" },
      { label: "L", description: "Diameter ±21 cm" },
    ],
    isCustomizable: true,
    minOrder: 1,
    guarantee: "Garansi penggantian jika rusak saat pengiriman (lapor 1×24 jam)",
    shippingNote: "Estimasi pengiriman 2–5 hari kerja ke seluruh Indonesia",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const getProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

export const getRelatedProducts = (product: Product, limit = 3): Product[] =>
  PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit);
