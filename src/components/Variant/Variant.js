const hljs = require('highlight.js');
const prettifyHtml = require('prettify-html')

const Variant = (props) => {
  var mkd = <div dangerouslySetInnerHTML={{ __html: props.data.markup.default }} />;
  const markup = <div dangerouslySetInnerHTML={{ __html: hljs.highlight('html', prettifyHtml(props.data.markup.default)).value}} />;
  return (
    <section className="component__variant">
      <header className="component__variant-info">
        <p><strong>{props.data.name}</strong><br />
        {props.data.description}</p>
      </header>
      <section className="component__centered">
        {mkd}
      </section>
      <section className="component__variant-markup">
        <div className="component__centered">
          <pre>
            <code className="language-html hljs">
            {markup}
            </code>
          </pre>
        </div>
      </section>
    </section>
  );
}

export default Variant;
