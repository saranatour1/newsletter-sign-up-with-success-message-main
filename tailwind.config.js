/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'red':{
          'tomato':"hsl(4, 100%, 67%)",
          'tomato-1':"#FF5474",
          "tomato-2":"#FF6740"
        },
        'gray':{
          '960':'hsl(231, 7%, 60%)',
          '970':'hsl(235, 18%, 26%)',
          '1000':"hsl(234, 29%, 20%)",
        }
      },
      gradientColorStops:{},
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

