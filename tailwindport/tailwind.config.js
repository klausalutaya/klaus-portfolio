/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald-light': ['Oswald-Light'],
        'oswald-medium': ['Oswald-Medium'],
        'oswald-demibold': ['Oswald-DemiBold'],
        'oswald-heavy': ['Oswald-Heavy'],
        'eurostile-regular': ['Eurostile-Regular'],
        'eurostile-extendedregular': ['Eurostile-ExtendedRegular'],
        'eurostile-black': ['Eurostile-Black'],
        'eurostile-extendedblack': ['Eurostile-ExtendedBlack'],
        'open-sans': ['Open Sans-Regular'],
        'poppins-regular': ['Poppins-regular'],
        'poppins-black': ['Poppins-black'],
        'poppins-bold': ['Poppins-bold'],

      },

      screens: {
        'se': {'raw': '(min-width: 375px) and (max-width: 667px)'}, // iPhone SE (375px - 667px)
         'xr': {'raw': '(min-width: 375px) and (max-width: 667px)'}, // iPhone XR (375px - 667px)
         'iphonemax': {'raw': '(min-width: 375px) and (max-width: 667px)'}, // iPhone 14 Pro Max (375px - 667px)
         'xl': '1280px',
        
       },
      
    },
  },
  plugins: [],
}