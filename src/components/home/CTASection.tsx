import Link from "next/link";
import { MessageCircle, Store, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <p className="text-white/70 text-xs font-medium tracking-widest uppercase">
              Hubungi Kami
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white leading-tight">
              Ada Pertanyaan atau Ingin Pesan?
            </h2>
            <p className="text-white/75 text-base leading-relaxed">
              Tim kami siap membantu Anda menemukan produk yang tepat atau informasi kemitraan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-white transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                style={{ color: "var(--color-primary)" }}
              >
                <MessageCircle size={16} />
                Chat WhatsApp
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border-2 border-white/60 text-white transition-all hover:border-white hover:bg-white/10 active:scale-95"
              >
                <Store size={16} />
                Belanja Sekarang
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
