/** @type {import('tailwindcss').Config} */
module.exports = {
  theme:{
    extend:{
      screens:{
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl':'1280px'
      }
    }
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
};