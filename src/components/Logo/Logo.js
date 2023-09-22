import Link from 'next/link'

const Logo = () => (
  <>
    <span className="brand-logo">
      <Link className='brand-logo--link' style={{color: '#fff', textDecoration: 'none', fontWeight: 700 }} href="/">Decanter</Link>
    </span>
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
    `}
    </style>
  </>
);

export default Logo;
