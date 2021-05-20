import React from "react";
import Logo from "./logo";
import MainNav from "../nav/mainNav";
import { dcnb } from "cnbuilder";

/**
 * The Footer component is referenced and used in the Layout component.
 * It incorporates the Local Footer and Global Footer, based on page settings.
 */

const Sidebar = ({ className, ...props }) => (
  <aside className={dcnb("su-bg-black su-text-white", className)}>
    <Logo />
    <MainNav />
    <a href="https://www.netlify.com">
      <img
        src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
        alt="Netlify"
      />
    </a>
  </aside>
);

export default Sidebar;
