var sassdoc = require('sassdoc');
var opts = {
  "theme": "./sassdoc-theme",
  "package": "./node_modules/decanter/package.json",
  "src": "./node_modules/decanter/core/src/scss/",
  "dest": "./public/docs/scss"
};
sassdoc(opts.src, opts);
