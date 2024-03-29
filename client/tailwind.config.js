/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, display: 'none' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out forwards',
      },
      boxShadow: {
        'custom': '5px 5px 0 rgb(94, 80, 63)',
        'button': '5px 5px 0 rgb(10, 9, 8)',
        'circle': '4px 4px 0 1px rgb(10, 9, 8)',
      },
      colors: {
        'background': '#eae0d5',
        'primary': '#0a0908',
        'secondary': '#5e503f',
        'secondaryLight': '#c6ac8f',
        'headerColor': '#22333b',
        'headerColorLight': '#587685b0',
      },
    },
    fontFamily: {
      pixelated: ['Press Start 2P', 'system-ui'],
      cmd: ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [],
}
