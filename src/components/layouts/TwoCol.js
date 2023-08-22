import HTMLHead from '../partials/global-head.js';
import SkipLink from "../SkipLink/SkipLink.js";
import SkipLinkTarget from "../SkipLinkTarget/SkipLinkTarget.js";
import MastHead from '../MastHead/MastHead.js';
import GlobalFooter from '../GlobalFooter/GlobalFooter.js';
import PrimaryNav from '../PrimaryNav/PrimaryNav.js';
import Logo from '../Logo/Logo.js';

const Layout = ({ type, title, header, content, ...rest }) => (
  <>
  <HTMLHead />
  <SkipLink />
  <MastHead />
  <main className={type}>
    <aside aria-label="left sidebar" id="left-sidebar">
      <Logo />
      <button className="su-main-nav__toggle" aria-expanded="false" id="hamburger">Menu</button>
      <PrimaryNav {...rest} />
      <a href="https://www.netlify.com">
        <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" />
      </a>
    </aside>
    <section>
      <SkipLinkTarget />
      <article>
        <header>
        {title && (
          <h1>{title}</h1>
        )}
        {header}
        </header>
        {content}
      </article>
    </section>
  </main>
  <footer>
    <GlobalFooter />
  </footer>
  </>
);

export default Layout;
