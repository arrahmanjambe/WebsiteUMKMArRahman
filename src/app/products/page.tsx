import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import { Zap, Truck, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Produk — Anyaman Bambu AR Rahman Jambe",
  description:
    "Temukan koleksi lengkap topi pantai dan peci anyaman bambu premium AR Rahman Jambe. Ready stock tersedia. Pengiriman ke seluruh Indonesia.",
};

const HIGHLIGHTS = [
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    desc: "Ready stock dikirim 1–3 hari kerja",
  },
  {
    icon: Shield,
    title: "Garansi Kualitas",
    desc: "Produk rusak akan kami ganti",
  },
];

export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "var(--color-surface)" }}>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="max-w-2xl">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              Koleksi Kami
            </p>
            <h1
              className="font-display text-5xl md:text-6xl font-medium leading-tight mb-4"
              style={{ color: "var(--color-text-main)" }}
            >
              Produk Anyaman Bambu
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Setiap produk dibuat dengan tangan oleh pengrajin lokal Tangerang. Pilih dari koleksi ready
              stock sesuai kebutuhan Anda.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mt-8">
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-surface-alt)",
                }}
              >
                <Icon size={14} style={{ color: "var(--color-primary)" }} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: "var(--color-text-main)" }}>
                    {title}
                  </p>
                  <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}
