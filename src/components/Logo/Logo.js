import Link from 'next/link'

const Logo = () => (
  <>
  <span className="brand-logo"><Link href="/">Decanter</Link></span>
  <style jsx>{`
    .brand-logo {
      display: block;
      font-size: 1.953125em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin-left: 20px;
      padding: 30px 0;
      color: #fff;
      font-weight: 700;
    }
    .brand-logo a {
      color: #fff;
      text-decoration: none;
      font-weight: 700;
    }
  `}
  </style>
  </>
);

export default Logo;
