import type { Metadata } from "next";
import MitraSystem from "@/components/kemitraan/MitraSystem";
import MitraCard from "@/components/kemitraan/MitraCard";
import { MITRA_LIST } from "@/data/mitra";

export const metadata: Metadata = {
  title: "Kemitraan — Anyaman Bambu AR Rahman",
  description:
    "Bergabunglah sebagai mitra reseller, distributor, atau korporat Anyaman Bambu AR Rahman. Dapatkan harga khusus dan dukungan pemasaran penuh.",
};

export default function KemitraanPage() {
  return (
    <div style={{ backgroundColor: "var(--color-surface)" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, var(--color-primary) 0px, transparent 1px, transparent 24px, var(--color-primary) 25px)`,
          }}
        />
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center space-y-5">
          <p
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Kemitraan
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05]"
            style={{ color: "var(--color-text-main)" }}
          >
            Tumbuh Bersama Kami
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Bergabung dalam jaringan mitra AR Rahman dan dapatkan keuntungan eksklusif dari produk
            anyaman bambu premium yang dicintai pelanggan di seluruh Indonesia hingga mancanegara.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20menjadi%20mitra%20Anyaman%20Bambu%20AR%20Rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Daftar Menjadi Mitra
          </a>
        </div>
      </section>

      {/* Partnership system */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <MitraSystem />
        </div>
      </section>

      {/* Existing partners */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-2"
              style={{ color: "var(--color-secondary)" }}
            >
              Jaringan Mitra
            </p>
            <h2
              className="font-display text-4xl font-medium"
              style={{ color: "var(--color-text-main)" }}
            >
              Mitra Aktif Kami
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
              {MITRA_LIST.length}+ mitra aktif dari seluruh Indonesia hingga mancanegara
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MITRA_LIST.map((mitra) => (
              <MitraCard key={mitra.id} mitra={mitra} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center space-y-5">
          <h2
            className="font-display text-4xl font-medium"
            style={{ color: "var(--color-text-main)" }}
          >
            Siap Bergabung?
          </h2>
          <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
            Hubungi kami sekarang dan mulai perjalanan kemitraan Anda bersama Anyaman Bambu AR Rahman.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Chat WhatsApp
            </a>
            <a
              href="mailto:hello@arrahman-bambu.id"
              className="px-8 py-3 rounded-full text-sm font-semibold border transition-all hover:bg-[var(--color-surface-alt)]"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              Kirim Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
