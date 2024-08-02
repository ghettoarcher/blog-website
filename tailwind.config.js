/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountains-bg' : "url('/src/assets/img/bg-img.jpeg')",
        'car-bg' : "url('/src/assets/img/image-188.svg')",
        'card-bg' : "url('/src/assets/img/card.jpg')",
      },
    },
  },
  plugins: [],
}