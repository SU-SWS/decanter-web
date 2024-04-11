import Head from 'next/head';
import HTMLHead from '../partials/global-head.js';
import Script from 'next/script.js';
import SkipLink from "../SkipLink/SkipLink.js";
import SkipLinkTarget from "../SkipLinkTarget/SkipLinkTarget.js";
import MastHead from '../MastHead/MastHead.js';
import GlobalFooter from '../GlobalFooter/GlobalFooter.js';
import PrimaryNav from '../PrimaryNav/PrimaryNav.js';
import Logo from '../Logo/Logo.js';

const Layout = ({ type, title, header, content, ...rest }) => {
  return (
    <>
      <>
        <Head>
          <HTMLHead />
          <title>{title}</title>
        </Head>
        <Script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </>
      <SkipLink />
      <MastHead />
      <main className={type}>
        <aside aria-label="left sidebar" id="left-sidebar">
          <Logo />
          <button className="su-main-nav__toggle" aria-expanded="false" id="hamburger">Menu</button>
          <PrimaryNav {...rest} />
          <a href="https://www.netlify.com">
            <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="netlify badge" />
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
        <script async defer src="/dist/js/decanter.js" id="decanter-script" ></script>
      </footer>
    </>
  )
};

export default Layout;
