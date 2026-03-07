import Image from "next/image";
import { Quote } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function FounderBio() {
  const { founder } = ABOUT_DATA;
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--color-primary)" }}>
            Pendiri
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium" style={{ color: "var(--color-text-main)" }}>
            Di Balik Setiap Anyaman
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-sm mx-auto">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, var(--color-primary-dark)60, transparent 60%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-display text-2xl font-semibold">{founder.name}</p>
                <p className="text-white/75 text-sm">{founder.title}</p>
              </div>
            </div>
            {/* Decorative outline */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full max-w-sm mx-auto rounded-2xl border-2 -z-10"
              style={{ borderColor: "var(--color-tertiary)" }}
            />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <blockquote className="relative">
              <Quote
                size={32}
                className="mb-3 opacity-30"
                style={{ color: "var(--color-primary)" }}
              />
              <p
                className="font-display text-xl md:text-2xl italic leading-relaxed"
                style={{ color: "var(--color-text-main)" }}
              >
                "{founder.quote}"
              </p>
            </blockquote>

            <div className="space-y-4">
              {founder.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Expertise tags */}
            <div>
              <p className="text-xs font-medium tracking-wide uppercase mb-3" style={{ color: "var(--color-text-muted)" }}>
                Keahlian
              </p>
              <div className="flex flex-wrap gap-2">
                {founder.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: "var(--color-primary)",
                      color: "var(--color-primary)",
                      backgroundColor: "var(--color-primary)10",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
