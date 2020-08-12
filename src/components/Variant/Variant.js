const hljs = require('highlight.js');
const prettifyHtml = require('prettify-html');

const Variant = (props) => {
  var mkd = <div dangerouslySetInnerHTML={{ __html: props.data.markup.default }} />;
  const markup = <div dangerouslySetInnerHTML={{ __html: hljs.highlight('html', prettifyHtml(props.data.markup.default)).value}} />;
  var demoStyles = [];
  var demoStylesWrapper = [];
  var notes;
  var description = <p>{props.data.description}</p>;

  // If there is local data.
  if (props.local) {
    if (props.local.egwidth) {
      demoStyles[0] = `max-width: ${props.local.egwidth}`;
    }
  }

  // Find variant data.
  if (props.local && props.local.modifier_css) {
    var modifier;
    // Look through and match keys for data.
    props.local.modifier_css.forEach(function(vals) {
      if (props.data.className == vals.css_class) {
        modifier = vals;
        return;
      }
    });
    // Found some data.
    if (modifier) {

      if (modifier.egwidth) {
        demoStyles[0] = `max-width: ${modifier.egwidth}`;
      }

      if (modifier.bgcolor) {
        demoStylesWrapper[0] = `background: ${modifier.bgcolor}`;
      }

      if (modifier.notes) {
        notes = <div dangerouslySetInnerHTML={{ __html: modifier.notes }} />
      }

      if (modifier.description) {
        description = <div dangerouslySetInnerHTML={{ __html: modifier.description }} />
      }

    }
  }

  demoStyles = demoStyles.join("\n");
  demoStylesWrapper = demoStylesWrapper.join("\n");
  return (
    <>
    <section className="component__variant">
      <header className="component__variant-info">
        <p className="component__variant-name"><code>{props.data.name}</code></p>
        {description}
      </header>
      <section className="component__variant-demo">
      <style jsx>{`
        .component__variant-demo {
          ${demoStylesWrapper}
        }
        .component__variant-demo :global(> div) {
          ${demoStyles}
        }
      `}
      </style>
        {mkd}
      </section>
      {notes ? (
        <section className="component__variant-notes">
          {notes}
        </section>
      ) : ""}
      <section className="component__variant-markup">
        <h3>Example Markup</h3>
        <pre>
          <code className="language-html hljs">
          {markup}
          </code>
        </pre>
      </section>
    </section>
    </>
  );
}

export default Variant;
