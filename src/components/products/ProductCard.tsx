"use client";

import Image from "next/image";
import { ShoppingBag, Star, Zap } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addItem, openCart } = useCart();

  const handleAdd = () => {
    addItem(product);
    openCart();
  };

  return (
    <article
      className="group rounded-2xl overflow-hidden border flex flex-col transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-surface-alt)",
        contain: "layout style",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        {product.badge && (
          <span
            className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold rounded-full text-white z-10"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              Stok Habis
            </span>
          </div>
        )}
        {/* {product.isCustomizable && (
          <div
            className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--color-tertiary)" }}
            title="Bisa Custom"
          >
            <Zap size={12} className="text-white" />
          </div>
        )} */}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--color-text-muted)" }}>
          {product.category}
        </p>
        <h3 className="font-display text-xl font-medium mb-1.5 leading-snug" style={{ color: "var(--color-text-main)" }}>
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2 flex-1 mb-3" style={{ color: "var(--color-text-muted)" }}>
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs font-medium" style={{ color: "var(--color-text-main)" }}>
            {product.rating}
          </span>
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            ({product.reviewCount})
          </span>
        </div>

        {/* Price & Add */}
        <div
          className="flex items-center justify-between pt-4 border-t"
          style={{ borderColor: "var(--color-surface-alt)" }}
        >
          <div>
            <p className="font-display text-2xl font-semibold" style={{ color: "var(--color-text-main)" }}>
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-xs line-through -mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {formatPrice(product.originalPrice)}
              </p>
            )}
            {product.minOrder > 1 && (
              <p className="text-[10px] mt-0.5" style={{ color: "var(--color-secondary)" }}>
                Min. order {product.minOrder} pcs
              </p>
            )}
          </div>
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-[transform,opacity] hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{ backgroundColor: "var(--color-primary)" }}
            aria-label={`Tambah ${product.name} ke keranjang`}
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
