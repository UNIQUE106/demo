/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/images/bg-home.jpg')",
      }
    },
  },
  plugins: [],
}

