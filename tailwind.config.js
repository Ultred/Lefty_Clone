/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      colors: {
        bgBlack: "#181818",
        bgyellow: "#E0E05C",
        bgdarkblue: "#0B3D52",
        bgpeach: "#FFCD60",
        bglumot: "#424E00",
        bgdarkyellow: "#786410",
        hoverbt: "#E8E8E8",
        secgray: "#F7F5F2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        marcellus: ["Marcellus", "serif"],
      },
    },
  },
  plugins: [],
};
