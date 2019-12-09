import { useRouter } from 'next/router';
import Twig from 'twig';
import Layout from '../../src/components/layouts/TwoCol.js';
const path = require('path');
const fs = require('fs');

/**
 * [Index description]
 * @param       {[type]} props [description]
 * @constructor
 */
function Index(props) {
  console.log(props);
  var myContent = "";
  var theContent = "";
  myContent += props.description;
  myContent += props.twig.markup;
  Object.keys(props.twig.variants).forEach(function(key) {
    var val = props.twig.variants[key];
    myContent += val;
  });

  theContent = <div dangerouslySetInnerHTML={{ __html: myContent }} />
  return (
    <Layout title={props.header} content={theContent} />
  );
}

/**
 * [parseTwigTemplate description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
async function parseTwigTemplate(data) {
  var source_dir = path.dirname(data.source.path);
  var twig_dir = path.dirname(data.markup);
  var template_dir = path.resolve(source_dir, twig_dir);
  var template_name = path.basename(twig_dir);
  var template_path = path.join(template_dir, template_name + ".twig");
  var json_path = path.join(template_dir, template_name + ".json");
  let json_data = {};
  if (fs.existsSync(json_path)) {
    var json_raw_data = fs.readFileSync(json_path);
    json_data = JSON.parse(json_raw_data);
  }

  json_data['namespaces'] = { "decanter": path.resolve(__dirname, "../../node_modules/decanter/core/src/templates") };
  const markup = {
    then: function(resolve, _reject) {
      Twig.renderFile(template_path, json_data, (err, html) => {
        resolve(html); // compiled string
      });
    }
  };

  const variants = {
    then: function(resolve, _reject) {
      var renders = {};
      data.modifiers.forEach(async function(modifier) {
        const variant = {
          then: function(res, _rej) {
            json_data.modifier_class = modifier.className;
            Twig.renderFile(template_path, json_data, (err, html) => {
              res(html); // compiled string
            });
          }
        };
        renders[modifier.className] = await variant;
      });
      resolve(renders);
    }
  }

  data.twig = {
    template: template_path,
    data: json_data,
    markup: await markup,
    variants: await variants
  };

  return await data;
}

/**
 * [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
Index.getInitialProps = async function(context) {
  const kss = require('kss');
  const { id } = context.query;
  const styleguide = await kss.traverse('node_modules/decanter/core/src/scss/', { mask: "*.scss" });

  const data = {
    then: function(resolve, _reject) {
      styleguide.data.sections.forEach(function(section) {
        var key = section.referenceURI();
        if (key == id) {
          var res = section.toJSON();
          var res = parseTwigTemplate(res);
          resolve(res);
        }
      });
    }
  };

  return await data;
};

// ------------------
export default Index;
