import { MapPin, Calendar } from "lucide-react";
import { Mitra } from "@/data/mitra";

const TYPE_LABELS: Record<Mitra["type"], string> = {
  distributor: "Distributor",
  retailer: "Retailer",
  reseller: "Reseller",
  corporate: "Korporat",
};

type Props = { mitra: Mitra };

export default function MitraCard({ mitra }: Props) {
  return (
    <div
      className="p-6 rounded-2xl border flex flex-col gap-4 hover:-translate-y-1 transition-transform"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-surface-alt)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase mb-2"
            style={{
              backgroundColor: "var(--color-primary)15",
              color: "var(--color-primary)",
            }}
          >
            {TYPE_LABELS[mitra.type]}
          </span>
          <h3 className="font-display text-lg font-semibold" style={{ color: "var(--color-text-main)" }}>
            {mitra.name}
          </h3>
        </div>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
          style={{ backgroundColor: "var(--color-surface-alt)" }}
        >
          🤝
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {mitra.description}
      </p>
      {mitra.testimonial && (
        <blockquote
          className="text-xs italic leading-relaxed px-3 py-2 rounded-lg border-l-2"
          style={{
            borderColor: "var(--color-tertiary)",
            color: "var(--color-text-muted)",
            backgroundColor: "var(--color-surface-alt)",
          }}
        >
          "{mitra.testimonial}"
        </blockquote>
      )}
      <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: "var(--color-surface-alt)" }}>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
          <MapPin size={11} style={{ color: "var(--color-primary)" }} />
          {mitra.location}
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
          <Calendar size={11} />
          Sejak {mitra.since}
        </div>
      </div>
    </div>
  );
}
