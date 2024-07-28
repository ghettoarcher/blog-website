/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountains-bg' : "url('/src/assets/img/bg-img.jpeg')",
        'car-bg' : "url('/src/assets/img/car.jpg')",
        'card-bg' : "url('/src/assets/img/card.jpg')",
      },
    },
  },
  plugins: [],
}