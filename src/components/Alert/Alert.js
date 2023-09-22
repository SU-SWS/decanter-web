const Alert = ({deprecated, experimental, msg}) => (
  <div className="su-alert su-alert--warning">
    <div className="su-alert__body">
      {deprecated ? <h4>This component has been deprecated.</h4> : null }
      {experimental ? <h4>This component has experimental features.</h4> : null }
      {msg}
    </div>
  </div>
);

export default Alert;
