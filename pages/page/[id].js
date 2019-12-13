import { useRouter } from 'next/router';
import Layout from '../../src/components/layouts/TwoCol.js';

/**
 * [Post description]
 * @param {[type]} props [description]
 */
const Page = props => {

  if (!props.page.html) {
    <Layout
      content=<p>Loading...</p>
      title="Loading"
    />
  }

  const title = props.page.attributes.title;
  const cont = <div className="content" dangerouslySetInnerHTML={{ __html: props.page.html }} />;
  return (
    <Layout
      type="page"
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
Page.getInitialProps = async function(context) {
  const { id } = context.query;
  const fileContent = await import(`../../content/_pages/${id}.md`);
  return { page: await fileContent };
}

export default Page;
