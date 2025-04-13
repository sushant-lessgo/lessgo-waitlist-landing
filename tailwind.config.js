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
        body: '1.2rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Base (mobile-first)
        '.text-headline': {
          fontSize: '2rem',
        },
        '.text-subheadline': {
          fontSize: '1.25rem',
        },
  
        // md: overrides
        '@screen md': {
          '.text-headline': {
            fontSize: '2.5rem',
          },
          '.text-subheadline': {
            fontSize: '1.25rem',
          },
        },
  
        // lg: overrides
        '@screen lg': {
          '.text-headline': {
            fontSize: '2.9rem',
          },
          '.text-subheadline': {
            fontSize: '1.5rem',
          },
        },
      });
    },
  ],
}
