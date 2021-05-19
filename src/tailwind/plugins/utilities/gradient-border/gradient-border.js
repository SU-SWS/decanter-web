/**
 * Custom gradient border styles
 */
module.exports = function () {
  return function ({ addUtilities }) {
    const newUtilities = {
      ".gradient-border": {
        borderImageSlice: "1",
      },
      ".border-to-r-palo-verde-dark-to-saa-electric-blue": {
        borderImageSource: "linear-gradient(to right, #017E7C, #505EEC)",
      },
      ".border-to-rt-palo-verde-dark-to-saa-electric-blue": {
        borderImageSource: "linear-gradient(to right top, #017E7C, #505EEC)",
      },
      ".no-gradient-border": {
        borderImageSource: "none",
      },
    };

    addUtilities(newUtilities);
  };
};
