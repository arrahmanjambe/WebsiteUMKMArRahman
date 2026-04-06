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
  // { id: "custom", name: "Custom Order", description: "Pesanan sesuai kebutuhan" },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-001",
    name: "Topi Fedora",
    slug: "topi-fedora",
    category: "topi",
    price: 100000,
    description:
      "Topi fedora anyaman bambu dengan siluet klasik dan aksen list hitam elegan.",
    longDescription:
      "Dirancang dengan siluet klasik yang tak lekang oleh waktu, topi ini menampilkan anyaman bambu dengan rona emas alami yang hangat. Dipadukan dengan aksen list hitam yang memberikan kontras modern, serta ventilasi alami yang menjaga kepala tetap sejuk saat digunakan dalam berbagai aktivitas outdoor.",
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456093/Pedora_2_whpcx0.png",
    images: ["https://res.cloudinary.com/dpctuucy8/image/upload/v1775456093/Pedora_2_whpcx0.png"],
    badge: "",
    inStock: true,
    rating: 4.8,
    reviewCount: 10,
    materials: ["Serat bambu alami"],
    dimensions: "Brim 5-6 cm, Crown 11 cm, Diameter 20 cm",
    weight: "180g",
    features: [
      "Desain fedora klasik",
      "Anyaman bambu premium",
      "Ventilasi alami",
      "Handmade",
      "Ringan & kuat",
    ],
    isCustomizable: false,
    minOrder: 1,
  },

  {
    id: "prod-002",
    name: "Topi Koboy",
    slug: "topi-koboy",
    category: "topi",
    price: 100000,
    description:
      "Topi koboy anyaman bambu dengan karakter kuat dan gaya western klasik.",
    longDescription:
      "Topi ini menghadirkan siluet western klasik dengan anyaman bambu berwarna madu alami. Struktur kokoh namun ringan, dilengkapi aksen list hitam yang mempertegas karakter petualang. Cocok untuk aktivitas outdoor maupun gaya urban yang berani.",
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456099/Koboi_1_qqgk7d.png",
    images: ["https://res.cloudinary.com/dpctuucy8/image/upload/v1775456099/Koboi_1_qqgk7d.png"],
    badge: "",
    inStock: true,
    rating: 4.7,
    reviewCount: 8,
    materials: ["Bambu keras pilihan"],
    dimensions: "Brim 9 cm, Crown 11 cm, Diameter 20 cm",
    weight: "200g",
    features: [
      "Siluet western klasik",
      "Struktur kuat & tahan lama",
      "Ventilasi alami",
      "Handmade",
      "Detail premium (eyelet & list hitam)",
    ],
    isCustomizable: false,
    minOrder: 1,
  },

  {
    id: "prod-003",
    name: "Topi Lutfy",
    slug: "topi-lutfy",
    category: "topi",
    price: 100000,
    description:
      "Topi anyaman bambu dengan brim lebar dan aksen merah yang mencolok.",
    longDescription:
      "Topi ini hadir dengan siluet brim lebar yang memberikan perlindungan maksimal dari sinar matahari. Anyaman bambu alami dipadukan dengan aksen merah yang berani, menciptakan tampilan ceria dan elegan sekaligus.",
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456095/Lutfi_1_ftztau.png",
    images: ["https://res.cloudinary.com/dpctuucy8/image/upload/v1775456095/Lutfi_1_ftztau.png"],
    badge: "",
    inStock: true,
    rating: 4.9,
    reviewCount: 6,
    materials: ["Bambu alami"],
    dimensions: "Brim 10 cm, Crown 11 cm, Diameter 20 cm",
    weight: "210g",
    features: [
      "Brim lebar",
      "Aksen merah unik",
      "Ringan & breathable",
      "Handmade",
      "Fashion statement",
    ],
    isCustomizable: false,
    minOrder: 1,
  },

  {
    id: "prod-004",
    name: "Peci Bambu Premium",
    slug: "peci-bambu-premium",
    category: "peci",
    price: 100000,
    description:
      "Peci bambu dengan kombinasi anyaman alami dan lapisan bludru elegan.",
    longDescription:
      "Peci ini memadukan anyaman bambu alami dengan bludru hitam premium, menciptakan keseimbangan antara tradisi dan modernitas. Ringan, breathable, dan nyaman digunakan untuk berbagai acara formal maupun ibadah.",
    image: "https://res.cloudinary.com/dpctuucy8/image/upload/v1775456100/Peci_2_rv2u0r.png",
    images: ["https://res.cloudinary.com/dpctuucy8/image/upload/v1775456100/Peci_2_rv2u0r.png"],
    badge: "",
    inStock: true,
    rating: 4.8,
    reviewCount: 15,
    materials: ["Bambu alami", "Bludru premium"],
    dimensions: "Tinggi 9 cm, Diameter 20 cm",
    weight: "100g",
    features: [
      "Kombinasi bambu & bludru",
      "Nyaman & adem",
      "Handmade",
      "Cocok formal & religi",
      "Desain elegan",
    ],
    isCustomizable: false,
    minOrder: 1,
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
