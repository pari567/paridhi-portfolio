/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#fafaf7',
        surface: '#ffffff',
        accent: '#ff6b35',
        violet: '#7c3aed',
        ink: '#1a1a2e',
        muted: '#6b7280',
        mint: '#34d399',
        border: '#e8e4de',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
