/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1d1d1f',
        'canvas-parchment': '#f5f5f7',
        'surface-pearl': '#fafafc',
        primary: '#0066cc',
        'surface-black': '#000000',
      },
      boxShadow: {
        'product-snap': 'rgba(0, 0, 0, 0.22) 3px 5px 30px',
      }
    },
  },
  plugins: [],
}
