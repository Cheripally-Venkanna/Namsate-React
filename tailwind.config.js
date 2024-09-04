/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// content: Tells Tailwind where to look for class usage.
// theme: Ready to be extended with custom styles or modifications.
// plugins: Allows for additional Tailwind plugins to be added later.