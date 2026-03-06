import { ABOUT_DATA } from "@/data/about";

export default function AboutHero() {
  const { brand } = ABOUT_DATA;
  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, var(--color-primary) 0px, transparent 1px, transparent 20px, var(--color-primary) 21px)`,
        }}
      />
      <div className="max-w-4xl mx-auto px-5 md:px-10 text-center space-y-6">
        <p
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "var(--color-primary)" }}
        >
          Tentang Kami
        </p>
        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05]"
          style={{ color: "var(--color-text-main)" }}
        >
          {brand.name}
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          {brand.description}
        </p>
        <div
          className="inline-block px-4 py-2 rounded-full text-sm border"
          style={{
            borderColor: "var(--color-tertiary)",
            color: "var(--color-secondary)",
          }}
        >
          {brand.tagline}
        </div>
      </div>
    </section>
  );
}
