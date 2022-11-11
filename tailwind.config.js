/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        smAva: "66px",
        largeAva: "88px",

        containerDesc: "414px",

        listItem: "396px",
      },
      minHeight: {
        listItem: "206px",
      },
      screens: {
        sm: "576px",
      },
      colors: {
        bodyBgColor: "#EFF0F5",
        primaryBgColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
