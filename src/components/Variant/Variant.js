import hljs from 'highlight.js';

const Variant = ({ data, local, ...rest }) => {
  const renderHtml = data.markup ?? '';
  const highlightedCode = hljs.highlight(renderHtml, { language: 'html' }).value

  const mkd = <div dangerouslySetInnerHTML={{ __html: renderHtml }} />;
  const html = <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
  let demoStylesWrapper = [];
  let demoStyles = [];
  let notes;
  let description = <p>{ data.description }</p>;

  // If there is local data.
  if (local) {
    if (local?.egwidth) {
      demoStyles[0] = `max-width: ${local.egwidth}`;
    }
  }

  // Find variant data.
  if (local && local.modifier_css) {
    var modifier;
    // Look through and match keys for data.
    local.modifier_css.forEach(function(vals) {
      if (data.className == vals.css_class) {
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
        <p className="component__variant-name"><code>{data.name}</code></p>
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
          {html}
          </code>
        </pre>
      </section>
    </section>
    </>
  );
}

export default Variant;
