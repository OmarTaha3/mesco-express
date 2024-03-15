/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "45px",
      },
      screens: {
        DEFAULT: "1445px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#02235F",
        secondary: "#0BA7DA",
        gray: "#F5F5F5",
        grayPlus: "#DFDFDF",
        grayPlusPlus: "#939393",
        grayAlter: "#D9D9D9",
        grayAlterTwo: "#9D9D9D",
        black: "#222222",
        red: "#5F0202",
        redLight: "#FFDEDE",
        blueLighter: "#E9F7FF",
      },
      spacing: {
        30: "30px",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
