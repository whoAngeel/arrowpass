/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'phone': {'max': '400px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': {'min': '400px', 'max': '668px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'computer': {'min': '668px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }


    }
  },
  plugins: [],
}