"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Globe, Leaf } from "lucide-react";
import { useEffect, useRef } from "react";

const BADGES = [
  { icon: Leaf, text: "100% Alami" },
  { icon: Globe, text: "Ekspor Global" },
  { icon: Award, text: "UNESCO Featured" },
];

export default function HeroSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        {/* FIX: hero-blob class hides these on mobile — blur-3xl on 600px+ elements
            was extremely expensive on mobile GPU (large filter radius + compositing layer) */}
        <div
          className="hero-blob absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="hero-blob absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl"
          style={{ backgroundColor: "var(--color-tertiary)" }}
        />
        {/* Bamboo grid — static, no cost */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, var(--color-text-main) 0px, transparent 1px, transparent 48px, var(--color-text-main) 49px), repeating-linear-gradient(90deg, var(--color-text-main) 0px, transparent 1px, transparent 48px, var(--color-text-main) 49px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text content */}
        <div className="space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-wide"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
              backgroundColor: "var(--color-primary)15",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Kerajinan Bambu Tangerang · Sejak 2018
          </div>

          {/* Heading */}
          <h1
            className="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.05] font-medium"
            style={{ color: "var(--color-text-main)" }}
          >
            Tradisi
            <br />
            <em className="not-italic" style={{ color: "var(--color-primary)" }}>Anyaman</em>
            <br />
            dari Alam
          </h1>

          <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: "var(--color-text-muted)" }}>
            Topi pantai dan peci berbahan bambu alami, dibuat tangan oleh pengrajin lokal Tangerang.
            Ramah lingkungan, tahan lama, dan penuh cerita.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-[transform,opacity] hover:scale-105 hover:shadow-lg active:scale-[0.98]"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Lihat Produk
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-colors hover:bg-[var(--color-surface-alt)]"
              style={{
                borderColor: "var(--color-text-muted)",
                color: "var(--color-text-main)",
              }}
            >
              Tentang Kami
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {BADGES.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  backgroundColor: "var(--color-surface-alt)",
                  color: "var(--color-text-muted)",
                }}
              >
                <Icon size={12} style={{ color: "var(--color-primary)" }} />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Image mosaic */}
        <div className="relative h-[480px] lg:h-[560px]">
          {/* Main image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?w=800&q=80"
              alt="Topi anyaman bambu premium AR Rahman"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, var(--color-primary-dark)40, transparent 60%)`,
              }}
            />
          </div>

          {/* Floating card — stat */}
          <div
            className="absolute -bottom-5 -left-5 p-4 rounded-2xl shadow-xl border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-surface-alt)",
            }}
          >
            <p className="font-display text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
              10K+
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
              Produk Terjual
            </p>
          </div>

          {/* Floating card — review */}
          <div
            className="absolute -top-5 -right-5 p-4 rounded-2xl shadow-xl border max-w-[160px]"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-surface-alt)",
            }}
          >
            <div className="flex gap-0.5 mb-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-yellow-400 text-xs">{s}</span>
              ))}
            </div>
            <p className="text-xs leading-snug" style={{ color: "var(--color-text-muted)" }}>
              "Kualitas luar biasa, pengiriman cepat!"
            </p>
            <p className="text-[10px] mt-1 font-medium" style={{ color: "var(--color-text-main)" }}>
              — Pelanggan Setia
            </p>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        className="w-full overflow-hidden border-y py-3"
        style={{
          borderColor: "var(--color-surface-alt)",
          backgroundColor: "var(--color-surface-alt)",
          contain: "layout",
        }}
      >
        {/* FIX: marquee-track promotes to GPU compositor layer via will-change:transform */}
        <div className="marquee-track flex animate-marquee whitespace-nowrap gap-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-0 flex-shrink-0" aria-hidden={i === 1}>
              {[
                "🎋 Anyaman Tradisional",
                "🌿 100% Ramah Lingkungan",
                "✈️ Ekspor ke 5 Negara",
                "🏆 UNESCO Creative Cities Featured",
                "🎓 Workshop & Pelatihan",
                "✂️ Custom Order Tersedia",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-8 text-xs font-medium tracking-wide"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item}
                  <span className="ml-8 opacity-30">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
