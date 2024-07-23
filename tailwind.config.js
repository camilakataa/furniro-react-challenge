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
          'custom-gray-900': 'rgba(14, 16, 18, 1)',
        },
        spacing: {
          982: '982px',
        },
      },
    },
    plugins: [],
  };
  