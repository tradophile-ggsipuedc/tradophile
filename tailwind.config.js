/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        tradophile: ['rowdies'],
        custom: ['montserrat'],
        custom2: ['saira'],
      },
      screens: {
        'sm': '425px',  // Small devices (425px)
        'md': '768px',  // Medium devices (768px)
        'lg': '1024px', // Large devices (1024px)
        'xl': '1440px', // Extra-large devices (1440px)
      },
      backdropBlur: {
        'xs': '2px',  // Custom backdrop-blur with 2px blur effect
      },
      backgroundImage: {
        'mobile-bg': "url('/public/imgs/bitcoinbgmobile.jpg')",
        'wide-bg': "url('/public/imgs/bitcoinbgwide.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],

}