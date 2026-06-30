/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:      '#0C0C0E',
        primary: '#C9A96E',
        ink:     '#EDEAE3',
        muted:   '#7A7770',
      },
      fontFamily: {
        inter:  ['Inter', 'sans-serif'],
        syne:   ['Syne', 'sans-serif'],
        mono:   ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
