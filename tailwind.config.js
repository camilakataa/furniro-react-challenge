/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
        colors: {
          'yellow-light': '#FFF3E3',
          'yellow-dark': '#B88E2F',
        },
        spacing: {
          982: '982px',
        },
      },
    },
    plugins: [],
  };
  