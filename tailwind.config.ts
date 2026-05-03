import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Almendra", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "cream-base": "#D8CBB8",
        "warm-accent": "#D49653",
        "charcoal-dark": "#2C2C2C",
        "deep-charcoal": "#222222",
        "light-divider": "#DDDDDD",
        "surface-white": "#FFFFFF",
      },
    },
  },
};

export default config;
