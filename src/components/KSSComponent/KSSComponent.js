import Alert from '../Alert/Alert.js';
import Variant from '../Variant/Variant.js';

const KSSComponent = ({data, info, html, local = null}) => {
  const hljs = require('highlight.js');
  let description;
  let notes;
  const example = <div dangerouslySetInnerHTML={{ __html: html }} />;
  const markup = <div dangerouslySetInnerHTML={{ __html: hljs.highlight('html', html).value}} />;
  let variants = info?.modifiers || [];
  let defaultDemoStyles, defaultDemoStylesWrapper;

  // If no local data.
  if (!local || !local?.body?.length) {
    description = <div dangerouslySetInnerHTML={{ __html: info.description }} />;
  }
  else if (local?.body) {
    description = <div dangerouslySetInnerHTML={{ __html: local.body }} />;
  }

  // If we have local data. Do more stuff.
  if (local) {
    // Default size of the demo container.
    if (local.egwidth) {
      let defaultDemoStyles = `max-width: ${local.egwidth}`;
    }

    // Background color of the demo container.
    if (local.bgcolor) {
      let defaultDemoStylesWrapper = `background: ${local.bgcolor}`;
    }

    // If there is bottom content notes to add.
    if (local.bottomcontent) {
      notes = <div dangerouslySetInnerHTML={{ __html: local.bottomcontent }} />;
    }

  }

  // THE TEMPLATE.
  return (
    <>
    <style jsx global>{`
      .component__demo {
        ${defaultDemoStylesWrapper}
      }
      .component__demo > div {
        ${defaultDemoStyles}
      }
    `}
    </style>
    {info.deprecated || info.experimental ? <Alert deprecated={info.deprecated} experimental={info.experimental} /> : '' }
    <section className="component">
        <section className="component__description">
          <h2>Description</h2>
          {description}
        </section>

      <section className="component__default">
        <header>
          <h2>Default Style</h2>
        </header>
        <section className="component__demo">
          {example}
        </section>

        <section className="component__markup">
          <h3>Example Markup</h3>
          <pre>
            <code className="language-html hljs">
            {markup}
            </code>
          </pre>
        </section>
      </section>


      {variants.length ?
      <section className="component__modifiers">
        <header>
          <h2>Style Variants</h2>
        </header>
          {variants.map((val) => {
            return <Variant key={val.name} data={val} local={local} />;
          })}
      </section>
      : ''}

      {notes}

    </section>
    </>
  );
};

export default KSSComponent;
