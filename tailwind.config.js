/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        center: true,
        DEFAULT: "1rem",
        lg: "10rem",
      },
    },
  },
  plugins: [],
};
