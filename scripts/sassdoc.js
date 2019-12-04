var sassdoc = require('sassdoc');
var opts = {
  "src": "./node_modules/decanter/core/src/scss/",
  "dest": "./public/docs/scss"
};
sassdoc(opts.src, opts);
