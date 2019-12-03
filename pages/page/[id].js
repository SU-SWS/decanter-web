import { useRouter } from 'next/router';
import TheContent  from '../../scripts/getAllContent.js';

/**
 * [Post description]
 * @param {[type]} props [description]
 */
const Page = props => {
  const MyContent = props.page.component;
  const title = props.page.attributes.title;
  const router = useRouter();

  return (
    <div>
    <h1>{title}</h1>
    <MyContent />
    </div>
  )
}

/**
 * [getInitialProps description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
Page.getInitialProps = async function(context) {
  console.log(context);
  const { id } = context.query;
  const myInfo = TheContent[id];
  var MyComponent = myInfo.react;
  var MyAttributes = myInfo.attributes;

  return {
    page: {attributes: myInfo.attributes, component: myInfo.react}
  }
}

export default Page;
