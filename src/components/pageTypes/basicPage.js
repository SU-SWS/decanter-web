import React from "react";
import { Container, GlobalFooter, IdentityBar } from "decanter-react";
import Sidebar from "../partials/sidebar";
/**
 * The Footer component is referenced and used in the Layout component.
 * It incorporates the Local Footer and Global Footer, based on page settings.
 */

const BasicPage = ({ children, ...props }) => (
  <>
    <IdentityBar />
    <div className="su-flex su-flex-col su-min-h-screen">
      <main className="su-flex-grow su-flex">
        <Sidebar className="su-w-1/4" />
        <section className="su-w-3/4">
          <Container>{children}</Container>
        </section>
      </main>
      <Container
        element="footer"
        width="full"
        className="su-flex-grow-0 su-relative"
      >
        <GlobalFooter />
      </Container>
    </div>
  </>
);

export default BasicPage;
