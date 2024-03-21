/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
console.warn("defaultTheme.screens:", defaultTheme.screens);
module.exports = {
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: "#fef4e4",
          DEFAULT: "#ffefd5",
          dark: "#fee5bc",
        },
      },
      screens: {
        xms: "350px",
        ms: "450px",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
};
