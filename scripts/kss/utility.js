const path = require('path');
const fs = require('fs');
const kss = require('kss');
const scss_path = path.resolve(__dirname, '../../node_modules/decanter/core/src/scss/components');
var data = {};

/**
 * [description]
 * @param  {[type]} stringToConvert [description]
 * @return {[type]}                 [description]
 */
data.stringToClassName = function(stringToConvert) {
  if (typeof stringToConvert === 'string') {
    return stringToConvert.trim().replace(/[\s-_]+/g, '-').replace(/[^\w-]|^-|-$/g, '-').replace(/-+(?=-)/, '-').toLowerCase();
  }
};

/**
 * [description]
 * @return {[type]} [description]
 */
data.fetchData = async function() {
  var styleguide = await kss.traverse(scss_path, { mask: '*.scss' });
  return styleguide;
}

/**
 * [description]
 * @return {[type]} [description]
 */
data.fetchSections = async function() {
  var ret = {};
  var styleguide = await data.fetchData();
  styleguide.data.sections.forEach(function(section) {
    const slug = data.stringToClassName(section.reference());
    ret[slug] = section;
  });
  return await ret;
}

/**
 * [description]
 * @return {[type]} [description]
 */
data.getNavItems = async function() {
  var styleguide = await data.fetchData();
  var sections = styleguide.sections();
  var tl_sections = {};

  var x = 1;
  while (sections[x]) {
    var key = sections[x].reference().split(".").shift();
    var ref = sections[x].referenceNumber().split(".").shift();
    tl_sections[key.toLowerCase()] = {
      label: key,
      ref: ref
    };
    x++;
  }

  // Stub out the first page.
  var items = {
    items: [
      {
        path: "/page/components",
        label: "Components",
        children: []
      }
    ]
  };

  // Add the section headings for the nav.
  Object.keys(tl_sections).forEach(function(key) {
    items.items[0].children.push({
      path: '/component/' + key,
      label: tl_sections[key].label,
      key: key,
      children: []
    })
  });

  // The components.
  Object.keys(sections).forEach(function(key) {
    var ref = sections[key].referenceNumber().split(".").shift();
    ref--;
    const slug = data.stringToClassName(sections[key].reference());
    var label =
      sections[key].referenceNumber()
      + " "
      + sections[key].header();

    items.items[0].children[ref].children.push({
      path: '/component/' + slug,
      label: label,
      key: slug
    });
  });

  return items;
}

module.exports = data;
