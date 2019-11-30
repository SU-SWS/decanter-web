const Layout = props => (
  <article className="centered-container">
    {props.header}
    <aside className="flex-3-of-12">
    {props.sidebar}
    </aside>
    <section className="flex-9-of-12">
    {props.content}
    </section>
  </article>
);
export default Layout;
