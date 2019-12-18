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
        <section className="component__description">
          <h2>Description</h2>
          {description}
        </section>

      <section className="component__default">
        <header>
          <p><button className="fullwidth-toggle su-button--secondary"><i> </i>Toggle fullwidth view</button></p>
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
            return <Variant key={val.name} data={val} />;
          })}
      </section>
      : ''}

    </section>
    </>
  );
};

export default KSSComponent;
