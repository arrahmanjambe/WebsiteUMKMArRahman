"use client";

import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartSidebar() {
  const { state, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  const handleWhatsApp = () => {
    const items = state.items
      .map((i) => `• ${i.product.name} x${i.quantity} = ${formatPrice(i.product.price * i.quantity)}`)
      .join("\n");
    const msg = encodeURIComponent(
      `Halo, saya ingin memesan:\n\n${items}\n\n*Total: ${formatPrice(totalPrice)}*\n\nMohon konfirmasi ketersediaan stok. Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-[80] transition-opacity duration-300 ${
          state.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[var(--color-surface)] z-[90] flex flex-col shadow-2xl transition-transform duration-300 will-change-transform ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-surface-alt)]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} style={{ color: "var(--color-primary)" }} />
            <h2 className="font-display text-xl font-semibold" style={{ color: "var(--color-text-main)" }}>
              Keranjang
            </h2>
            {totalItems > 0 && (
              <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full hover:bg-[var(--color-surface-alt)] flex items-center justify-center transition-colors"
          >
            <X size={16} style={{ color: "var(--color-text-muted)" }} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div
                className="w-16 h-16 rounded-full bg-[var(--color-surface-alt)] flex items-center justify-center"
              >
                <ShoppingBag size={24} style={{ color: "var(--color-text-muted)" }} />
              </div>
              <div>
                <p className="font-medium" style={{ color: "var(--color-text-main)" }}>
                  Keranjang kosong
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
                  Mulai belanja produk anyaman kami
                </p>
              </div>
              <Link
                href="/products"
                onClick={closeCart}
                className="mt-2 text-sm font-medium text-[var(--color-primary)] underline underline-offset-2"
              >
                Lihat Produk
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {state.items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-[var(--color-surface-alt)] rounded-xl"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {item.product.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-primary)" }}>
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-[var(--color-surface)] rounded-lg px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="hover:text-[var(--color-primary)] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-semibold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="hover:text-[var(--color-primary)] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="p-5 border-t border-[var(--color-surface-alt)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Total ({totalItems} item)
              </span>
              <span className="font-display text-xl font-semibold" style={{ color: "var(--color-text-main)" }}>
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Pesan via WhatsApp
            </button>
            <p className="text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
              Atau cek marketplace kami
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
