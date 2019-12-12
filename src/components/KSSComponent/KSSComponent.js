const hljs = require('highlight.js');

const KSSComponent = (props) => {

  const example = <div dangerouslySetInnerHTML={{ __html: props.markup }} />;
  const markup = <div dangerouslySetInnerHTML={{ __html:
      hljs.highlight('html', props.markup).value
  }} />;

  return (
  <>
    <article className="component">
      <div className="su-alert su-alert--warning">
        <div className="su-alert__body">
          <h4>Experimental Component</h4>
        </div>
      </div>
      <header>
        <p>Decanter Version: 6.0</p>
        <p>Deprecated in Version: 5.4</p>
        <p>Browser compatibility: IE11+, Edge, Chrome, FireFox</p>
      </header>
      <section>
        <p>A lockup with the Stanford wordmark logo and department/unit name. It is used in the header of a website and links to the homepage of the department/unit. When building a department lockup, besides the Stanford wordmark, the most obvious element should be the most granular relevant department.</p>
        <div className="component__resources">
          <p>SCSS Path: https://github.com/su-sws/decanter/blob/master/core/src/scss/components/lockup/</p>
          <p>Twig Path: https://github.com/su-sws/decanter/blob/master/core/src/templates/components/lockup/</p>
        </div>
        <div className="component__example">
          {example}
        </div>
        <div className="component__markup">
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
