import { MITRA_TYPES, MITRA_STEPS } from "@/data/mitra";
import { Check } from "lucide-react";

export default function MitraSystem() {
  return (
    <div className="space-y-20">
      {/* Partnership types */}
      <div>
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-2"
            style={{ color: "var(--color-primary)" }}
          >
            Paket Kemitraan
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-medium"
            style={{ color: "var(--color-text-main)" }}
          >
            Pilih Paket yang Tepat
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MITRA_TYPES.map((type, index) => (
            <div
              key={type.id}
              className={`p-7 rounded-2xl border flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg ${
                index === 1 ? "ring-2" : ""
              }`}
              style={{
                backgroundColor: index === 1 ? "var(--color-primary)" : "var(--color-surface)",
                borderColor: index === 1 ? "transparent" : "var(--color-surface-alt)",
                ["--tw-ring-color" as string]: "var(--color-primary)",
              }}
            >
              <div className="text-3xl mb-4">{type.icon}</div>
              <h3
                className="font-display text-2xl font-semibold mb-2"
                style={{ color: index === 1 ? "#fff" : "var(--color-text-main)" }}
              >
                {type.title}
              </h3>
              {type.commission && (
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: index === 1 ? "rgba(255,255,255,0.7)" : "var(--color-secondary)" }}
                >
                  Margin {type.commission}
                </p>
              )}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: index === 1 ? "rgba(255,255,255,0.8)" : "var(--color-text-muted)" }}
              >
                {type.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {type.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: index === 1 ? "rgba(255,255,255,0.9)" : "var(--color-primary)" }}
                    />
                    <span style={{ color: index === 1 ? "rgba(255,255,255,0.85)" : "var(--color-text-muted)" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              {type.minOrder && (
                <p
                  className="text-xs mt-auto"
                  style={{ color: index === 1 ? "rgba(255,255,255,0.65)" : "var(--color-text-muted)" }}
                >
                  Min. Order: {type.minOrder}
                </p>
              )}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block text-center py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                style={
                  index === 1
                    ? { backgroundColor: "#fff", color: "var(--color-primary)" }
                    : {
                        backgroundColor: "var(--color-primary)",
                        color: "#fff",
                      }
                }
              >
                Daftar Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div>
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-2"
            style={{ color: "var(--color-secondary)" }}
          >
            Cara Bergabung
          </p>
          <h2
            className="font-display text-4xl font-medium"
            style={{ color: "var(--color-text-main)" }}
          >
            Mulai dalam 4 Langkah
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MITRA_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl border"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-surface-alt)",
              }}
            >
              <p
                className="font-display text-5xl font-bold opacity-15 mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                {step.step}
              </p>
              <h3
                className="font-display text-lg font-semibold mb-2"
                style={{ color: "var(--color-text-main)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
