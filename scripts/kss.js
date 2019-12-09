const kss = require('kss');
const path = require('path');
kss.traverse(path.resolve(__dirname, '../node_modules/decanter/core/src/scss/'), { mask: "*.scss" }).then(function(styleguide) {
  module.exports = styleguide;
});
