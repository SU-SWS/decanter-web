const path = require('path');
const fs = require('fs');
const kss = require('kss');
const scss_path = 'node_modules/decanter/core/src/scss/components';
const convertStringToClassName = require('./stringToClassName.js');
var data = {};

data.fetchSections = async function() {
  var ret = {};
  var styleguide = await kss.traverse(scss_path, { mask: '*.scss' });
  styleguide.data.sections.forEach(function(section) {
    const slug = convertStringToClassName(section.reference());
    ret[slug] = section;
  });
  return await ret;
}

data.getNavItems = async function() {
  var sections = this.fetchSections();
  var items = [];
  Object.keys(sections).forEach(function(key) {
    items.push({
      path: '/component/' + key,
      label: sections[key].header()
    })
  });
  return items;
}

module.exports = data;
