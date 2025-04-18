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
          
          text: '#003E80',
          accentPrimary: '#FF814A',
          logo: '#006CFF',
          highlightText: '#FFE8DC',
          highlightBG: '#FFF5EF',
        },
      },
      
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Base (mobile-first)
        '.text-heading1': {
          fontSize: '2.7rem',
          fontWeight: '800',
        },
        '.text-heading2': {
          fontSize: '1.5rem',
          fontWeight: '600',
        },
        '.text-heading3': {
          fontSize: '1.65rem',
          fontWeight: '600',
        },
        '.text-heading4': {
          fontSize: '1.2rem',
          fontWeight: '500',
        },
        'body': {
          fontSize: '1.2rem',     // Normal Body Text
          fontWeight: '400',      // Regular
        },

        // md: overrides
        '@screen md': {
          '.text-heading1': {
            fontSize: '3.5rem',
            fontWeight: '800',
          },
          '.text-heading2': {
            fontSize: '1.6rem',
            fontWeight: '600',
          },
          '.text-heading3': {
            fontSize: '1.25rem',
            fontWeight: '600', 
          },
          '.text-heading4': {
            fontSize: '1.25rem',
            fontWeight: '500',    // Keep Medium
          },
        },
  
        // lg: overrides
        '@screen lg': {
          '.text-heading1': {
            fontSize: '5rem',
            fontWeight: '800',
          },
          '.text-heading2': {
            fontSize: '2.5rem',
            fontWeight: '600',
          },
          '.text-heading3': {
            fontSize: '1.5rem',
            fontWeight: '600',
          },
          '.text-heading4': {
            fontSize: '1.35rem',
            fontWeight: '500',
          },
        },
      });
    },
  ],
}
