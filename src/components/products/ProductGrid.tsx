"use client";

import { useState } from "react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {PRODUCT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === cat.id
                ? "text-white shadow-md"
                : "border hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            )}
            style={
              activeCategory === cat.id
                ? { backgroundColor: "var(--color-primary)", borderColor: "transparent" }
                : {
                    borderColor: "var(--color-surface-alt)",
                    color: "var(--color-text-muted)",
                    backgroundColor: "var(--color-surface)",
                  }
            }
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🎋</p>
          <p className="font-display text-xl" style={{ color: "var(--color-text-muted)" }}>
            Tidak ada produk di kategori ini
          </p>
        </div>
      )}
    </div>
  );
}
