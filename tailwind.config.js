/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#FFF200',
          timer: '#FDD76E',
          dark: '#000000',
          soft: '#333333',
        },
      },
      fontSize: {
        hero: '3rem',         // 48px
        subhero: '1.25rem',   // 20px
        timerDigit: '2rem',   // 32px
        timerLabel: '0.875rem',
        body: '1.125rem',     // 18px
      },
    },
  },
  plugins: [],
}
