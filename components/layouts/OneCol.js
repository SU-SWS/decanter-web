import '../partials';
import MastHead from '../MastHead/MastHead.js';
import GlobalFooter from '../GlobalFooter/GlobalFooter.js';

const Layout = props => (
  <>
  <MastHead />
  <div className="centered-container">
    {props.content}
  </div>
  <GlobalFooter />
  </>
);

export default Layout;
