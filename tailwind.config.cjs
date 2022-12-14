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
        funeralBlueDark: "#111827",
        funeralBlueLight: "#1f2836",
        frontFormMarine: "hsl(213, 96%, 18%)",
        frontFormPurplish: "hsl(243, 100%, 62%)",
        frontFormPastel: "hsl(228, 100%, 84%)",
        frontFormLight: "hsl(206, 94%, 87%)",
        frontFormStrawberry: "hsl(354, 84%, 57%)",
        frontFormCool: "hsl(231, 11%, 63%)",
        frontFormLight: "hsl(229, 24%, 87%)",
        frontFormMagnolia: "hsl(217, 100%, 97%)",
        frontFormAlabaster: "hsl(231, 100%, 99%)",
        frontFormWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        elMessiri: ["Almarai", "sans"],
      },
    },
  },
  plugins: [],
};
