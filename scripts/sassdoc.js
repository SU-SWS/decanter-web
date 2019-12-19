var sassdoc = require('sassdoc');
var opts = {
  "package": "./node_modules/decanter/package.json",
  "src": "./node_modules/decanter/core/src/scss/",
  "dest": "./public/docs/scss"
};
sassdoc(opts.src, opts);
