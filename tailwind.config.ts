import type { Config } from "tailwindcss";

// Colours are CSS variables (see globals.css) so light/dark share one set of names.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        panel: "var(--panel)",
        card: "var(--card)",
        ink: "var(--ink)",
        body: "var(--body-ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        // environmental accent — the single colour on the page
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
