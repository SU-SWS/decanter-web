var theContent = {};
const markdownContext = require.context('../content/_pages', true, /\.md$/);
markdownContext.keys().forEach(function(filename) {
  var key = filename.replace("./", "").replace(".md", "");
  theContent[key] = markdownContext(filename);
});
module.exports = theContent;
