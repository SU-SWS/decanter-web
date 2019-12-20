import { useRouter } from 'next/router';
import Twig from 'twig';
import Layout from '../../src/components/layouts/TwoCol.js';
import KSSComponent from '../../src/components/KSSComponent/KSSComponent.js';

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
    cont = <div className="content" dangerouslySetInnerHTML={{ __html: props.page.html }} />;
    return (
      <Layout
        type="page"
        content={cont}
        title={title}
        {...props}
      />
    )
  }

  // We should have KSS data at this point.
  title = props.kssdata.header;
  cont = <KSSComponent {...props} />;

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
      type="page-component"
      content={cont}
      title={title}
      header={hed}
      {...props}
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
  var data = { id: id };

  try {
    // We found a KSS entry. Let's do stuff with it.
    component = require(`../../content/_kss/info/${id}.json`);
    data.kssdata = await component;
  }
  // Could be a missing json, or could be a top level group. Check for a page.
  catch(err) {
    const fileContent = await import(`../../content/_pages/${id}.md`);
    data.page = await fileContent;
  }

  // Sometimes there is straight up markup in the markup.
  try {
    schema = require(`../../content/_kss/data/${id}.json`);
  }
  catch(err) {
    data.markup = await component.markup;;
    return await data;
  }

  var render;
  try {
    render = require(`../../content/_kss/markup/${id}.html`);
  }
  catch(err) {
    console.log(err);
  }

  data.variants = [];
  data.markup = await render.default;
  data.markup = prettifyHtml(data.markup);

  component.modifiers.forEach(async function(mod) {
    var name = mod.className;
    try {
      mod.markup = require(`../../content/_kss/markup/${id}-${name}.html`);
    }
    catch(err) {
      return;
    }
    data.variants.push(mod);
  });

  // Fetch the local editor data to supplement with if available.
  var localContent;
  try {
    localContent = await import(`../../content/_components/${id}.md`);
  }
  catch(err) {
    return data;
  }

  var localData = await localContent.attributes;
  localData.body = localContent.html;
  data.local = await localData;

  return await data;
};

// ------------------
export default ComponentPage;
