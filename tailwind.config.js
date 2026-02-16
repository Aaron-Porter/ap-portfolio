/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        suisse: ["Suisse", "system-ui", "sans-serif"],
        "suisse-mono": ["Suisse Mono", "monospace"],
      },
      colors: {
        gray: {
          0: "var(--gray000)",
          100: "var(--gray100)",
          200: "var(--gray200)",
          300: "var(--gray300)",
          400: "var(--gray400)",
          500: "var(--gray500)",
          600: "var(--gray600)",
          700: "var(--gray700)",
          800: "var(--gray800)",
          900: "var(--gray900)",
          1000: "var(--gray1000)",
        },
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
