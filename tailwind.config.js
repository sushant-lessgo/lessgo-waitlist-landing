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
        heading: ['Sora', 'sans-serif'],
        body: ['Sora', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#FFF200',
          timer: '#FDD76E',
          dark: '#000000',
          soft: '#333333',
          text: '#003E80',
          accentPrimary: '#FF814A',
          logo: '#006CFF',
        },
      },
      fontSize: {
        
        headline: '2.9rem',
        subheadline: '1.5rem',
        timerDigit: '2rem',
        timerLabel: '0.875rem',
        body: '1.125rem',
      },
    },
  },
  plugins: [],
}
