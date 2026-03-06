import { ABOUT_DATA } from "@/data/about";
import { Users, MapPin, Calendar } from "lucide-react";

export default function WorkshopSection() {
  const { workshops } = ABOUT_DATA;
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--color-primary)" }}>
            Pengalaman Mengajar
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium" style={{ color: "var(--color-text-main)" }}>
            Workshop & Pelatihan
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Ahmad Rahman aktif berbagi ilmu anyaman bambu di berbagai institusi dan komunitas, memperluas dampak positif kerajinan lokal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workshops.map((ws) => (
            <div
              key={ws.id}
              className="p-6 rounded-2xl border hover:-translate-y-1 transition-transform"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-surface-alt)",
              }}
            >
              <div
                className="inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase mb-4"
                style={{
                  backgroundColor: "var(--color-primary)15",
                  color: "var(--color-primary)",
                }}
              >
                {ws.year}
              </div>
              <h3
                className="font-display text-lg font-semibold mb-2 leading-snug"
                style={{ color: "var(--color-text-main)" }}
              >
                {ws.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                {ws.description}
              </p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                  <Users size={11} style={{ color: "var(--color-primary)" }} />
                  {ws.organizer}
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                  <MapPin size={11} style={{ color: "var(--color-primary)" }} />
                  {ws.location}
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                  <Calendar size={11} style={{ color: "var(--color-primary)" }} />
                  {ws.participants} peserta
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
