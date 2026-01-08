/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      tablet: "620px",
      laptop: "1200px",
      large: "1440px"
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.6rem",
      smbase: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem"
    },
    extend: {
      colors: {
        darkmode: "#121212"
      }
    }
  },
  plugins: []
};
