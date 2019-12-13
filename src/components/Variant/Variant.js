const Variant = (props) => {
  var mkd = <div dangerouslySetInnerHTML={{ __html: props.data.markup }} />;
  return (
    <div className="component__variant">
      <div className="component__variant-info">
        <p><strong>{props.data.name}</strong><br />
        {props.data.description}</p>
      </div>
      <div className="component__centered">
        {mkd}
      </div>
    </div>
  );
}

export default Variant;
