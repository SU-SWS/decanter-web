const hljs = require('highlight.js');
import Alert from '../Alert/Alert.js';
import Variant from '../Variant/Variant.js';

const KSSComponent = (props) => {
  let example = "DATA MISSING";
  let markup = "DATA MISSING";
  let description = <div dangerouslySetInnerHTML={{ __html: props.kssdata.description }} />;
  let twig_source;
  if (props.kssdata.source_twig) {
    var fp = "https://github.com/SU-SWS/decanter/blob/master/core/src/" + props.kssdata.source_twig;
    twig_source = <a href={fp}>core/src/{props.kssdata.source_twig}</a>;
  }
  var fps = "https://github.com/SU-SWS/decanter/blob/master/core/src/scss/components/" + props.kssdata.source.filename;
  let scss_source = <a href={fps}>core/src/scss/components/{props.kssdata.source.filename}</a>;

  if (props.markup) {
    example = <div dangerouslySetInnerHTML={{ __html: props.markup }} />;
    markup = <div dangerouslySetInnerHTML={{ __html:
      hljs.highlight('html', props.markup).value
    }} />;
  };
  let variants = props.variants || [];

  return (
  <>
    <article className="component">
      {props.kssdata.deprecated || props.kssdata.experimental ? <Alert deprecated={props.kssdata.deprecated} experimental={props.kssdata.experimental} /> : '' }
      <section>
        <div className="component__description">
        <h2>Description</h2>
        {description}
        </div>
        <div className="component__resources">
          <h2>Source Files</h2>
          <p><strong>SCSS Path:</strong> {scss_source}</p>
          {twig_source ? <p><strong>Twig Path:</strong> {twig_source} </p> : ''}
        </div>
        <div className="component__example">
          <h2>Default Render</h2>
          {example}
        </div>
        <div className="component__modifiers">
          <h2>Modifiers</h2>
          {variants.map((val) => {
            return <Variant data={val} />;
          })}
        </div>
        <div className="component__markup">
        <h2>Source Markup</h2>
          <pre>
            <code className="language-html hljs">
            {markup}
            </code>
          </pre>
        </div>
        <p>Additional notes go here.</p>
      </section>
    </article>
  </>
  );
};

export default KSSComponent;
