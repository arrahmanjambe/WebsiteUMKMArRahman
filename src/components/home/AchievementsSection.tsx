import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function AchievementsSection() {
  const { unesco, workshops } = ABOUT_DATA;
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* UNESCO */}
          <div className="space-y-6">
            <div>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-2"
                style={{ color: "var(--color-secondary)" }}
              >
                Diakui Dunia
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-medium leading-tight"
                style={{ color: "var(--color-text-main)" }}
              >
                {unesco.title}
              </h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {unesco.description}
            </p>
            <ul className="space-y-3">
              {unesco.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[var(--color-primary)]/15 flex-shrink-0 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "var(--color-primary)" }}
            >
              Pelajari Lebih Lanjut
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Image + workshop stats */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={unesco.image}
                alt="UNESCO Creative Cities Network visit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--color-primary-dark)80, transparent 50%)" }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-medium opacity-80">
                  UNESCO Creative Cities Network · {unesco.year}
                </p>
              </div>
            </div>

            {/* Workshop mini cards */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface-alt)" }}
              >
                <p className="font-display text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
                  {workshops.length}+
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                  Workshop Digelar
                </p>
              </div>
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface-alt)" }}
              >
                <p className="font-display text-3xl font-bold" style={{ color: "var(--color-secondary)" }}>
                  {workshops[0]?.participants}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
