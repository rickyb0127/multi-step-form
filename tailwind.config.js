/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'laptop': '800px',
      'desktop': '1280px'
    },
    colors: {
      'white': 'var(--white)',
      'marine-blue': 'var(--marine-blue)',
      'purplish-blue': 'var(--purplish-blue)',
      'pastel-blue': 'var(--pastel-blue)',
      'light-blue': 'var(--light-blue)',
      'strawberry-red': 'var(--strawberry-red)',
      'cool-gray': 'var(--cool-gray)',
      'light-gray': 'var(--light-gray)',
      'magnolia': 'var(--magnolia)',
      'alabaster': 'var(--alabaster)'
    },
    extend: {},
  },
  plugins: [],
}