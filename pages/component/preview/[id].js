import { useRouter } from 'next/router';
import Twig from 'twig';
import Layout from '../../../src/components/layouts/TwoCol.js';

/**
 * [Index description]
 * @param       {[type]} props [description]
 * @constructor
 */
function Index(props) {
  return (
    <h1>A demo page to showcase the components</h1>
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
