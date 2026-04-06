import type { Metadata } from "next";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrahman-bambu.id"),
  title: {
    default: "Anyaman Bambu AR Rahman Jambe — Kerajinan Bambu Premium Tangerang",
    template: "%s | Anyaman Bambu AR Rahman Jambe",
  },
  description:
    "Kerajinan anyaman bambu tradisional premium dari Tangerang, Jawa Barat. Topi Lutfy, Koboy, Pedora dan Peci. Ramah lingkungan, buatan tangan.",
  keywords: [
    "anyaman bambu",
    "desa jambe",
    "tangerang",
    "jambe",
    "ancol pasir",
    "topi bambu",
    "koboy bambu",
    "pedora bambu",
    "lutfy bambu",
    "topi pantai bambu",
    "peci bambu",
    "kerajinan Tangerang",
    "souvenir bambu",
    "kerajinan lokal",
    "ar rahman jambe bambu",
    "bambu anyaman",
    "UMKM Tangerang",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://arrahman-bambu.id",
    siteName: "Anyaman Bambu AR Rahman Jambe",
    title: "Anyaman Bambu AR Rahman Jambe — Kerajinan Bambu Premium Tangerang",
    description:
      "Kerajinan anyaman bambu tradisional premium dari Tangerang, Jawa Barat. Ramah lingkungan, buatan tangan, ekspor global.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Anyaman Bambu AR Rahman Jambe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyaman Bambu AR Rahman Jambe",
    description: "Kerajinan anyaman bambu tradisional premium dari Tangerang.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://arrahman-bambu.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preconnect before any font requests */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* display=swap: text visible immediately with fallback font, no FOIT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
        {/* Viewport meta hint for mobile rendering */}
        <meta name="theme-color" content="#4A7C59" />
      </head>
      <body className="grain-overlay">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
