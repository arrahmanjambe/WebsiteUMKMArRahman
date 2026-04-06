import Link from "next/link";
import { Leaf, MapPin, Phone, Mail, Instagram, Youtube } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Navigasi",
    links: [
      { href: "/", label: "Beranda" },
      { href: "/products", label: "Produk" },
      { href: "/about", label: "Tentang Kami" },
      // { href: "/kemitraan", label: "Kemitraan" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Produk",
    links: [
      { href: "/products?cat=topi", label: "Topi Pantai" },
      { href: "/products?cat=peci", label: "Peci" },
      // { href: "/products?cat=custom", label: "Custom Order" },
      // { href: "/kemitraan", label: "Jadi Reseller" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-surface-alt)",
        borderColor: "var(--color-surface-alt)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <Leaf size={16} />
              </div>
              <div>
                <p className="font-display text-lg font-semibold" style={{ color: "var(--color-text-main)" }}>
                  AR Rahman
                </p>
                <p
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Anyaman Bambu
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--color-text-muted)" }}>
              Kerajinan anyaman bambu tradisional dari Tangerang, Jawa Barat. Dibuat dengan tangan oleh
              pengrajin lokal, untuk dunia.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/arrahmanjambe_" },
                { icon: Youtube, label: "YouTube", href: "https://youtube.com/@ArRahmanJambe" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  style={{
                    borderColor: "var(--color-text-muted)",
                    color: "var(--color-text-muted)",
                  }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--color-text-main)" }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[var(--color-primary)]"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div
          className="mt-12 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 gap-4"
          style={{ borderColor: "var(--color-surface-alt)" }}
        >
          {[
            {
              icon: MapPin,
              text: "Desa Ancol Pasir, Kec. Jambe, Tangerang, Banten",
              href: "https://goo.gl/maps/your-location-link",
            },
            {
              icon: Phone,
              text: "+62 895-4119-07532",
              href: "https://wa.me/62895411907532",
            },
            {
              icon: Mail,
              text: "arrahmanjambe@gmail.com",
              href: "mailto:arrahmanjambe@gmail.com",
            },
          ].map(({ icon: Icon, text, href }) => (
            <div key={text} className="flex items-start gap-2.5">
              <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
              {href ? (
                <a
                  href={href}
                  className="text-xs leading-relaxed hover:text-[var(--color-primary)] transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {text}
                </a>
              ) : (
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "var(--color-surface-alt)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Anyaman Bambu AR Rahman. Hak cipta dilindungi.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Dibuat bersama dengan Universitas Prasetiya Mulya
          </p>
        </div>
      </div>
    </footer>
  );
}
