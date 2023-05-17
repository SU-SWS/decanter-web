/* eslint-disable global-require */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  presets: [
    require('decanter'),
  ],
  theme: {
    extend: {
      colors: {
        black: {
          opacity: {
            80: 'rgba(46, 45, 41, 80%)', // For trip card date block
          },
          'true-opacity': {
            20: 'rgba(0, 0, 0, 20%)', // For use in linear gradients
          },
          '30-opacity': {
            40: 'rgba(192, 192, 191, 40%)', // For card borders
          },
        },
        'masthead-black': {
          top: 'rgba(13, 18, 17, 0.95)',
          bottom: 'rgba(26, 31, 30, 0.85)',
        },
        'saa-black': {
          DEFAULT: '#181D1C',
          dark: '#070B0A',
          opacity: {
            0: 'rgba(24, 29, 28, 0)',
            30: 'rgba(24, 29, 28, 0.3)',
            80: 'rgba(24, 29, 28, 0.8)',
          },
        },
        'digital-red-xlight': '#F83535', // Passed contrast test for black background
        'cardinal-red': {
          xdark: '#7A0000', // Passed contrast test with digital-red-xlight as text
          xxdark: '#541107', // Used for hover/focus color for xdark
        },
        'saa-electric-blue': {
          DEFAULT: '#505EEC',
          light: '#6B77F5',
        },
      },
    },
  },
  plugins: [],
};
