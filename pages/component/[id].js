import React from 'react';
import Layout from '../../src/components/layouts/TwoCol.js';
import KSSComponent from '../../src/components/KSSComponent/KSSComponent.js';
const prettifyHtml = require('prettify-html');

/**
 * ComponentPage
 */
const ComponentPage = ({ data, info, markup, local = null, type = null, ...rest }) => {
  const title = info.header;
  let cont;

  // Special Page Type for grouping pages.
  if (type === "page" ) {
    cont = <div className="content" dangerouslySetInnerHTML={{ __html: markup }} suppressHydrationWarning />;
    return (
      <Layout
        type="page"
        content={cont}
        title={title}
        {...rest}
      />
    );
  }
  // End special page type.

  // COMPONENT PAGE.
  cont = <KSSComponent data={data} info={info} html={markup} local={local} />;

  let twig_source;
  if (info.source_twig) {
    var fp = "https://github.com/SU-SWS/decanter/blob/master/core/src/" + info.source_twig;
    twig_source = <a href={fp}>core/src/{info.source_twig}</a>;
  }
  const fps = "https://github.com/SU-SWS/decanter/blob/master/core/src/scss/components/" + info.source.filename;
  const scss_source = <a href={fps}>core/src/scss/components/{info.source.filename}</a>;
  const hed = (<div className="component__resources">
    <p><strong>SCSS Source:</strong> {scss_source}</p>
    {twig_source ? <p><strong>Twig Source:</strong> {twig_source}</p> : ''}
  </div>);

  return (
    <Layout
      type="page-component"
      content={cont}
      title={title}
      header={hed}
      data={data}
      info={info}
      markup={markup}
      local={local}
    />
  );
}

export default ComponentPage;


/**
 * Parse the nested children objects.
 */
const parseChildren = (items, passed = []) => {
  let ret = passed;

  items.forEach(function (content) {
    // Parse the children first.
    if (content?.children) {
      ret = parseChildren(content.children, ret);
    }

    // If no key just pass back the reference.
    if (!content?.key) {
      return ret;
    }
    ret.push({
      params: {
        id: content.key,
        label: content.label,
        path: content.path
      }
    });
  });

  return ret;
}

/**
 * Set the paths.
 */
export const getStaticPaths = async () => {
  const theComponents = await import('../../content/_settings/kss.json');
  const items = theComponents.items;

  // Constructed paths.
  let paths = [
    { params: { id: 'simple' } },
    { params: { id: 'composite' } },
    { params: { id: 'identity' } },
  ];
  paths = parseChildren(items, paths);
  return { paths, fallback: false };
}

/**
 * Export data
 */
export const getStaticProps = async ({ params: { id } }) => {
  // Special Pages
  if (['simple', 'composite', 'identity'].includes(id)) {
    const pageData = await import(`../../content/_pages/${id}.md`);
    return {
      props: {
        type: 'page',
        data: pageData.default,
        info: {
          header: id.charAt(0).toUpperCase() + id.slice(1),
        },
        markup: pageData.html,
        local: {}
      }
    };
  }

  // Setup defaults.
  let componentData, componentInfo, componentMarkup = { default: {} };
  let localContent = {};

  try {
    componentData = await import(`../../content/_kss/data/${id}.json`);
  }
  catch(err) {
    console.warn('Could not find kss json data file for', id);
  }

  try {
    componentInfo = await import(`../../content/_kss/info/${id}.json`);
  }
  catch(err) {
    console.warn('Could not find kss json info file for', id);
  }

  try {
    componentMarkup = await import(`../../content/_kss/markup/${id}.html`);
  }
  catch(err) {
    console.warn('Could not find markup html file for', id);
    componentMarkup = { default: componentInfo.default?.markup };
  }

  try {
    const localData = await import(`../../content/_components/${id}.md`);
    localContent = localData.attributes;
    localContent.body = localData.html;
  }
  catch(err) {
    console.warn('Could not find local content component markdown file for', id);
  }

  if (componentInfo.default?.modifiers) {
    console.log('Modifiers', componentInfo.default.modifiers);
    const modPromises = [];
    componentInfo.default.modifiers.forEach(function(mod, index) {
        modPromises.push(import(`../../content/_kss/markup/${id}-${mod.className}.html`));
    });

    const modPromisesResolved = await Promise.allSettled(modPromises);
    modPromisesResolved.forEach(function(mod, index) {
      if (mod.status === 'fulfilled') {
        componentInfo.default.modifiers[index].markup = prettifyHtml(mod.value.default);
      }
      else {
        componentInfo.default.modifiers[index].markup = prettifyHtml(componentMarkup.default);
      }
    });
  }

  return {
    props: {
      data: componentData.default,
      info: componentInfo.default,
      markup: prettifyHtml(componentMarkup.default),
      local: localContent
    }
  };
}
