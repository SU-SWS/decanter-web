import { useRouter } from 'next/router';
import Twig from 'twig';
import Layout from '../../src/components/layouts/TwoCol.js';
const kss_sections = require('../../src/utility/kssSectionInformation.js');
const path = require('path');
const fs = require('fs');
const kss = require('kss');
const scss_path = 'node_modules/decanter/core/src/scss/components';
const convertStringToClassName = require('../../src/utility/stringToClassName.js');

/**
 * [Index description]
 * @param       {[type]} props [description]
 * @constructor
 */
function Index(props) {
  const cont = `<p>Hello from the future.</p>`;
  const title = "My title";
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
Index.getInitialProps = async function(context) {
  const { id } = context.query;
  var data = {};
  var sections = await kss_sections.fetchSections();
  return await sections;
};

// ------------------
export default Index;
