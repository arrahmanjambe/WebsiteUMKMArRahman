"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import ColorPaletteSelector from "./ColorPaletteSelector";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/kemitraan", label: "Kemitraan" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--color-surface)]/95 navbar-blur backdrop-blur-sm shadow-sm border-b border-[var(--color-surface-alt)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Leaf size={16} strokeWidth={2} />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-display text-lg font-semibold tracking-tight"
                style={{ color: "var(--color-text-main)" }}
              >
                AR Rahman
              </span>
              <span
                className="text-[10px] font-body tracking-widest uppercase"
                style={{ color: "var(--color-text-muted)" }}
              >
                Anyaman Bambu
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-body tracking-wide relative after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[var(--color-primary)] after:transition-all hover:after:w-full",
                    pathname === link.href
                      ? "text-[var(--color-primary)] font-medium after:w-full"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ColorPaletteSelector />
            <button
              onClick={toggleCart}
              className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--color-surface-alt)] transition-colors"
              aria-label="Buka keranjang"
            >
              <ShoppingBag size={18} style={{ color: "var(--color-text-main)" }} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[var(--color-primary)] text-white text-[10px] font-bold rounded-full flex items-center justify-center min-w-[18px] min-h-[18px]">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--color-surface-alt)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={18} style={{ color: "var(--color-text-main)" }} />
              ) : (
                <Menu size={18} style={{ color: "var(--color-text-main)" }} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-surface-alt)] transition-all duration-300 shadow-lg",
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-6 py-3.5 text-sm font-medium font-body transition-colors",
                    pathname === link.href
                      ? "text-[var(--color-primary)] bg-[var(--color-surface-alt)]"
                      : "text-[var(--color-text-main)] hover:bg-[var(--color-surface-alt)]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
