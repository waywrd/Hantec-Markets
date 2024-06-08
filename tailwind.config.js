/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "black-red-glow": "linear-gradient(to right, black 90%, red 100%)",
        "black-red-vertical": "linear-gradient(to top, black 90%, red 100%)",
      },
    },
  },
  plugins: [],
};
