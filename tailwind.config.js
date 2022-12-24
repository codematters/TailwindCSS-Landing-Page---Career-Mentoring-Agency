/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-blue": "#39A9DB",
        "color-verylightblue": "#EBF6FB",
        "color-orange": "#F39237",
        "color-lightorange": "#f7ba81",
        "color-mediumorange": "#e1740e",
        "color-brownorange": "#d16c0d",
        "color-darkorange": "#b25200",
        "color-darkblue": "#242A45",
        "color-grey": "#9194A2",
        "color-mediumgrey": "#E8E8E8",
        "color-white": "#f7f7f7",
        "color-darkwhite": "#d6d6d6",
        "color-mediumblue": "#164357",
        "color-lightblue": "#D7EDF7"
      },

     container: {
        center: true,
        padding: "1rem",
        screens : {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px"
        }
      },
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif']
    },
  },
  plugins: [],
};
