/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#242424",
        primary: "#3A9A91",
        secondary: "#D8B26C",
      },
    },
  },
  plugins: [],
};
