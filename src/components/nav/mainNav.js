import React from "react";
import { Link } from "gatsby";

/**
 * The Footer component is referenced and used in the Layout component.
 * It incorporates the Local Footer and Global Footer, based on page settings.
 */

const MainNav = (props) => (
  <nav>
    <ul>
      <li>
        <Link to="/about/">About</Link>
        <ul>
          <li>
            <Link to="/about/projects-use-decanter/">
              Projects that use Decanter
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/why-decanter/">Why Decanter</Link>
        <ul>
          <li>
            <Link to="/why-decanter/accessibility">Accessibility</Link>
          </li>
          <li>
            <Link to="/why-decanter/usability">Usability</Link>
          </li>
          <li>
            <Link to="/why-decanter/brand-compliance">Brand Compliance</Link>
          </li>
          <li>
            <Link to="/why-decanter/get-started">Get Started Quickly</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/use-decanter/">Use Decanter</Link>
        <ul>
          <li>
            <Link to="/use-decanter/designer/">As a Designer</Link>
          </li>
          <li>
            <Link to="/use-decanter/developer/">As a Developer</Link>
            <ul>
              <li>
                <Link to="/use-decanter/developer/get-started">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/use-decanter/developer/build-tools">
                  Build Tools
                </Link>
              </li>
              <li>
                <Link to="/use-decanter/developer/browser-compatibility">
                  Browser Compatibility
                </Link>
              </li>
              <li>
                <Link to="/use-decanter/developer/code-standards">
                  Code Standards
                </Link>
              </li>
              <li>
                <Link to="/use-decanter/developer/starter-projects">
                  Starter Projects
                </Link>
              </li>
              <li>
                <Link to="/use-decanter/developer/supported-versions">
                  Supported Versions
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/identity-design/">Identity + Design</Link>
        <ul>
          <li>
            <Link to="/identity-design/identity/">Identity</Link>
          </li>
          <li>
            <Link to="/identity-design/typography/">Typography</Link>
          </li>
          <li>
            <Link to="/identity-design/color/">Color</Link>
          </li>
          <li>
            <Link to="/identity-design/icons/">Icons</Link>
          </li>
          <li>
            <Link to="/identity-design/forms/">Forms</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contribute/">Contribute to Decanter</Link>
        <ul>
          <li>
            <Link to="/contribute/technical">
              Technical Contribution Guidelines
            </Link>
          </li>
          <li>
            <Link to="/contribute/visual">Visual Guidelines</Link>
          </li>
          <li>
            <Link to="/contribute/governance">Governance</Link>
          </li>
          <li>
            <Link to="/contribute/connect">Connecting with the community</Link>
          </li>
          <li>
            <Link to="/contribute/system">Design System</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/code/">Code</Link>
        <ul>
          <li>
            <Link to="/code/release-notes/">Release Notes</Link>
          </li>
          <li>
            <Link to="/code/react/">React</Link>
          </li>
          <li>
            <Link to="/code/twig/">Twig</Link>
          </li>
          <li>
            <Link to="/code/">Layouts</Link>
          </li>
          <li>
            <Link to="/code/grid-system/">Grid System</Link>
          </li>
          <li>
            <Link to="/code/modular-spacing/">Modular Spacing</Link>
          </li>
          <li>
            <Link to="/code/responsive-design/">Responsive Design</Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default MainNav;
