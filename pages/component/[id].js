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

  if (props.kssdata) {
    title = props.kssdata.header;
    cont = <KSSComponent kssdata={props.kssdata} markup={props.markup} />;
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
  var data = {};

  const component = require(`../../content/_kss/info/${id}.json`);
  const schema = require(`../../content/_kss/data/${id}.json`);
  const twig_short = await component.markup;

  // We found a KSS entry. Let's do stuff with it.
  data.kssdata = await component;

  let twig_path = path.join(decanter_src, twig_short);
  var twigg = await Twig.twig({
    path: twig_path,
    namespaces: { 'decanter': path.join(decanter_src, "templates") }
  });
  data.markup = await twigg.render(schema);
  data.markup = prettifyHtml(await data.markup);
  return await data;
};

// ------------------
export default ComponentPage;
