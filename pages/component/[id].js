import { useRouter } from 'next/router';
import Twig from 'twig';
import Layout from '../../src/components/layouts/TwoCol.js';
import KSSComponent from '../../src/components/KSSComponent/KSSComponent.js';
const prettifyHtml = require('prettify-html')
const path = require('path');
const fs = require('fs');
const decanter_src = "node_modules/decanter/core/src";
const decanter_scss = "node_modules/decanter/core/src/scss/components";

/**
 * [Index description]
 * @param       {[type]} props [description]
 * @constructor
 */
function ComponentPage(props) {
  var cont = "Undefined";
  var title = "Undefined";

  if (!props.page && !props.kssdata) {
    return (
      <Layout
        content=<p>Loading...</p>
        title="Loading"
      />
    )
  }

  if (props.kssdata && props.markup) {
    title = props.kssdata.header;
    cont = <KSSComponent kssdata={props.kssdata} markup={props.markup} variants={props.variants} />;
  }

  if (props.page) {
    title = props.page.attributes.title;
    cont = <div dangerouslySetInnerHTML={{ __html: props.page.html }} />;
  }

  return (
    <Layout
      content={cont}
      title={title}
    />
  )
}

/**
 * [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
ComponentPage.getInitialProps = async function(context) {
  const { id } = context.query;
  var component = false;
  var schema = false;
  var data = {};

  try {
    component = require(`../../content/_kss/info/${id}.json`);
  }
  // Could be a missing json, or could be a top level group. Check for a page.
  catch(err) {
    const fileContent = await import(`../../content/_pages/${id}.md`);
    data = { page: await fileContent };
    return await data;
  }

  // We found a KSS entry. Let's do stuff with it.
  data.kssdata = await component;

  // Sometimes there is straight up markup in the markup.
  try {
    schema = require(`../../content/_kss/data/${id}.json`);
  }
  catch(err) {
    data.markup = await component.markup;
    return await data;
  }

  // But most of the time there is a template.
  const twig_short = await component.markup;
  let twig_path = path.join(decanter_src, twig_short);
  var twigg = await Twig.twig({
    path: twig_path,
    async: true,
    namespaces: { 'decanter': path.join(decanter_src, "templates/") }
  });

  if (await twigg === true) {
    return data;
  }

  data.markup = await twigg.renderAsync(schema);
  data.markup = prettifyHtml(await data.markup);

  data.variants = [];
  component.modifiers.forEach(async function(mod) {
    var mod_schema = schema;
    mod_schema.modifier_class = mod.className;
    var markup = await twigg.renderAsync(mod_schema);
    mod.markup = prettifyHtml(markup);
    data.variants.push(mod);
  });
  return await data;
};

// ------------------
export default ComponentPage;
