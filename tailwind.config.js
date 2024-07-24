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
          'beige-light': '#FAF3EA',
          'highlight-pink': '#E97171',
          'highlight-blue': '#2EC1AC',
        },
        spacing: {
          982: '982px',
        },
      },
    },
    plugins: [],
  };
  