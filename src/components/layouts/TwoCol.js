import HTMLHead from '../partials/global-head.js';
import MastHead from '../MastHead/MastHead.js';
import GlobalFooter from '../GlobalFooter/GlobalFooter.js';
import PrimaryNav from '../PrimaryNav/PrimaryNav.js';
import Logo from '../Logo/Logo.js';
import FooterScripts from '../partials/global-footer-scripts.js';

const Layout = props => (
  <>
  <HTMLHead />
  <MastHead />
  <main>
    <article className="centered-container flex-container">
      <aside className="flex-3-of-12 main-aside">
      <Logo />
      <PrimaryNav />
      <a href="https://www.netlify.com">
        <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" />
      </a>
      </aside>
      <section className="flex-9-of-12">
      {props.title && (
        <h1>{props.title}</h1>
      )}
      {props.content}
      </section>
    </article>
  <GlobalFooter />
  <FooterScripts />
  </main>
  </>
);
export default Layout;
