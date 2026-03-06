export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  badge?: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  materials: string[];
  dimensions: string;
  weight: string;
  features: string[];
  isCustomizable: boolean;
  minOrder: number;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "all", name: "Semua Produk", description: "Lihat semua koleksi kami" },
  { id: "topi", name: "Topi", description: "Topi anyaman premium" },
  { id: "peci", name: "Peci", description: "Peci tradisional berkualitas" },
  { id: "custom", name: "Custom Order", description: "Pesanan sesuai kebutuhan" },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-001",
    name: "Topi Pantai Premium",
    slug: "topi-pantai-premium",
    category: "topi",
    price: 185000,
    originalPrice: 220000,
    description: "Topi pantai anyaman bambu premium dengan ventilasi alami, nyaman dipakai seharian.",
    longDescription:
      "Topi pantai kami terbuat dari bambu pilihan yang diproses secara tradisional oleh pengrajin berpengalaman. Desain ventilasi alami membuat udara bersirkulasi dengan baik, menjaga kepala tetap sejuk di bawah terik matahari. Cocok untuk aktivitas pantai, berkebun, atau sekadar bergaya di hari santai.",
    image: "https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?w=600&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80",
    ],
    badge: "Best Seller",
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    materials: ["Bambu pilihan", "Tali alami", "Pewarna organik"],
    dimensions: "Diameter 38cm, Tinggi 12cm",
    weight: "180g",
    features: [
      "Anyaman rapat dan kuat",
      "Ventilasi alami",
      "Anti UV alami",
      "Ramah lingkungan",
      "Dapat dicustom ukuran",
    ],
    isCustomizable: true,
    minOrder: 1,
  },
  {
    id: "prod-002",
    name: "Topi Pantai Classic",
    slug: "topi-pantai-classic",
    category: "topi",
    price: 125000,
    description: "Topi pantai klasik dengan desain timeless, cocok untuk semua kalangan.",
    longDescription:
      "Versi klasik dari koleksi topi pantai kami. Dibuat dengan teknik anyaman tradisional yang telah diwariskan turun-temurun. Ringan dan tahan lama, cocok untuk berbagai kesempatan.",
    image: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=600&q=80"],
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    materials: ["Bambu lokal", "Tali alami"],
    dimensions: "Diameter 36cm, Tinggi 11cm",
    weight: "150g",
    features: ["Desain klasik", "Ringan", "Tahan lama", "Ramah lingkungan"],
    isCustomizable: true,
    minOrder: 1,
  },
  {
    id: "prod-003",
    name: "Topi Pantai Wide Brim",
    slug: "topi-pantai-wide-brim",
    category: "topi",
    price: 215000,
    description: "Topi pantai lebar ekstra untuk perlindungan maksimal dari sinar matahari.",
    longDescription:
      "Topi dengan brim lebih lebar dari standar, memberikan perlindungan ekstra untuk wajah dan leher. Cocok untuk aktivitas outdoor yang lama di bawah sinar matahari.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80"],
    badge: "New",
    inStock: true,
    rating: 4.9,
    reviewCount: 34,
    materials: ["Bambu premium", "Tali kulit", "Pewarna alami"],
    dimensions: "Diameter 45cm, Tinggi 12cm",
    weight: "220g",
    features: ["Brim ekstra lebar", "Proteksi UV maksimal", "Simpul kulit premium", "Adjustable"],
    isCustomizable: true,
    minOrder: 1,
  },
  {
    id: "prod-004",
    name: "Peci Tradisional",
    slug: "peci-tradisional",
    category: "peci",
    price: 95000,
    description: "Peci anyaman bambu tradisional dengan kualitas premium untuk berbagai kesempatan formal.",
    longDescription:
      "Peci kami dibuat dengan teknik anyaman bambu halus yang menciptakan tampilan elegan namun tetap adem dipakai. Cocok untuk acara formal, keagamaan, maupun sehari-hari.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"],
    badge: "Terlaris",
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    materials: ["Bambu halus", "Lapisan dalam kain"],
    dimensions: "Ukuran S/M/L/XL",
    weight: "90g",
    features: ["Anyaman halus", "Ringan", "Berbagai ukuran", "Adem", "Formal & casual"],
    isCustomizable: true,
    minOrder: 1,
  },
  {
    id: "prod-005",
    name: "Peci Modern",
    slug: "peci-modern",
    category: "peci",
    price: 120000,
    description: "Peci dengan sentuhan modern, anyaman bambu dipadukan dengan aksen kontemporer.",
    longDescription:
      "Perpaduan tradisi dan modernitas dalam satu peci. Desain kontemporer dengan bahan bambu alami yang telah melalui proses finishing modern untuk daya tahan yang lebih baik.",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&q=80"],
    inStock: true,
    rating: 4.5,
    reviewCount: 67,
    materials: ["Bambu premium", "Finishing modern"],
    dimensions: "Ukuran S/M/L/XL",
    weight: "100g",
    features: ["Desain modern", "Finishing tahan lama", "Versatile", "Premium feel"],
    isCustomizable: true,
    minOrder: 1,
  },
  {
    id: "prod-006",
    name: "Paket Custom Souvenir",
    slug: "paket-custom-souvenir",
    category: "custom",
    price: 450000,
    description: "Paket souvenir custom dengan logo branding untuk keperluan acara, pernikahan, atau korporat.",
    longDescription:
      "Jadikan acara Anda berkesan dengan souvenir anyaman bambu custom. Kami menerima pesanan dengan logo, nama, atau desain sesuai kebutuhan Anda. Cocok untuk pernikahan, seminar, ulang tahun perusahaan, dan berbagai event lainnya.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80"],
    badge: "Custom",
    inStock: true,
    rating: 5.0,
    reviewCount: 28,
    materials: ["Bambu pilihan", "Tali premium", "Pewarna custom"],
    dimensions: "Sesuai pesanan",
    weight: "Bervariasi",
    features: ["Logo branding", "Ukuran custom", "Warna custom", "Packaging eksklusif", "MOQ fleksibel"],
    isCustomizable: true,
    minOrder: 50,
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
