import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        secondary: "#06b6d4", // Cyan
        dark: {
          950: "#0f0f12", // Quase preto
          900: "#121218", // Fundo principal
          800: "#1e1e2a", // Elementos de cards
          700: "#2a2a3c", // Elementos de hover/destaque
          600: "#383850", // Bordas sutis
        },
        accent: {
          purple: "#a855f7",
          blue: "#3b82f6",
          teal: "#14b8a6",
          pink: "#ec4899",
        },
        light: {
          100: "#f1f5f9", // Texto principal
          200: "#cbd5e1", // Texto secundário
          300: "#94a3b8", // Texto terciário
          400: "#64748b", // Texto desabilitado
        }
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(120deg, #121218, #1e1e2a)",
        "gradient-card": "linear-gradient(145deg, #1e1e2a, #232335)",
      },
      boxShadow: {
        'soft': '0 0 20px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 15px rgba(99, 102, 241, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
