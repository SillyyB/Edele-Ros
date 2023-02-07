/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond"],
        sourceSansPro: ["Source Sans Pro"],
      },
      colors: {
        primary: "#6C5D5D",
        backgr: "#d9d9d9",
        sec_backgr: "#c9c9c9",
      },
    },
  },
  plugins: [],
};
