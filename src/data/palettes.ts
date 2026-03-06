export type ColorPalette = {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    tertiary: string;
    surface: string;
    surfaceAlt: string;
    textMain: string;
    textMuted: string;
  };
};

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: "bambu-natural",
    name: "Bambu Natural",
    description: "Warna alami bambu dan bumi",
    colors: {
      primary: "#4A7C59",
      primaryLight: "#6B9E78",
      primaryDark: "#2F5C3E",
      secondary: "#8B6B3D",
      tertiary: "#C9A96E",
      surface: "#FAF7F2",
      surfaceAlt: "#F0EBE0",
      textMain: "#1C1C1C",
      textMuted: "#6B6560",
    },
  },
  {
    id: "midnight-forest",
    name: "Midnight Forest",
    description: "Gelap elegan seperti hutan malam",
    colors: {
      primary: "#2D6A4F",
      primaryLight: "#52B788",
      primaryDark: "#1B4332",
      secondary: "#D4A853",
      tertiary: "#95D5B2",
      surface: "#0F1F17",
      surfaceAlt: "#1B2E22",
      textMain: "#F5F0E8",
      textMuted: "#A8B5A0",
    },
  },
  {
    id: "sakura-earth",
    name: "Sakura Earth",
    description: "Hangat dan feminin dengan sentuhan alam",
    colors: {
      primary: "#B56B4A",
      primaryLight: "#D4886A",
      primaryDark: "#8C4A2F",
      secondary: "#7A9E5F",
      tertiary: "#E8C4A0",
      surface: "#FDF8F3",
      surfaceAlt: "#F5EDE3",
      textMain: "#2A1F1A",
      textMuted: "#7A6B62",
    },
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    description: "Segar dan bersih seperti angin laut",
    colors: {
      primary: "#2A7F8F",
      primaryLight: "#4AA8BA",
      primaryDark: "#1A5E6C",
      secondary: "#C67B4B",
      tertiary: "#A8D5DC",
      surface: "#F4FAFB",
      surfaceAlt: "#E4F4F7",
      textMain: "#0F2530",
      textMuted: "#4A6B75",
    },
  },
];

export const DEFAULT_PALETTE = COLOR_PALETTES[0];
