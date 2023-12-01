/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./docs/**/*.{md,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./docusaurus.config.js",
    "../../node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: ["class", '[data-theme="dark"]'],
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
          DEFAULT: "rgb(var(--primary-default) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
        },
        secondary: {
          lighter: "rgb(var(--secondary-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--secondary-default) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
        },
        red: {
          lighter: "rgb(var(--red-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--red-default) / <alpha-value>)",
          dark: "rgb(var(--red-dark) / <alpha-value>)",
        },
        orange: {
          lighter: "rgb(var(--orange-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--orange-default) / <alpha-value>)",
          dark: "rgb(var(--orange-dark) / <alpha-value>)",
        },
        blue: {
          lighter: "rgb(var(--blue-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--blue-default) / <alpha-value>)",
          dark: "rgb(var(--blue-dark) / <alpha-value>)",
        },
        green: {
          lighter: "rgb(var(--green-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--green-default) / <alpha-value>)",
          dark: "rgb(var(--green-dark) / <alpha-value>)",
        },
      },
      fontFamily: {
        geist: ["Geist", "system-ui", "sans-serif"],
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
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "600",
          },
        ],
        h3: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "600",
          },
        ],
        h4: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
          },
        ],
        h5: [
          "1rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        h6: [
          "0.875rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
