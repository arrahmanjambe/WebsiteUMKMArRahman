import { ABOUT_DATA } from "@/data/about";
import { Target, Eye } from "lucide-react";

export default function MissionSection() {
  const { brand, services } = ABOUT_DATA;
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div
            className="p-8 rounded-2xl border"
            style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface-alt)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: "var(--color-primary)20" }}
            >
              <Eye size={20} style={{ color: "var(--color-primary)" }} />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "var(--color-text-main)" }}>
              Visi
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {brand.vision}
            </p>
          </div>
          <div
            className="p-8 rounded-2xl border"
            style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface-alt)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: "var(--color-secondary)20" }}
            >
              <Target size={20} style={{ color: "var(--color-secondary)" }} />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "var(--color-text-main)" }}>
              Misi
            </h3>
            <ul className="space-y-2.5">
              {brand.mission.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services / Jasa */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--color-primary)" }}>
              Layanan Kami
            </p>
            <h2 className="font-display text-4xl font-medium" style={{ color: "var(--color-text-main)" }}>
              Jasa & Layanan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="p-7 rounded-2xl border group hover:-translate-y-1 transition-transform"
                style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-surface-alt)" }}
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--color-text-main)" }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                  {svc.description}
                </p>
                <ul className="space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                      <span style={{ color: "var(--color-primary)" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
