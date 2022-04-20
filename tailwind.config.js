const glob = require("glob");
const path = require("path");

const decanter = path.resolve(__dirname, "node_modules/decanter/src/plugins");

// Import 3rd party tailwind plugins.
let plugins = [
  require("@tailwindcss/aspect-ratio"),
  require('@tailwindcss/forms'),
  require("tailwindcss-children"),
  require("tailwindcss-interaction-variants"),
];
// Load theme customizations.
const theme = {};
const themeFiles = glob.sync(decanter + "/theme/*.js");
themeFiles.forEach((file) => {
  const matches = file.match(/\/([^\/]+).js/);
  const propName = matches[1];
  theme[propName] = require(file);
});

// Prepare safelist for PurgeCSS
const safelist = [];

Object.entries(theme.colors()).forEach(([property, value]) => {
  if (typeof value === "string") {
    safelist.push(`su-bg-${property}`);
    safelist.push(`su-text-${property}`);
  } else if (typeof value === "object") {
    Object.entries(value).forEach(([childProp, childValue]) => {
      if (childProp === "DEFAULT") {
        safelist.push(`su-bg-${property}`);
        safelist.push(`su-text-${property}`);
      } else {
        safelist.push(`su-bg-${property}-${childProp}`);
        safelist.push(`su-text-${property}-${childProp}`);
      }
    });
  }
});

// Load all base plugins from Decanter.
const base = [];
const baseFiles = glob.sync(decanter + "/base/*.js");
baseFiles.forEach((file) => {
  base.push(require(file)());
});
plugins = plugins.concat(base);

// Load all component plugins from Decanter.
const componentFiles = glob.sync(decanter + "/components/**/*.js");
const components = [];
componentFiles.forEach((file) => {
  components.push(require(file)());
});
plugins = plugins.concat(components);

// Load all utility plugins from Decanter.
const utilities = [];
const utilityFiles = glob.sync(decanter + "/utilities/**/*.js");
utilityFiles.forEach((file) => {
  utilities.push(require(file)());
});
plugins = plugins.concat(utilities);

module.exports = {
  mode: "jit",
  prefix: "su-",
  purge: {
    content: ["./src/**"],
    safelist,
  },
  darkMode: false, // or 'media' or 'class'
  theme,
  variants: {
    extend: {},
  },
  plugins,
};