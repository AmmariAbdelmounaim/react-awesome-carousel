/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inset-arrow': 'inset 0 0 0 0.2rem rgb(25,25,25)',
        'inset-arrow-hover': 'inset 0 0 0 0.2rem rgb(230, 230, 230)',
        'inset-active-dot-enabled': 'inset 0 0 0 0.2rem rgb(230, 230, 230)',
        'inset-active-dot-disabled': 'inset 0 0 0 0.2rem rgb(25,25,25)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.touch-pan-y': {
          'touch-action': 'pan-y',
        },
        '.touch-pinch-zoom': {
          'touch-action': 'pinch-zoom',
        },
        '.touch-pan-y-pinch-zoom': {
          'touch-action': 'pan-y pinch-zoom',
        },
        '.transform-translate3d': {
          transform: 'translate3d(0, 0, 0)',
        },
        '.tap-highlight-custom': {
          '-webkit-tap-highlight-color': 'rgba(230, 230, 230, 0.5)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
