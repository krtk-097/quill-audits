/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      fontWeight: {
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700
        
      }
    },
  },
  plugins: [],
}