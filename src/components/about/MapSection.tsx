import { MapPin } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function MapSection() {
  const { brand } = ABOUT_DATA;
  const { lat, lng } = brand.coordinates;

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--color-primary)" }}>
            Lokasi Kami
          </p>
          <h2 className="font-display text-4xl font-medium mb-3" style={{ color: "var(--color-text-main)" }}>
            Temukan Kami
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-sm" style={{ color: "var(--color-text-muted)" }}>
            <MapPin size={14} style={{ color: "var(--color-primary)" }} />
            {brand.location}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--color-surface-alt)" }}>
          <iframe
            title="Lokasi Anyaman Bambu AR Rahman"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            src={`https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Alamat Lengkap", value: brand.location },
            { label: "Hari Operasional", value: "Senin – Sabtu, 08.00 – 17.00 WIB" },
            { label: "Kunjungan Workshop", value: "Hubungi kami untuk jadwal kunjungan" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="p-4 rounded-xl border text-center"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-surface-alt)",
              }}
            >
              <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "var(--color-text-muted)" }}>
                {label}
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-main)" }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
