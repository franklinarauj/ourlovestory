/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',

        gray: '#cccccc',
        gray_dark: '#808080',

        green: '#88c899',
        green_light: '#a8e6a1',
        green_dark: '#31734f',

        pink: '#e06699',
        pink_light: '#f8a3c4',
        pink_dark: '#c4417a',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'ml': '1056px',
        'gx': '1216px',
        'xg': '1232px',
        'xl': '1280px',
        '1xl': '1400px',
        '2xl': '1536px',
        '3xl': '1700px'
      },
    },
  },
  plugins: [],
}