const hljs = require('highlight.js');
import Alert from '../Alert/Alert.js';
import Variant from '../Variant/Variant.js';

const KSSComponent = (props) => {
  const description = <div dangerouslySetInnerHTML={{ __html: props.kssdata.description }} />;
  const example = <div dangerouslySetInnerHTML={{ __html: props.markup }} />;
  const markup = <div dangerouslySetInnerHTML={{ __html: hljs.highlight('html', props.markup).value}} />;

  let variants = props.variants || [];

  // THE TEMPLATE.
  return (
    <>
    {props.kssdata.deprecated || props.kssdata.experimental ? <Alert deprecated={props.kssdata.deprecated} experimental={props.kssdata.experimental} /> : '' }
    <section className="component">
      <section className="component__description fullwidth">
        <div className="component__centered">
          <h2>Description</h2>
          {description}
        </div>
      </section>

      <section className="component__example fullwidth">
        <button className="fullwidth-toggle"><i></i> Toggle fullwidth view</button>
        <h2 className="component__title centered">Default Style</h2>
        <div className="component__centered">
          {example}
        </div>
      </section>

      {variants.length ?
      <section className="component__modifiers">
        <header className="component__centered">
          <h2>Style Variants</h2>
        </header>
          {variants.map((val) => {
            return <Variant key={val.name} data={val} />;
          })}
      </section>
      : ''}

      <section className="component__markup">
        <div className="component__centered">
          <h3>Source Markup</h3>
          <pre>
            <code className="language-html hljs">
            {markup}
            </code>
          </pre>
        </div>
      </section>
    </section>
    </>
  );
};

export default KSSComponent;
