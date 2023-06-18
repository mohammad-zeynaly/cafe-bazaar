/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    fontFamily: {
      YekanBakh: ["YekanBakh"],
    },

    extend: {

      container: {
        center: true,
      },

      colors: {
        primary: "#0ea960",
        secondary: "#2a2a2a",
        neutral: "#6b6b6b",
        shadow: "rgba(0,0,0,0.1)",
      },

      boxShadow: {
        'mainShadow': "0 4px 24px rgba(0,0,0,0.1)",
      },

    },
  },
  plugins: [],
};
