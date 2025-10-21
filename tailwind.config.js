const { Montserrat } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        zaacoal: {
          black: "#0D0D0D",
          gray: "#6B6B6B",
          white: "#FFFFFF",
          accent: "#111111"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        urbanist: ["var(--font-urbanist)", "sans-serif"],

      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem"
        }
      }
    }
  },
  plugins: []
};
