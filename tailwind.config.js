/**
 * Tailwind Configuration.
 */

const path = require("path");

// Path to Decanter v7 Tailwind plugins
const decanter = path.resolve(__dirname, "node_modules/decanter/src/plugins");

// Path to custom Tailwind plugins for SAA
const dir = path.resolve(__dirname, "src/tailwind/plugins");

module.exports = {
  mode: "jit",
  prefix: "su-",

  purge: {
    content: [
      "./src/**",
      "./public/**",
      "./node_modules/decanter-react/dist/**",
      "./.cache/**",
    ],
  },
  theme: {
    borderRadius: require(decanter + "/theme/borderRadius.js")(),
    borderWidth: require(decanter + "/theme/borderWidth.js")(),
    colors: require(decanter + "/theme/colors.js")(),
    fontFamily: require(decanter + "/theme/fontFamily.js")(),
    fontSize: require(decanter + "/theme/fontSize.js")(),
    fontWeight: require(decanter + "/theme/fontWeight.js")(),
    gap: require(decanter + "/theme/gap.js")(),
    height: require(decanter + "/theme/height.js")(),
    lineHeight: require(decanter + "/theme/lineHeight.js")(),
    maxHeight: require(decanter + "/theme/maxHeight.js")(),
    maxWidth: require(decanter + "/theme/maxWidth.js")(),
    screens: require(decanter + "/theme/screens.js")(),
    spacing: require(decanter + "/theme/spacing.js")(),
    transitionDuration: require(decanter + "/theme/transitionDuration.js")(),
    width: require(decanter + "/theme/width.js")(),
    // Decanter Custom.
    decanter: require(decanter + "/theme/decanter.js")(),

    // SAA themes extending our Decanter ones
    extend: {
      colors: require(dir + "/theme/colors.js")(),
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-children"),
    require("tailwindcss-interaction-variants"),

    // @tailwind base;
    require(decanter + "/base/base.js")(),
    require(dir + "/base/base.js")(),

    // @tailwind components;
    require(decanter + "/components/form/input-base.js")(),
    require(decanter + "/components/lists/lists.js")(),
    require(decanter + "/components/layout/centered-container.js")(),
    require(decanter + "/components/layout/grid-gap.js")(),
    require(decanter + "/components/logo/logo.js")(),
    require(decanter + "/components/media/embed-container.js")(),
    require(decanter +
      "/components/responsive-spacing/responsive-spacing.js")(),
    require(decanter + "/components/skiplink/skiplink.js")(),
    require(decanter + "/components/tables/borderless.js")(),
    require(decanter + "/components/typography/modular-typography.js")(),
    require(decanter + "/components/typography/styles.js")(),
    require(decanter + "/components/typography/wysiwyg.js")(),
    require(dir + "/components/underline/custom-underline.js")(),
    require(dir + "/components/underline/link-underline.js")(),
    require(dir + "/components/shadow/text-shadow.js")(),

    // @tailwind utilities;
    require(decanter + "/utilities/accessibility/accessibility-hidden.js")(),
    require(decanter + "/utilities/link/link.js")(),
    require(decanter + "/utilities/link/link-fontweight.js")(),
    require(decanter + "/utilities/scrolling/smooth-scroll.js")(),
    require(dir + "/utilities/gradient-border/gradient-border.js")(),
  ],
};
