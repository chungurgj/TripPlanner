/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        explore:'#faf1ed',
        travelersChoice:'#fff7e1',
        footer:'#faf1ed'
      },
      fontWeight:{
        'ultra': 1000
      }
    },
  },
  plugins: [],
}