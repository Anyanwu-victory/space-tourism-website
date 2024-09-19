/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      backgroundHeight: {
        "pixel" : "915"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

