import '../partials';
import MastHead from '../MastHead/MastHead.js';

const Layout = props => (
  <>
  <MastHead />
  <div className="centered-container">
    {props.content}
  </div>
  </>
);

export default Layout;
