const path = require('path');
const fs = require('fs');
const kss_util = require('./utility.js');
const kss_nav_json = path.resolve(__dirname, '../../content/_settings/kss.json');

kss_util.getNavItems()
  .then(function(items) {
    let data = JSON.stringify(items);
    fs.writeFileSync(kss_nav_json, data);
  }
);
