import { ABOUT_DATA } from "@/data/about";

export default function StatsSection() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {ABOUT_DATA.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs mt-1.5 font-medium tracking-wide text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
