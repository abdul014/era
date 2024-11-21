/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform-bg': 'transform, background-color',
        'opacity-transform-filter': 'opacity, transform, filter',
      },
    },
  },
  plugins: [tailwindScrollbar],
};