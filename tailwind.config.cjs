/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#151515",
        pinkColor: "#3c976e",
        sBgColor: "#242424",
        growfyBgColor: "#0D0D11",
        growfyPrimaryBtn: "#3D96F4",
        growfySBtn: "#81818B",
        growfyPColor: "#9C9C9C",
        growfyStarColor: "#FFC54F",
        foodiesBgColor: "#15132F",
        foodiesYellowColor: "#F3B007",
        foodiesPinkColor: "#DD3957",
        foodiesBlueColor: "#302F61",
        plantaMainColor: "#224722",
        plantaSBgColor: "#D9E7CB",
        plantaMainColorLight: "#D9E7CB",
        plantaMainColorDark: "#172C17",
      },
      fontFamily: {
        elMessiri: ["Almarai", "sans"],
      },
    },
  },
  plugins: [],
};
