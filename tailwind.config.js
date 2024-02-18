const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0rem",
          medium: "0rem",
          large: "0rem"
        }
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#C8D100",
              foreground: "#000000"
            },
            focus: "#C8D100"
          }
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#C8D100",
              foreground: "#000000"
            },
            focus: "#C8D100"
          }
        }
      }
    }),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          "display": "flex",
          "justify-content": "center",
          "align-items": "center"
        }
      });
    }
  ]
};
