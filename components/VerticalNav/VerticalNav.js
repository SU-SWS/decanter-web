import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { Group } from './VerticalNav.Group';
import { Item } from './VerticalNav.Item';

/**
 * Vertical Nav Component.
 *
 * For displaying sidebar navigation. This navigation only shows an expanded
 * tree of navigation down to the active item. It does not expand the tree on
 * non active path branches.
 */
const VerticalNavRoot = ({
  menu,
  className,
  showNestedLevels,
  activeClasses,
  ...props
}) => (
  <nav
    className={dcnb('su-vertical-nav su-relative', className)}
    {...props}
    aria-label="Section Menu"
  >
    <Group
      menuTree={menu}
      showNestedLevels={showNestedLevels}
      activeClasses={activeClasses}
    />
  </nav>
);
VerticalNavRoot.displayName = 'VerticalNav';

// Bind them.
// -----------------------------------------------------------------------------

export const VerticalNav = Object.assign(VerticalNavRoot, { Item, Group });

// Prop Types.
// -----------------------------------------------------------------------------

VerticalNavRoot.propTypes = {
  /**
   * The css class name to add to the nav element.
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),

  /**
   * The css classes to add to the link element when active.
   */
  activeClasses: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),

  /**
   * The menu tree.
   *
   * This is an array of objects with the following properties:
   *
   * - `link`: The link component or anchor element to render in the list. (required)
   *
   * - `id`: A unique identifier for the item for use with React.
   *
   * - `children`: An array of children objects. Children objects have the same shape as this object.
   *
   * - `active`: A boolean indicating if the item is active.
   */
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.node.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
      active: PropTypes.bool,
    })
  ).isRequired,

  /**
   * Force showing the children as expanded.
   */
  showNestedLevels: PropTypes.bool,
};