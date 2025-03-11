const { darkMode } = require('tailwindcss/stubs/defaultConfig.stub');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // Include this if using Next.js App Router
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
