var ids = [];
const files = require.context('../../../content/_pages', true, /\.md$/);
files.keys().forEach(function(filename) {
  var content = files(filename);
  var key = filename.replace("./", "").replace(".md", "");
  ids.push({key: key, title: content.attributes.title});
});

module.exports = ids;
