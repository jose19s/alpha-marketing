/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*/.{js,ts,jsx,tsx}",
    "./src/components/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c0a1c',
        primaryHover: '#383AC0',
        secondary: '#F9FF00',
        dark: '#2F2F2F',
        backg: '#f4f4f4',
        alert: '#ff4545',
      },
      fontFamily: {
        pop: "'Poppins'",
      },
    
    },
  },
  plugins: [],
}
