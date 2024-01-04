/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryColor: {
          DEFAULT: "#F28705",
          500: "#FEF3E6",
          300: "#FFB862",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
