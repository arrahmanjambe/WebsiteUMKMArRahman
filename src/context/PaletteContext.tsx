"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { COLOR_PALETTES, ColorPalette, DEFAULT_PALETTE } from "@/data/palettes";

type PaletteContextType = {
  currentPalette: ColorPalette;
  setPalette: (id: string) => void;
  palettes: ColorPalette[];
};

const PaletteContext = createContext<PaletteContextType>({
  currentPalette: DEFAULT_PALETTE,
  setPalette: () => {},
  palettes: COLOR_PALETTES,
});

export const PaletteProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(DEFAULT_PALETTE);

  const applyPalette = (palette: ColorPalette) => {
    const root = document.documentElement;
    const { colors } = palette;
    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-primary-light", colors.primaryLight);
    root.style.setProperty("--color-primary-dark", colors.primaryDark);
    root.style.setProperty("--color-secondary", colors.secondary);
    root.style.setProperty("--color-tertiary", colors.tertiary);
    root.style.setProperty("--color-surface", colors.surface);
    root.style.setProperty("--color-surface-alt", colors.surfaceAlt);
    root.style.setProperty("--color-text-main", colors.textMain);
    root.style.setProperty("--color-text-muted", colors.textMuted);
  };

  useEffect(() => {
    const saved = localStorage.getItem("palette-id");
    const found = COLOR_PALETTES.find((p) => p.id === saved);
    const initial = found || DEFAULT_PALETTE;
    setCurrentPalette(initial);
    applyPalette(initial);
  }, []);

  const setPalette = (id: string) => {
    const palette = COLOR_PALETTES.find((p) => p.id === id);
    if (!palette) return;
    setCurrentPalette(palette);
    applyPalette(palette);
    localStorage.setItem("palette-id", id);
  };

  return (
    <PaletteContext.Provider value={{ currentPalette, setPalette, palettes: COLOR_PALETTES }}>
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = () => useContext(PaletteContext);
