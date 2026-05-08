import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        // Industrial Chic Palette
        "ink-black": "#0F0F0F",
        "charcoal": "#1A1A1A",
        "graphite": "#2D2D2D",
        "copper": "#B87333",
        "copper-light": "#D4A574",
        "bone": "#F5F5DC",
        "stone": "#E8E6E1",
        "fire": "#C73E1D",
        "fire-light": "#E85D3F",
        "ash": "#8A8A8A",
        // Legacy aliases for compatibility
        "cream-base": "#0F0F0F",
        "warm-accent": "#B87333",
        "charcoal-dark": "#F5F5DC",
        "deep-charcoal": "#1A1A1A",
        "light-divider": "#2D2D2D",
        "surface-white": "#1A1A1A",
      },
    },
  },
};

export default config;
