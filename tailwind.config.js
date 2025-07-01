/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#161618',
        'primary': '#F6DCC6',
        'accent': '#A8B5A2',
        'neutral': '#F5F5F5',
        'text': '#1F242C',
        'bg-dark': '#B69974',
        'bg-light': '#FAF9F6',
        'black': '#101010',
        'text-hover': '#E0D3C3',
        'grey': '#999FA6',
        'grey-text': '#67687A',
        'box': '#ECE8E0',
        'beige-light': '#FEEAD8',
        'beige-dark': '#C2B5A5',
        'black-dark': '#141414',
        'black-light': '#1A1A1A',
        'text-beige-dark': '#C5AE90',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}

