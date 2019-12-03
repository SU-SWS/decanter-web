import { useRouter } from 'next/router';
import TheContent  from './getAllContent.js';

const Post = props => {
  const MyContent = props.page.component;
  const title = props.page.attributes.title;

  return (
    <div>
    <h1>{title}</h1>
    <MyContent />
    </div>
  )
}

Post.getInitialProps = (query) => {
  const indexKey = "." + query.asPath.replace(".html", ".md");
  const myInfo = TheContent[indexKey];
  var MyComponent = myInfo.react;
  var MyAttributes = myInfo.attributes;

  return {
    page: {attributes: myInfo.attributes, component: MyComponent}
  }
}

export default Post;
