/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        fundo: '#E5D5C6',
        cor_fonte: '#473C38',
        cinza_app: '#D9D9D9',
        marrom: '#473c38d9',
        marrom_hover: '#7A635B',
      },
    },
  },
  plugins: [],
}

