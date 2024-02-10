/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { // Corrected from 'color' to 'colors'
        'bg': '#D8B4A0'
      },
    },
    fontFamily: {
      pixelated: ['Press Start 2P', 'system-ui'],
    },
  },
  plugins: [],
}
