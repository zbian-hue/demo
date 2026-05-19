import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rblx: {
          bg: "#000000",
          surface: "#0F0F12",
          card: "#17171C",
          row: "#1B1B22",
          rowAlt: "#202028",
          border: "#26262E",
          subtle: "#2A2A33",
          text: "#FFFFFF",
          dim: "#A8A8B3",
          muted: "#6E6E7A",
          blue: "#2D5BFF",
          blueHover: "#4870FF",
          green: "#27D17C",
          gold: "#F4C84A",
          violet: "#8E5BFF",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        device:
          "0 30px 60px -15px rgba(0,0,0,0.6), 0 10px 20px -5px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.04)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
