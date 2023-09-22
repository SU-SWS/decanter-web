import Layout from '../src/components/layouts/TwoCol.js';
import fileContent from '../content/index.md';
const Home = () => {
  var cont = <div dangerouslySetInnerHTML={{ __html: fileContent.html }} suppressHydrationWarning />;
  return (
    <Layout content={cont} />
  )
}
export default Home;