// eslint-disable-next-line import/no-cycle
import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './VerticalNav.Item';

/**
 *
 * @param {*} param0
 * @returns
 */
export const Group = ({
  menuTree,
  className,
  showNestedLevels,
  activeClasses,
  ...props
}) => {
  // Sort menu tree by 

  return (
    <ul
      className={
        className ||
        'su-nav-group su-list-none su-p-0 children:su-border-t children:su-border-solid children:su-border-cool-grey children:children:su-text-21 su-absolute su-sticky'
      }
      {...props}
    >
      {menuTree.map((group) => (
        <>
          {group.link && (
            <Item
              key={group.id || group.link.href || group.link.to}
              element={group.link}
              //active={group.active}
              items={group.children}
              showNestedLevels={showNestedLevels}
              activeClasses={activeClasses}
            />
          )}
        </>
      ))}
    </ul>
  );
};

Group.displayName = 'VerticalNav.Group';

// Prop Types.
// -----------------------------------------------------------------------------

Group.propTypes = {
  /**
   * Class name for the group.
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
  menuTree: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.node.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
      active: PropTypes.bool,
    })
  ).isRequired,

  /**
   * Show nested levels by forcing them to be expanded.
   */
  showNestedLevels: PropTypes.bool,
};