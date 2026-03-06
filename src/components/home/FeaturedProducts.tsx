"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import { PRODUCTS, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

const FEATURED = PRODUCTS.slice(0, 3);

export default function FeaturedProducts() {
  const { addItem, openCart } = useCart();

  const handleAdd = (product: (typeof PRODUCTS)[0]) => {
    addItem(product);
    openCart();
  };

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              Koleksi Pilihan
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-medium leading-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              Produk Unggulan
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:gap-2.5"
            style={{ color: "var(--color-primary)" }}
          >
            Lihat Semua
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((product, index) => (
            <article
              key={product.id}
              className="group rounded-2xl overflow-hidden border flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-surface-alt)",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold rounded-full text-white"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p
                  className="text-xs tracking-wide uppercase mb-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {product.category}
                </p>
                <h3
                  className="font-display text-xl font-medium mb-2"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm leading-relaxed line-clamp-2 flex-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {product.description}
                </p>

                <div className="flex items-center gap-1.5 mt-3">
                  <Star size={12} fill="currentColor" className="text-yellow-400" />
                  <span className="text-xs font-medium" style={{ color: "var(--color-text-main)" }}>
                    {product.rating}
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    ({product.reviewCount} ulasan)
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t" style={{ borderColor: "var(--color-surface-alt)" }}>
                  <div>
                    <p className="font-display text-2xl font-semibold" style={{ color: "var(--color-text-main)" }}>
                      {formatPrice(product.price)}
                    </p>
                    {product.originalPrice && (
                      <p className="text-xs line-through" style={{ color: "var(--color-text-muted)" }}>
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleAdd(product)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-label={`Tambah ${product.name} ke keranjang`}
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
