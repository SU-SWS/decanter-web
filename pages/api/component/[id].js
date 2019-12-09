const kss = require('kss');
const path = require('path');

export default (req, res) => {
  const {
    query: { id },
  } = req;

  // Get and find the matching data.
  kss.traverse('node_modules/decanter/core/src/scss/', { mask: "*.scss" }).then(
    function(styleguide) {
      styleguide.data.sections.forEach(function(section) {
        var key = section.referenceURI();
        if (key == id) {
          res.json(section.toJSON());
          return;
        }
      });
      // Error.
      res.status(422).json({error: true, msg: "Could not find matching key."});
    }
  )
  // Something went wrong.
  .catch(function(err) {
    res.status(422).json({error: err, msg: "something went wrong."});
  });
}
