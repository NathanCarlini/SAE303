/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {
        colors :{
          'custom' : '#566A62',
        },
        height:{
          '100' : '40rem'
        }
      },
    },
    plugins: [],
  }