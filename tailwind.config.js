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
        'mobile-bg': "url('./assets/imgs/bitcoinbgmobile.jpg')",
        'wide-bg': "url('./assets/imgs/bitcoinbgwide.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],

}