import Layout from '../../src/components/layouts/TwoCol.js';

/**
 * Page pages.
 **/
const Page = ({ attributes, html, ...rest}) => {

  const title = attributes.title;
  const cont = <div className="content" dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <Layout
      type="page"
      content={cont}
      title={title}
      {...rest}
    />
  )
}

/**
 * Set the paths.
 */
export const getStaticPaths = async () => {
  const glob = require("glob");
  const path = require('path');
  const fs = require('fs');

  // Hard coded paths.
  const paths = [
    { params: { id: 'test' } },
    { params: { id: 'test1' } },
    { params: { id: 'test2' } },
    { params: { id: 'test3' } },
  ];

  // Pages.
  // var files = glob.sync('content/_pages/*.md');
  // files.forEach(function(filename) {
  //   var key = filename.replace("content/_pages/", "").replace(".md", "");
  //   pages['/page/' + key] = { page: '/page/[id]', query: { id: key } };
  // });

  return { paths, fallback: false };
}

/**
 * Get the data.
 */
export const getStaticProps = ({params: { id }}) => {
  const props = {};
  props.attributes = {};
  props.attributes.title = id;
  props.html = "<p>Test</p>";
  return { props };

}


export default Page;
