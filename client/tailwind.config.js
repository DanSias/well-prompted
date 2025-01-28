/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable the 'class' strategy for dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
