/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {
        colors :{
          'bg' : '#566A62',
          'header' : '#374A43',
        },
        zIndex: {
          '1001': '1001',
        }
      },
    },
    plugins: [],
  }