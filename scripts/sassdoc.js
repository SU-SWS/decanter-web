var sassdoc = require('sassdoc');
var opts = {
  "src": "./node_modules/decanter/core/src/scss/",
  "dest": "./styleguide/docs/scss"
};
sassdoc(opts.src, opts);
