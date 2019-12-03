import '../partials';
import MastHead from '../MastHead/MastHead.js';
import GlobalFooter from '../GlobalFooter/GlobalFooter.js';
import PrimaryNav from '../PrimaryNav/PrimaryNav.js';
import Logo from '../Logo/Logo.js';

const Layout = props => (
  <>
  <MastHead />
  <main>
    <article className="centered-container flex-container">
      <aside className="flex-3-of-12 main-aside">
      <Logo />
      <PrimaryNav />
      </aside>
      <section className="flex-9-of-12">
      {props.title && (
        <h1>{props.title}</h1>
      )}
      {props.content}
      </section>
    </article>
  <GlobalFooter />
  </main>
  <style jsx>{`
    .main-aside {
      background: rgb(46, 45, 41);
    }
  `}</style>
  </>
);
export default Layout;
