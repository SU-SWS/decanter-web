import React from "react";
import SbEditable from "storyblok-react";
import { Container, GlobalFooter } from "decanter-react";
import CreateBloks from "../../utilities/createBloks";

/**
 * The Footer component is referenced and used in the Layout component.
 * It incorporates the Local Footer and Global Footer, based on page settings.
 */

const Footer = ({ blok: { localFooter }, blok }) => (
  <SbEditable content={blok}>
    <Container
      element="footer"
      width="full"
      className="su-flex-grow-0 su-relative"
    >
      <CreateBloks blokSection={localFooter} />
      <GlobalFooter
        color="black"
        className={{ "su-bg-black": false, "su-bg-saa-black": true }}
      />
    </Container>
  </SbEditable>
);

export default Footer;
