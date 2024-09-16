/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          DEFAULT: "#0B8749",
          100: "#0B87490D",
          200: "#ffdbc6",
          300: "#ffcaaa",
          400: "#ffb88d",
          500: "#ffa671",
          600: "#ff9454",
          700: "#d57b46",
          800: "#aa6338",
          900: "#804a2a",
          950: "#55311c",
        },
        secondary: {
          DEFAULT: "#FFA201",
          100: "#d1d1d1",
          200: "#b3b2b2",
          300: "#8C8B8B",
          400: "#666464",
          500: "#403e3e",
          600: "#1a1717",
          700: "#161313",
          800: "#110f0f",
          900: "#E3E3E2",
          950: "#090808",
          general: "#223150",
          regular: "#828282",
        },
        neutral: {
          DEFAULT: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F7F7F7",
          300: "#CFCFCF",
          400: "#AFAFAF",
          500: "#868686",
          600: "#5E5E5E",
          700: "#363636",
          800: "#0E0E0E",
        },
        success: {
          DEFAULT: "#0CAF60",
          100: "#DBF0D9",
          200: "#C3E6C0",
          300: "#A5DAA1",
          400: "#87CE82",
          500: "#69C162",
          600: "#4BB543",
        },
        orange: {
          DEFAULT: "#ff9814",
          100: "#ffead0",
          200: "#ffddb1",
          300: "#ffcc8a",
          400: "#ffba62",
          500: "#ffa93b",
          600: "#ff9814",
        },
        warning: {
          DEFAULT: "#E89D2B",
          100: "#FAE7CC",
          200: "#F6D8AA",
          300: "#F1C480",
          400: "#EDB055",
          500: "#E89D2B",
          600: "#E48900",
        },
        grey: {
          DEFAULT: "#333",
        },
        danger: {
          DEFAULT: "#FB5E5E",
          100: "#FED8D8",
          200: "#FDBFBF",
          300: "#FD9F9F",
          400: "#FC7E7E",
          500: "#FB5E5E",
          600: "#FA3E3E",
        },
        customBlack: "#0E0E0E",
        border: {
          DEFAULT: "#D9D9D9",
        },
        label: {
          DEFAULT: "#494949",
          active: "#494949",
        },
        placeholder: {
          DEFAULT: "#B9B8B8",
          inactive: "#B9B8B8",
        },
      },
      fontSize: {
        inputlabel: "0.905rem",
        placeholder: "0.87rem",
        base: "0.978rem",
      },
      fontFamily: {
        display: "GT Walsheim Pro",
      },
      // fontWeight: {
      //   thin: "100",
      //   extralight: "200",
      //   light: "300",
      //   normal: "400",
      //   semibold: "400",
      //   medium: "500",
      //   bold: "bold",
      //   extrabold: "800",
      // },
      boxShadow: {
        reqAssetBoxShadow: "0px 7px 22px 0px rgba(198, 198, 198, 0.19)",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(50%)" },
          "50%": { opacity: 0, transform: "translateX(20%)" },
            "100%": { opacity: 1, transform: "translateX(0)" }
        }
      },
      animation: {
        slideIn: "slideIn .5s ease-in-out forwards 0.0s"
      }
    },
  },
  plugins: [],
};
