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
    { params: { id: '' } },
  ];

  // Pages.
  var files = glob.sync('content/_pages/*.md');
  files.forEach(function(filename) {
    var key = filename.replace("content/_pages/", "").replace(".md", "");
    paths.push({ params: { id: key } });
  });

  return { paths, fallback: false };
}

/**
 * Get the data.
 */
export const getStaticProps = async ({ params: { id } }) => {
  const props = {};
  const prettifyHtml = require('prettify-html');

  const content = await import(`../../content/_pages/${id}.md`);
  props.attributes = content.attributes;
  props.attributes.title = content.attributes.title ?? "Page Title Missing";
  props.html = content.html;
  return { props };
}


export default Page;
