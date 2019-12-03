var theContent = {};
const markdownContext = require.context('../content', true, /\.md$/);
markdownContext.keys().forEach(function(filename) {
  theContent[filename] = markdownContext(filename);
});
module.exports = theContent;
