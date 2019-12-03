const Logo = () => (
  <>
  <span className="brand-logo"><a href="/">Decanter</a></span>
  <style jsx>{`
    .brand-logo {
      font-size: 1.953125em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin-left: -2px;
      color: #ffffff;
      font-weight: 700;
      display: block;
      vertical-align: middle;
      line-height: 69px;
      -ms-grid-row: 1;
      -ms-grid-column: 1;
    }
    .brand-logo a {
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
    }
  `}
  </style>
  </>
);

export default Logo;
