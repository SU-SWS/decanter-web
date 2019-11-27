var kss = require('kss');
var opts = {
  "source": "./node_modules/decanter/core/src/scss/components",
  "destination": "./styleguide/components",
  "css": [
    "css/decanter.css"
  ],
  "js": [
    "js/decanter.js"
  ],
  "builder": "themes/kss/decanter",
  "extend-drupal8": true,
  "namespace": "decanter:node_modules/decanter/core/src/templates",
  "markup": true,
  "nav-depth": 4,
  "title": "Decanter"
};
kss(opts);
