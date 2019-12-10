import { useRouter } from 'next/router';
import Layout from '../../src/components/layouts/TwoCol.js';

/**
 * [Post description]
 * @param {[type]} props [description]
 */
const Page = (props) => {
  var cont = `<p>this is my content.</p>`;
  var title = "This is the page title";
  return (
    <Layout
      content={cont}
      title={title}
    />
  )
}


/**
 * [getInitialProps description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
// Page.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const fileContent = await import(`../../content/_pages/${id}.md`);
//   return { page: fileContent };
// }

export default Page;
