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
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
}

