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
  return (
    <h1>Hi</h1>
  );
}

/**
 * [description]
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
Index.getInitialProps = async function(context) {
  const { id } = context.query;
  var data = {};
  return await data;
};

// ------------------
export default Index;
