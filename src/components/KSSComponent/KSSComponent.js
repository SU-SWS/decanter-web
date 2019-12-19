const hljs = require('highlight.js');
import Alert from '../Alert/Alert.js';
import Variant from '../Variant/Variant.js';

const KSSComponent = (props) => {
  var description;
  var notes;
  const example = <div dangerouslySetInnerHTML={{ __html: props.markup }} />;
  const markup = <div dangerouslySetInnerHTML={{ __html: hljs.highlight('html', props.markup).value}} />;
  let variants = props.variants || [];

  // If no local data.
  if (!props.local || !props.local.body.length) {
    description = <div dangerouslySetInnerHTML={{ __html: props.kssdata.description }} />;
  }

  // If we have local data. Do more stuff.
  if (props.local) {
    var lc = props.local;

    // Default size of the demo container.
    if (lc.egwidth) {
      var defaultDemoStyles = `max-width: ${lc.egwidth}`;
    }

    // Background color of the demo container.
    if (lc.bgcolor) {
      var defaultDemoStylesWrapper = `background: ${lc.bgcolor}`;
    }

    // If there is a body content override.
    if (lc.body) {
      description = <div dangerouslySetInnerHTML={{ __html: lc.body }} />;
    }

    // If there is bottom content notes to add.
    if (lc.bottomcontent) {
      notes = <div dangerouslySetInnerHTML={{ __html: lc.bottomcontent }} />;
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
    {props.kssdata.deprecated || props.kssdata.experimental ? <Alert deprecated={props.kssdata.deprecated} experimental={props.kssdata.experimental} /> : '' }
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
            return <Variant key={val.name} data={val} {...props} />;
          })}
      </section>
      : ''}

      {notes}

    </section>
    </>
  );
};

export default KSSComponent;
