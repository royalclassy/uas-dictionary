/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "hsl(274deg, 82%, 60%)",
      },
      screens:{
        desktop: '1440px'
      }
    },
  },
  plugins: [],
};
