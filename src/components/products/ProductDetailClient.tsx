"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  MessageCircle,
  Star,
  Shield,
  Truck,
  RotateCcw,
  ChevronRight,
  Plus,
  Minus,
  Check,
  Share2,
} from "lucide-react";
import { Product, formatPrice, getRelatedProducts, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, waLink } from "@/data/site";

type Props = { product: Product };

export default function ProductDetailClient({ product }: Props) {
  const { addItem, openCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"deskripsi" | "spesifikasi">("deskripsi");
  const [copied, setCopied] = useState(false);

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };

  const handleBuyNow = () => {
    const total = product.price * quantity;
    const message = `
  Halo, saya ingin memesan produk berikut:

  🛍️ *${product.name}*
  📦 Jumlah: ${quantity}
  💰 Harga: ${formatPrice(product.price)}
  🧾 Total: ${formatPrice(total)}

  Link produk:
  ${window.location.href}

  Mohon info ketersediaan ya, terima kasih 🙏
    `;

    window.open(waLink(message), "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const stars = Array.from({ length: 5 });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-surface)" }}>

      {/* ── BREADCRUMB ── */}
      <div className="border-b" style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center gap-1.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
          <Link href="/" className="hover:text-[#4A7C59] transition-colors">Beranda</Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-[#4A7C59] transition-colors">Produk</Link>
          <ChevronRight size={12} />
          <Link href={`/products?cat=${product.category}`} className="hover:text-[#4A7C59] transition-colors">
            {product.categoryLabel}
          </Link>
          <ChevronRight size={12} />
          <span className="truncate max-w-[160px] text-[#1C1C1C]">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6">

        {/* ══════════════════════════════════════════
            TOP SECTION: Gallery + Product Info
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_1fr] gap-8">

          {/* ── LEFT: IMAGE GALLERY ── */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div
              className="relative w-full aspect-square rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--color-surface-alt)" }}
            >
              <Image
                src={product.images[activeImage]}
                alt={`${product.name} — foto ${activeImage + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority
              />
              {product.badge && (
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-full text-white uppercase tracking-wide z-10"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                      activeImage === i
                        ? "border-[#4A7C59] scale-105"
                        : "border-transparent hover:border-[#6B9E78]"
                    )}
                    aria-label={`Foto ${i + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-xs self-start px-3 py-1.5 rounded-full border transition-colors hover:bg-[#F0EBE0]"
              style={{ borderColor: "var(--color-surface-alt)", color: "var(--color-text-muted)" }}
            >
              {copied ? <Check size={13} className="text-[#4A7C59]" /> : <Share2 size={13} />}
              {copied ? "Link disalin!" : "Bagikan produk"}
            </button>
          </div>

          {/* ── RIGHT: PRODUCT INFO ── */}
          <div className="flex flex-col gap-5">

            {/* Name */}
            <div>
              <p className="text-xs font-medium tracking-widest uppercase mb-1.5" style={{ color: "var(--color-primary)" }}>
                {product.categoryLabel}
              </p>
              <h1
                className="font-display text-2xl md:text-3xl font-semibold leading-tight"
                style={{ color: "var(--color-text-main)" }}
              >
                {product.name}
              </h1>
            </div>

            {/* Rating row */}
            <div className="flex items-center gap-3 pb-4 border-b" style={{ borderColor: "var(--color-surface-alt)" }}>
              <div className="flex items-center gap-1">
                {stars.map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? "#F5A623" : "none"}
                    stroke={i < Math.floor(product.rating) ? "#F5A623" : "#D1D5DB"}
                  />
                ))}
                <span className="ml-1 text-sm font-semibold text-[#F5A623]">{product.rating}</span>
              </div>
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                {product.reviewCount.toLocaleString("id-ID")} Penilaian
              </span>
              <span className="w-px h-4 bg-gray-200" />
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                {product.isCustomizable ? "Bisa Custom" : "Tidak Bisa Custom"}
              </span>
            </div>

            {/* Price */}
            <div
              className="flex items-baseline gap-3 px-4 py-4 rounded-xl"
              style={{ backgroundColor: "var(--color-surface-alt)" }}
            >
              <span className="font-display text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-base line-through" style={{ color: "var(--color-text-muted)" }}>
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Shipping & Guarantee */}
            <div className="flex flex-col gap-2.5">
              {[
                { icon: Truck, text: product.shippingNote },
                { icon: Shield, text: product.guarantee },
                { icon: RotateCcw, text: "Bebas retur jika produk tidak sesuai deskripsi" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <p className="text-sm font-semibold" style={{ color: "var(--color-text-main)" }}>
                Jumlah
              </p>
              <div
                className="flex items-center gap-0 rounded-xl overflow-hidden border"
                style={{ borderColor: "var(--color-surface-alt)" }}
              >
                <button
                  onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center hover:bg-[#F0EBE0] transition-colors"
                  style={{ color: "var(--color-text-main)" }}
                  aria-label="Kurangi"
                >
                  <Minus size={14} />
                </button>
                <span
                  className="w-10 text-center text-sm font-semibold select-none"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-[#F0EBE0] transition-colors"
                  style={{ color: "var(--color-text-main)" }}
                  aria-label="Tambah"
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                {product.inStock ? "Stok tersedia" : "Stok habis"}
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <span>Subtotal:</span>
              <span className="font-display text-xl font-bold" style={{ color: "var(--color-text-main)" }}>
                {formatPrice(product.price * quantity)}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-1">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 text-sm font-semibold transition-all hover:bg-[#4A7C59]/5 active:scale-[0.98] disabled:opacity-40"
                style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
              >
                <ShoppingBag size={16} />
                Masukkan Keranjang
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-40"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <MessageCircle size={16} />
                Beli via WhatsApp
              </button>
            </div>

            {/* Shop card */}
            <div
              className="flex items-center justify-between p-4 rounded-xl border mt-1"
              style={{ borderColor: "var(--color-surface-alt)", backgroundColor: "var(--color-surface-alt)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-lg"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  AR
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-main)" }}>
                    {SITE_CONFIG.brandName}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    Pengrajin lokal · Tasikmalaya, Jawa Barat
                  </p>
                </div>
              </div>
              <a
                href={waLink(`Halo, saya ingin tanya tentang produk Anda yaitu ${product.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors hover:bg-[#4A7C59] hover:text-white hover:border-[#4A7C59]"
                style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
              >
                Chat Toko
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            TABS: Deskripsi & Spesifikasi
        ══════════════════════════════════════════ */}
        <div className="mt-8 rounded-2xl border overflow-hidden" style={{ borderColor: "var(--color-surface-alt)" }}>
          {/* Tab nav */}
          <div className="flex border-b" style={{ borderColor: "var(--color-surface-alt)", backgroundColor: "var(--color-surface)" }}>
            {(["deskripsi", "spesifikasi"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 py-4 text-sm font-semibold capitalize transition-colors relative",
                  activeTab === tab
                    ? "text-[#4A7C59]"
                    : "text-[#6B6560] hover:text-[#1C1C1C]"
                )}
              >
                {tab === "deskripsi" ? "Deskripsi Produk" : "Spesifikasi"}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A7C59]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6 md:p-8" style={{ backgroundColor: "var(--color-surface)" }}>
            {activeTab === "deskripsi" && (
              <div className="space-y-6 max-w-3xl">
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {product.longDescription}
                </p>
                {product.detailSections.map((section) => (
                  <div key={section.title}>
                    <h3
                      className="font-display text-lg font-semibold mb-2"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {section.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {section.content}
                    </p>
                  </div>
                ))}
                {product.recommendations.map((rec) => (
                  <div key={rec.title}>
                    <h3
                      className="font-display text-lg font-semibold mb-2"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {rec.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {rec.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-primary)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "spesifikasi" && (
              <div className="max-w-lg">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 0 ? "bg-[var(--color-surface-alt)]" : ""}
                      >
                        <td
                          className="py-3 px-4 font-medium w-40 rounded-l-lg"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {spec.label}
                        </td>
                        <td
                          className="py-3 px-4 rounded-r-lg"
                          style={{ color: "var(--color-text-main)" }}
                        >
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            PRODUK TERKAIT
        ══════════════════════════════════════════ */}
        {related.length > 0 && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-5">
              <h2
                className="font-display text-2xl font-semibold"
                style={{ color: "var(--color-text-main)" }}
              >
                Produk Serupa
              </h2>
              <Link
                href={`/products?cat=${product.category}`}
                className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                style={{ color: "var(--color-primary)" }}
              >
                Lihat Semua <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Include current product's category peers + fill from all if needed */}
              {(related.length > 0 ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 4))
                .slice(0, 4)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="group rounded-xl border overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
                    style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface-alt)" }}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p
                        className="text-sm font-medium line-clamp-2 leading-snug"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {p.name}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={10} fill="#F5A623" stroke="#F5A623" />
                        <span className="text-xs text-[#F5A623] font-medium">{p.rating}</span>
                      </div>
                      <p
                        className="font-display text-base font-bold mt-1"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {formatPrice(p.price)}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
