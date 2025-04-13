/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        eyebrow: '2rem',
        headline: '5rem',
        subheadline: '1.25rem',
        timerDigit: '2rem',
        timerLabel: '0.875rem',
        body: '1.125rem',
      },
    },
  },
  plugins: [],
}
