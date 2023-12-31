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
        'dark-yellow': '#f7d039',
        'light-yellow': '#ffe071',
        'bkg-dark': '#0c151d',
        'bkg-trans': '#171f26',
        'bkg-ash': '#e9ebec',
        'bkg-ash200': '#d7d7d7',
        'ash100': '#a3abb2',
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        
        },
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
      },
      fontFamily: {
        poppins: "'Poppins', serif"
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
        blob: "blob 30s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0%, 0%) scale(1)"
          },
          "33%": {
            transform: "translate(30%, -50%) scale(1.1)"
          },
          "66%": {
            transform: "translate(20%, -10%) scale(0.9)"
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1)"
          },
        }
      }
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}