/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // slate-900
          soft: '#1e293b',
        },
        accent: '#0ea5e9', // sky-500
      },
    },
  },
  plugins: [],
}

