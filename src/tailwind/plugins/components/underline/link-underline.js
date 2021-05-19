/**
 * Add/remove underline for links within an element
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      ".link-no-underline a": {
        textDecoration: "none",
      },
    };

    addComponents(components);
  };
};
