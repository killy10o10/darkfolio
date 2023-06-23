/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-yellow': '#f7d039'
      },
      fontFamily: {
        poppins: "'Poppins', serif"
      }
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}