import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import { Zap, Truck, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Produk — Anyaman Bambu AR Rahman",
  description:
    "Temukan koleksi lengkap topi pantai dan peci anyaman bambu premium AR Rahman. Ready stock & custom order tersedia. Pengiriman ke seluruh Indonesia.",
};

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: "Custom Order",
    desc: "Ukuran, warna, dan logo sesuai kebutuhan",
  },
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
              Setiap produk dibuat dengan tangan oleh pengrajin lokal Tasikmalaya. Pilih dari koleksi ready
              stock atau pesan custom sesuai kebutuhan Anda.
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

      {/* Custom Order CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div
            className="p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border"
            style={{
              backgroundColor: "var(--color-surface-alt)",
              borderColor: "var(--color-surface-alt)",
            }}
          >
            <div>
              <h3
                className="font-display text-2xl md:text-3xl font-semibold mb-2"
                style={{ color: "var(--color-text-main)" }}
              >
                Butuh Pesanan Custom?
              </h3>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Kami menerima custom ukuran, warna, logo branding, dan kebutuhan souvenir/hampers.
              </p>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tanya%20tentang%20custom%20order%20anyaman%20bambu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Diskusi Custom Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
