/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "crest-green": "#A2E1A2",
        "crest-blue": "#292b39",
        "crest-brown": "#AF9156",
      },
    },
  },
  plugins: [],
};
