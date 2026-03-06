import { ABOUT_DATA } from "@/data/about";

export default function HeritageSection() {
  const { heritage } = ABOUT_DATA;
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-surface-alt)" }}>
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--color-secondary)" }}>
            Sejarah
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4" style={{ color: "var(--color-text-main)" }}>
            {heritage.title}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {heritage.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: "var(--color-primary)30" }}
          />

          <div className="space-y-10">
            {heritage.timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 -translate-y-0 mt-1.5">
                  <div
                    className="w-3 h-3 rounded-full border-2 border-[var(--color-surface-alt)]"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-12 text-left" : "md:pl-12 text-left md:text-right"
                  }`}
                >
                  <div
                    className="inline-block px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase mb-2"
                    style={{
                      backgroundColor: "var(--color-primary)15",
                      color: "var(--color-primary)",
                    }}
                  >
                    {item.year}
                  </div>
                  <h3
                    className="font-display text-xl font-semibold mb-1"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
