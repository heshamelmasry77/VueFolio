/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': { // Moroccan Blue
          '200': '#4B8A8D', // Lighter shade
          '400': '#176F73', // Light shade
          '500': '#044E54', // Default shade (Moroccan Blue)
          '600': '#023D43', // Slightly dark shade
          '700': '#012C32'  // Dark shade
        },
        'secondary': { // Electric Violet
          '200': '#A485E2', // Lighter shade
          '400': '#8342D3', // Light shade
          '500': '#6E0DD0', // Default shade (Electric Violet)
          '600': '#590BB4', // Slightly dark shade
          '700': '#440898'  // Dark shade
        },
        // 'primary': {
        //   '200': '#F2A3A6', // lighter shade of #E63946
        //   '400': '#E8656E',
        //   '500': '#E63946', //  Cinnabar (Deep Red)
        //   '600': '#CF2F36',
        //   '700': '#B0252C', // darker shade of #E63946
        // },
        // 'secondary': {
        //   '200': '#F3F9F6', // lighter shade of #F1FAEE
        //   '400': '#F2F7F2',
        //   '500': '#F1FAEE', // Honeydew
        //   '600': '#D9E8D7',
        //   '700': '#C1D6C1', // darker shade of #F1FAEE
        // }
      },
    },
  },
  plugins: [],
}