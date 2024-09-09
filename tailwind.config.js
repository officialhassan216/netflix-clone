/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(149deg, #192247 0%, #210e17 99.08%)',
      },
    },
  },
 
  plugins: [
    require('flowbite/plugin')
]
}

