import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { containerElements, containerWidths } from './Container.levers';

/**
 * Container component with width and HTML element options.
 *
 */
const Container = ({
  className,
  element,
  width,
  children,
  ...props
}) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (element && containerElements.includes(element)) {
    Element = element;
  }

  // props.width
  if (width && containerWidths.includes(width)) {
    switch (width) {
      case 'full':
        levers.width = 'su-w-full'; // width: 100%
        break;

      case 'screen':
        levers.width = 'su-w-screen'; // width: 100vw
        break;

      case 'site':
        levers.width = 'su-cc';
        break;

      default:
      // none.
    }
  }

  return (
    <Element className={dcnb(levers.width, className)} {...props}>
      {children}
    </Element>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Container.propTypes = {
  /**
   * Which HTML element?
   */
  element: PropTypes.oneOf(containerElements),
  width: PropTypes.oneOf(containerWidths),
  children: PropTypes.node,
  /**
   * Custom CSS classes, e.g., to control position
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Container.defaultProps = {
  element: 'div',
  width: 'site',
};

export default Container