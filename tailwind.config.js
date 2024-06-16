/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu']
      },

      colors: {
        ab: "#19aae3" 
      }
    },
  },
  plugins: [],
}

// eğer ab-cd şeklinde tanımlanacaksa tırnak içine alınmalı