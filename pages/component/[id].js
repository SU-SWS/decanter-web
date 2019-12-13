import { useRouter } from 'next/router';
import Layout from '../../src/components/layouts/TwoCol.js';
import KSSComponent from '../../src/components/KSSComponent/KSSComponent.js';
const prettifyHtml = require('prettify-html')
const path = require('path');
const twig = require('twig');
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

  // We got a page instead. Render that and quit.
  if (props.page) {
    title = props.page.attributes.title;
    cont = <div dangerouslySetInnerHTML={{ __html: props.page.html }} />;
    return (
      <Layout
        type="page-component"
        content={cont}
        title={title}
        header={hed}
      />
    )
  }

  // We should have KSS data at this point.
  title = props.kssdata.header;
  cont = <KSSComponent kssdata={props.kssdata} markup={props.markup} variants={props.variants} />;

  let twig_source;
  if (props.kssdata.source_twig) {
    var fp = "https://github.com/SU-SWS/decanter/blob/master/core/src/" + props.kssdata.source_twig;
    twig_source = <a href={fp}>core/src/{props.kssdata.source_twig}</a>;
  }
  var fps = "https://github.com/SU-SWS/decanter/blob/master/core/src/scss/components/" + props.kssdata.source.filename;
  let scss_source = <a href={fps}>core/src/scss/components/{props.kssdata.source.filename}</a>;
  var hed = <div className="component__resources">
    <p><strong>SCSS Source:</strong> {scss_source}</p>
    {twig_source ? <p><strong>Twig Source:</strong> {twig_source}</p> : ''}
  </div>;

  return (
    <Layout
      content={cont}
      title={title}
      header={hed}
    />
  );
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
    // We found a KSS entry. Let's do stuff with it.
    component = require(`../../content/_kss/info/${id}.json`);
    data.kssdata = await component;
  }
  // Could be a missing json, or could be a top level group. Check for a page.
  catch(err) {
    const fileContent = await import(`../../content/_pages/${id}.md`);
    data = { page: await fileContent };
    return await data;
  }

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
  var twigg = twig.twig({
    path: twig_path,
    async: true,
    namespaces: { 'decanter': path.join(decanter_src, "templates/") }
  });

  data.markup = await twigg.render(schema);
  data.markup = prettifyHtml(await data.markup);

  data.variants = [];
  component.modifiers.forEach(async function(mod) {
    var mod_schema = schema;
    mod_schema.modifier_class = mod.className;
    var markup = await twigg.renderAsync(mod_schema);
    mod.markup = prettifyHtml(markup);
    data.variants.push(mod);
  });

  if (await data.markup && await data.variants) {
    return data;
  }
};

// ------------------
export default ComponentPage;
