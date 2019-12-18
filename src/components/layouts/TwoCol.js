import HTMLHead from '../partials/global-head.js';
import SkipLink from "../SkipLink/SkipLink.js";
import SkipLinkTarget from "../SkipLinkTarget/SkipLinkTarget.js";
import MastHead from '../MastHead/MastHead.js';
import GlobalFooter from '../GlobalFooter/GlobalFooter.js';
import PrimaryNav from '../PrimaryNav/PrimaryNav.js';
import Logo from '../Logo/Logo.js';
import FooterScripts from '../partials/global-footer-scripts.js';

const Layout = (props) => (
  <>
  <HTMLHead />
  <SkipLink />
  <MastHead />
  <main className={props.type}>
    <aside aria-label="left sidebar" id="left-sidebar">
      <Logo />
      <PrimaryNav {...props} />
      <a href="https://www.netlify.com">
        <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" />
      </a>
    </aside>
    <section>
      <SkipLinkTarget />
      <article>
        <header>
        {props.title && (
          <h1>{props.title}</h1>
        )}
        {props.header}
        </header>
        {props.content}
      </article>
    </section>
  </main>
  <footer>
    <GlobalFooter />
  </footer>
  <FooterScripts />
  </>
);

export default Layout;
