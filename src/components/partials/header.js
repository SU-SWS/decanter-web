import React from "react";
import SbEditable from "storyblok-react";
import { Container, Skiplink } from "decanter-react";

/**
 * The Header component is referenced and used in the Layout component.
 * It incorporates the Local Header and the skip link, based on page settings.
 */

const Header = ({ blok }) => (
  <SbEditable content={blok}>
    <Container element="header" width="full" className="su-relative su-z-20">
      <Skiplink />
    </Container>
  </SbEditable>
);

export default Header;
