/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-flame)", ...fontFamily.sans],
        regular: ["var(--font-flame-sans)", "serif"],
      },
      colors: {
        "king-brown": "#502314",
        "king-green": "#198636",
        "king-red": "#D62201",
        "king-white": "#FEFEFF",
        "king-beige": "#F5EBDC",
        "king-orange": "#FEAB02",
      },
      screens: {
        "3xl": "1900px",
        "4xl": "2100px",
      },
    },
  },
  plugins: [],
};
