import React from "react";
import { dcnb } from "cnbuilder";
import { Link } from "gatsby";

const Logo = ({ className, ...props }) => (
  <h2 className={dcnb("su-bg-black", className)}>
    <Link to="/">Decanter</Link>
  </h2>
);

export default Logo;
