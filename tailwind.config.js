/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#13284c",
          secondary: "#b1102b",
          tertiary: "#ced1d4",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
