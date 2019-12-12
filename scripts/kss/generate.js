const path = require('path');
const fs = require('fs');
const del = require('del');
const kss_util = require('./utility.js');
const kss_nav_json = path.resolve(__dirname, '../../content/_settings/kss.json');
const kss_settings_dir = path.resolve(__dirname, '../../content/_kss');
const decanter_src = path.resolve(__dirname, "../../node_modules/decanter/core/src");

/**
 * Generate the navigation json.
 * @type {[type]}
 */
kss_util.getNavItems()
  .then(function(items) {
    let data = JSON.stringify(items);
    fs.writeFileSync(kss_nav_json, data);
  }
);

/**
 * Generate the KSS sections data json files.
 * @type {[type]}
 */
del.sync([kss_settings_dir + 'info/**', '!' + kss_settings_dir + "info"]);
kss_util.fetchSections()
  .then(function(sections) {
    Object.keys(sections).forEach(function(key) {
      var section = sections[key];
      var markup = section.markup();
      if (!markup.match(/(<|>)/g)) {
        var short_path = markup.trim().replace(/\.\.\//ig, '');
        section.markup(short_path);
        section.custom('source_twig', short_path);
      }
      let data = JSON.stringify(section);
      let filepath = path.join(kss_settings_dir, "info", key + ".json");
      fs.writeFileSync(filepath, data);
    });
  }
);

/**
 * Get the json out of the Decanter project
 * @type {[type]}
 */
del.sync([kss_settings_dir + 'data/**', '!' + kss_settings_dir + "data"]);
kss_util.fetchSections()
  .then(function(sections) {
    Object.keys(sections).forEach(function(key) {
      var section = sections[key];
      var markup = section.markup();
      if (markup.match(/(<|>)/g)) {
        return;
      }
      var short_path = markup.trim().replace(/\.\.\//ig, '').replace(".twig", ".json");
      var full_path = path.join(decanter_src, short_path);
      var dest_path = path.join(kss_settings_dir, 'data', key + '.json');
      fs.copyFile(full_path, dest_path, (err) => {
        if (err) console.log(err);
      });
    });
  }
);
