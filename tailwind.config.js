/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryDarkBg: "#202C36",
        secondaryDarkBg: "#2B3844",
        primaryLightBg: "#FAFAFA",
        secondaryLightBg: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
