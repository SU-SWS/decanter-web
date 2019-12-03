import { useRouter } from 'next/router';
import TheContent  from '../../scripts/getAllContent.js';
import Layout from '../../components/layouts/TwoCol.js';

/**
 * [Post description]
 * @param {[type]} props [description]
 */
const Page = props => {
  const title = props.page.attributes.title;
  const router = useRouter();
  const MyContent = TheContent[router.query.id].react;

  return (
    <Layout content=<MyContent /> title={title} />
  )
}

/**
 * [getInitialProps description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
Page.getInitialProps = async function(context) {
  var myInfo = false;
  const { id } = context.query;
  if (TheContent[id]) {
    myInfo = TheContent[id];
  }
  else {
    return { page: {attributes: {title: "Undefined"}, component: 'undefined'}};
  }

  return {
    page: {attributes: myInfo.attributes, component: myInfo}
  }
}

export default Page;
