const Variant = (props) => {
  var mkd = <div dangerouslySetInnerHTML={{ __html: props.data.markup }} />;
  return (
    <section className="component__variant">
      <header className="component__variant-info">
        <p><strong>{props.data.name}</strong><br />
        {props.data.description}</p>
      </header>
      <section className="component__centered">
        {mkd}
      </section>
    </section>
  );
}

export default Variant;
