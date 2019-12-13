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
    <div className="component">
      <div className="component__description fullwidth">
        <div className="component__centered">
          <h2>Description</h2>
          {description}
        </div>
      </div>

      <div className="component__example fullwidth">
        <h3 className="component__title centered">Default Display</h3>
        <div className="component__centered">
          {example}
        </div>
      </div>

      {variants.length ?
      <div className="component__modifiers">
        <div className="component__centered">
          <h3>Display Modifiers</h3>
        </div>
          {variants.map((val) => {
            return <Variant key={val.name} data={val} />;
          })}
      </div>
      : ''}

      <div className="component__markup">
        <div className="component__centered">
          <h2>Source Markup</h2>
          <pre>
            <code className="language-html hljs">
            {markup}
            </code>
          </pre>
        </div>
      </div>
    </div>
    </>
  );
};

export default KSSComponent;
