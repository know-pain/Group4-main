/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
      lightGray:'#D9D9D9',
       darkGreen:'#0b3105',
       lightGreen:'#446a1a',
       heavyGreen:'#2e4911',
       darkOrange:'#ffad3b',
       glass:'rgba(255, 255, 255, 0.8)',
       transaparent:'rgba(255, 255, 255, 0.16)',
       glassy:'rgba(255, 255, 255, 0.1)',
       indigo:'#3554f8',
       pink:'#f32efb',
       red:'#FF0000',
       purple:'#7700ff',
       lightPurple:'#9d5ee5',
       omniBg:'#515767'
      },
      backgroundImage:{
        'service-image':"url('/src/assets/images/banner.jpg')"
      }
    },
  },
  plugins: [],
}

