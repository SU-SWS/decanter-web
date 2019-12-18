const hljs = require('highlight.js');
const prettifyHtml = require('prettify-html')

const Variant = (props) => {
  var mkd = <div dangerouslySetInnerHTML={{ __html: props.data.markup.default }} />;
  const markup = <div dangerouslySetInnerHTML={{ __html: hljs.highlight('html', prettifyHtml(props.data.markup.default)).value}} />;
  return (
    <section className="component__variant">
      <header className="component__variant-info">
        <p className="component__variant-name"><code>{props.data.name}</code></p>
        <p>{props.data.description}</p>
      </header>
      <section className="component__variant-demo">
        {mkd}
      </section>
      <section className="component__variant-markup">
        <h3>Example Markup</h3>
        <pre>
          <code className="language-html hljs">
          {markup}
          </code>
        </pre>
      </section>
    </section>
  );
}

export default Variant;
