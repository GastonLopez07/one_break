import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#f0f4ed",
          100: "#dde8d6",
          200: "#bdd1b0",
          300: "#94b387",
          400: "#6e9460",
          500: "#4d7340",
          600: "#3a5a30",
          700: "#2d4625",
          800: "#1e2e19",
          900: "#111a0e",
        },
        earth: {
          100: "#f5f0e8",
          200: "#e8dcc8",
          300: "#d4c4a0",
          400: "#b8a070",
          500: "#8c7448",
        },
      },
      fontFamily: {
        display:    ["var(--font-display)",    "sans-serif"],
        condensed:  ["var(--font-condensed)",  "sans-serif"],
        body:       ["var(--font-body)",       "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
