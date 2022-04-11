module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Overpass: "Overpass,sans-serif",
      },
      colors: {
        primary: "#FB7413",
        Neutral: {
          Light_Grey: "#959EAC",
          Medium_Grey: "#7C8798",
          Dark_Blue: "#252D37",
          Very_Dark_Blue: "#121417",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
