import type { Metadata } from "next";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Anyaman Bambu AR Rahman",
  description:
    "Temukan jawaban atas pertanyaan umum tentang produk anyaman bambu AR Rahman — pemesanan, pengiriman dan banyak lagi.",
};

export default function FAQPage() {
  return (
    <div style={{ backgroundColor: "var(--color-surface)" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center space-y-4">
          <p
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--color-primary)" }}
          >
            Bantuan
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-medium leading-tight"
            style={{ color: "var(--color-text-main)" }}
          >
            Pertanyaan Umum
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Tidak menemukan jawaban yang Anda cari? Tim kami siap membantu 7 hari seminggu.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <FAQAccordion />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div
            className="p-8 rounded-2xl text-center border"
            style={{
              backgroundColor: "var(--color-surface-alt)",
              borderColor: "var(--color-surface-alt)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--color-primary)20" }}
            >
              <MessageCircle size={22} style={{ color: "var(--color-primary)" }} />
            </div>
            <h3
              className="font-display text-2xl font-semibold mb-2"
              style={{ color: "var(--color-text-main)" }}
            >
              Masih ada pertanyaan?
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--color-text-muted)" }}>
              Chat langsung dengan tim kami di WhatsApp, kami akan membalas dengan cepat!
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <MessageCircle size={15} />
              Chat di WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
