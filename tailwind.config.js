/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#161618',
        'primary': '#475ad8',
        'accent': '#A8B5A2',
        'neutral': '#F5F5F5',
        'text': '#1F242C',
        'black': '#101010',
        'text-hover': '#E0D3C3',
        'grey': '#999FA6',
        'black-dark': '#141414',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}

