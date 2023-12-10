/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        satoshi:["Satoshi", "sans-serif"],
        inter:["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}