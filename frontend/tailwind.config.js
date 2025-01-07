/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: {
          400: "#e0e7ff",
          500: "#4640ad",
          600: "#5046e3"
        }
      }
    },
  },
  plugins: [],
}
