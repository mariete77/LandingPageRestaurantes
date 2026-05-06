import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "cream-base": "#D8CBB8",
        "cream-light": "#E8DFD0",
        "warm-accent": "#D49653",
        "warm-accent-light": "#E8B88A",
        "charcoal-dark": "#2C2C2C",
        "deep-charcoal": "#222222",
        "light-divider": "#DDDDDD",
        "surface-white": "#FFFFFF",
      },
    },
  },
};

export default config;
