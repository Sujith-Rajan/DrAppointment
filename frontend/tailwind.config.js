/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor:"#01E4FB",
        yellowColor:"#ECAA06",
        purpleColor:"#DA70D6",
        irishBlueColor:"#084FF2 ",
        headingColor:"#232C40 ",
        textColor:"#414752",

      }
    },
  },
  plugins: [],
}

