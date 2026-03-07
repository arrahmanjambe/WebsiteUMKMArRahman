import Image from "next/image";
import { Globe } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function UNESCOSection() {
  const { unesco } = ABOUT_DATA;
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={18} className="opacity-80" />
              <span className="text-xs font-medium tracking-widest uppercase opacity-75">
                Perhatian Internasional
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
              {unesco.title}
            </h2>
            <p className="text-base leading-relaxed text-white/80">
              {unesco.description}
            </p>
            <ul className="space-y-3">
              {unesco.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 w-4 h-4 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="inline-block px-4 py-2 rounded-full border border-white/30 text-sm text-white/70">
              {unesco.year} · UNESCO Creative Cities Network
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={unesco.image}
              alt="UNESCO Creative Cities Network"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
