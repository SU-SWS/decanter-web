const path = require('path');
const fs = require('fs');
const del = require('del');
const Twig = require('twig');
const yamlFront = require('yaml-front-matter');
const twigDrupal = require('twig-drupal-filters');
const kss_util = require('./utility.js');
const kss_nav_json = path.resolve(__dirname, '../../content/_settings/kss.json');
const kss_settings_dir = path.resolve(__dirname, '../../content/_kss');
const content_components_dir = path.resolve(__dirname, '../../content/_components');
const decanter_src = path.resolve(__dirname, "../../node_modules/decanter/core/src");

// Add de filters.
twigDrupal(Twig);

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
      function replacer(key,value) {
        if (key==="path") {
          return undefined;
        }
        else {
          return value;
        }
      }
      let source = section.source();
      source.filename = source.filename.replace("node_modules/decanter/core/src/scss/components/", "");
      section.source(source);
      let data = JSON.stringify(section, replacer);
      let filepath = path.join(kss_settings_dir, "info", key + ".json");
      fs.writeFileSync(filepath, data);
    });
  }
);

/**
 * Get the json out of the Decanter project
 * @type {[type]}
 */
del.sync([kss_settings_dir + 'data/*.json']);
del.sync([kss_settings_dir + 'markup/*.html']);
kss_util.fetchSections()
  .then(function(sections) {
    Object.keys(sections).forEach(async function(key) {
      var section = sections[key];
      var markup = section.markup();
      if (markup.match(/(<|>)/g)) {
        return;
      }
      var twig_path = markup.trim().replace(/\.\.\//ig, '');
      var full_twig_path = path.resolve(decanter_src, twig_path);
      var short_path = twig_path.replace(".twig", ".json");
      var full_path = path.join(decanter_src, short_path);
      var dest_path = path.join(kss_settings_dir, 'data', key + '.json');

      // Save the data to file.
      fs.copyFile(full_path, dest_path, (err) => {
        if (err) console.log(err);
      });

      var contents = fs.readFileSync(full_path);
      var schema = JSON.parse(contents);
      var markup = "";
      schema.modifier_class = "[ modifier_class ]";

      var options = {
        ...schema,
        settings: {
          async: false,
          'twig options': {
            namespaces: { decanter: path.join(decanter_src, "templates/") },
            allowAsync: false,
            async: false
          }
        }
      };

      // Render the default markup.
      Twig.renderFile(full_twig_path, options, (err, html) => {
        let filepath = path.join(kss_settings_dir, "markup", key + ".html");
        fs.writeFile(filepath, html, (err2) => { if (err2) { console.log(err2) } } );
      });

      // Render each modifier.
      var modifiers = await section.modifiers();
      modifiers.forEach(function(modifier, index) {
        var modnam = modifier.className();
        var my_options = JSON.parse(JSON.stringify(options));
        my_options.modifier_class = modnam;
        var key = kss_util.stringToClassName(modifier.meta.section.data.reference);
        var component_path = path.join(content_components_dir, key + ".md");
        var component_contents;

        try {
          component_contents = fs.readFileSync(component_path);
          component_contents = yamlFront.loadFront(component_contents);
          if (component_contents.modifier_css) {
            component_contents.modifier_schema = {};
            component_contents.modifier_css.forEach(async function(val) {
              if (val.source_json) {
                component_contents.modifier_schema[val.css_class] = JSON.parse(val.source_json);
              }
            }.catch(function(e) {
              console.log(e);
            }));
          }
        }
        catch(err) {
          component_contents = null;
        }

        // If we have an override merge the override data in with the default.
        if (component_contents && component_contents.modifier_schema && component_contents.modifier_schema[modnam]) {
          my_options = Object.assign(my_options, component_contents.modifier_schema[modnam]);
        }

        // Do the render.
        Twig.renderFile(full_twig_path, my_options, function(err3, html2) {
          let filepath = path.join(kss_settings_dir, "markup", key + "-" + modnam + ".html");
          fs.writeFile(filepath, html2, (err4) => { if (err4) { console.log(err4) } });
        });
      })
    });
  }
);
