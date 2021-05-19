import React from "react";
import { Container, GlobalFooter, IdentityBar } from "decanter-react";

/**
 * The Footer component is referenced and used in the Layout component.
 * It incorporates the Local Footer and Global Footer, based on page settings.
 */

const BasicPage = ({ children, ...props }) => (
  <>
    <IdentityBar />
    <div className="su-flex su-flex-col su-min-h-screen">
      <main className="su-flex-grow">
        <Container>{children}</Container>
      </main>
      <Container
        element="footer"
        width="full"
        className="su-flex-grow-0 su-relative"
      >
        <div className="su-bg-black">
          <a href="https://www.netlify.com">
            <img
              src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
              alt="Netlify"
            />
          </a>
        </div>
        <GlobalFooter />
      </Container>
    </div>
  </>
);

export default BasicPage;
