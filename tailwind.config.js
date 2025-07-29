/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        galaxy: "#0D1117",
        nebula: "#B79CED",
        orbit: "#A259FF",
      },
    },
  },
  plugins: [],
}

