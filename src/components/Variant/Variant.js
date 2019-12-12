const Variant = (props) => {
  var mkd = <div dangerouslySetInnerHTML={{ __html: props.data.markup }} />;
  return (
    <div className="component__variant">
    <p>Name: {props.data.name}</p>
    <p>{props.data.description}</p>
    {mkd}
    </div>
  );
}

export default Variant;
