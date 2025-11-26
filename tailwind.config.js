/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arcade: {
          dark: '#0f0f1a',
          panel: '#1a1a2e',
          neon: '#00f3ff',
          pink: '#ff00ff',
          text: '#eaeaea',
        },
        stile: {
          blue: '#0052CC',
          bg: '#F4F5F7',
          text: '#172B4D'
        }
      },
    },
  },
  plugins: [],
}