/**
 * SAA custom base styles extending Decanter 7 base
 */

module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      a: {
        color: config("theme.colors.digital-red.light"),

        "&:hover, &:focus": {
          color: config("theme.colors.cardinal-red.DEFAULT"),
        },
      },
      ".su-global-footer": {
        ".su-logo": {
          "&:hover, &:focus": {
            color: config("theme.colors.white"),
          },
        },
        nav: {
          a: {
            textDecoration: "none",

            "&:hover, &:focus": {
              textDecoration: "underline",
            },
          },
        },
      },
    });
  };
};
