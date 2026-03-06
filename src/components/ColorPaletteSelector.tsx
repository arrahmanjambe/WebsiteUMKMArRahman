"use client";

import { useState } from "react";
import { Palette } from "lucide-react";
import { usePalette } from "@/context/PaletteContext";
import { cn } from "@/lib/utils";

export default function ColorPaletteSelector() {
  const { currentPalette, setPalette, palettes } = usePalette();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--color-surface-alt)] transition-colors"
        aria-label="Pilih tema warna"
        title="Ganti Tema Warna"
      >
        <Palette size={17} style={{ color: "var(--color-text-main)" }} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-11 z-[70] bg-[var(--color-surface)] border border-[var(--color-surface-alt)] rounded-2xl shadow-xl p-4 min-w-[220px]">
            <p className="text-xs font-medium text-[var(--color-text-muted)] tracking-widest uppercase mb-3">
              Pilih Tema Warna
            </p>
            <div className="flex flex-col gap-2">
              {palettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => {
                    setPalette(palette.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 p-2.5 rounded-xl transition-all text-left",
                    currentPalette.id === palette.id
                      ? "bg-[var(--color-surface-alt)] ring-1 ring-[var(--color-primary)]"
                      : "hover:bg-[var(--color-surface-alt)]"
                  )}
                >
                  {/* Color swatches */}
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full border border-white/30 shadow-sm"
                      style={{ backgroundColor: palette.colors.primary }}
                    />
                    <div
                      className="w-4 h-4 rounded-full border border-white/30 shadow-sm"
                      style={{ backgroundColor: palette.colors.secondary }}
                    />
                    <div
                      className="w-4 h-4 rounded-full border border-white/30 shadow-sm"
                      style={{ backgroundColor: palette.colors.tertiary }}
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {palette.name}
                    </p>
                    <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                      {palette.description}
                    </p>
                  </div>
                  {currentPalette.id === palette.id && (
                    <span className="text-[var(--color-primary)] text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
