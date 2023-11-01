/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./docs/**/*.{md,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "rgb(var(--gray-50) / <alpha-value>)",
          100: "rgb(var(--gray-100) / <alpha-value>)",
          200: "rgb(var(--gray-200) / <alpha-value>)",
          300: "rgb(var(--gray-300) / <alpha-value>)",
          400: "rgb(var(--gray-400) / <alpha-value>)",
          500: "rgb(var(--gray-500) / <alpha-value>)",
          600: "rgb(var(--gray-600) / <alpha-value>)",
          700: "rgb(var(--gray-700) / <alpha-value>)",
          800: "rgb(var(--gray-800) / <alpha-value>)",
          900: "rgb(var(--gray-900) / <alpha-value>)",
          950: "rgb(var(--gray-950) / <alpha-value>)",
        },
        primary: {
          lighter: "rgb(var(--primary-lighter) / <alpha-value>)",
          light: "rgb(var(--primary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--primary-default) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
        },
        secondary: {
          lighter: "rgb(var(--secondary-lighter) / <alpha-value>)",
          light: "rgb(var(--secondary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--secondary-default) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
        },
        red: {
          lighter: "rgb(var(--red-lighter) / <alpha-value>)",
          light: "rgb(var(--red-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--red-default) / <alpha-value>)",
          dark: "rgb(var(--red-dark) / <alpha-value>)",
        },
        orange: {
          lighter: "rgb(var(--orange-lighter) / <alpha-value>)",
          light: "rgb(var(--orange-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--orange-default) / <alpha-value>)",
          dark: "rgb(var(--orange-dark) / <alpha-value>)",
        },
        blue: {
          lighter: "rgb(var(--blue-lighter) / <alpha-value>)",
          light: "rgb(var(--blue-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--blue-default) / <alpha-value>)",
          dark: "rgb(var(--blue-dark) / <alpha-value>)",
        },
        green: {
          lighter: "rgb(var(--green-lighter) / <alpha-value>)",
          light: "rgb(var(--green-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--green-default) / <alpha-value>)",
          dark: "rgb(var(--green-dark) / <alpha-value>)",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "700",
          },
        ],
        h2: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
          },
        ],
        h3: [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "700",
          },
        ],
        h4: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "700",
          },
        ],
        h6: [
          "1rem",
          {
            lineHeight: "1rem",
            fontWeight: "700",
          },
        ],
        quote: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "600",
          },
        ],
      },
      animation: {
        blink: "blink 1.4s infinite both;",
        "scale-up": "scaleUp 500ms infinite alternate",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0.2 },
          "20%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      // required this to prevent any style on readOnly input elements
      addVariant("not-read-only", "&:not(:read-only)");
    }),
  ],
};
