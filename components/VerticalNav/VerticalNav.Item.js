// eslint-disable-next-line import/no-cycle
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { Group } from './VerticalNav.Group';
import useActivePath from './useActivePath';

/**
 *
 * @param {*} param0
 * @returns
 */
export const Item = ({
  element,
  items,
  active,
  isRoot,
  showNestedLevels,
  className,
  elementClasses,
  activeClasses,
  ...props
}) => {
  const activeClass = [];

  if (active) {
    if (activeClasses) {
      activeClass.push(activeClasses);
    } else {
      activeClass.push(
        'su-text-black su-border-black-90 hocus:su-border-digital-blue-dark'
      );
    }
  } else {
    activeClass.push('su-border-white');
  }

  let linkClasses = dcnb(
    'su-group su-no-underline hocus:su-underline su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark',
    activeClass,
    elementClasses
  );

  linkClasses = element.props.className || linkClasses;
  const LinkObj = React.cloneElement(element, {
    className: linkClasses,
  });

  const router = useRouter();
  let nestLevels = showNestedLevels || false;
  if (router.asPath === LinkObj.props.href) {
    nestLevels = true;
  }

  const inPath = useActivePath(items);

  return (
    <li className={dcnb('su-nav-item su-m-0', className)} {...props}>
      {LinkObj}
      {Array.isArray(items) && (inPath || nestLevels) && (
        <Group
          menuTree={items}
          showNestedLevels={nestLevels}
          activeClasses={activeClasses}
          className="su-list-none su-pb-15 su-pl-20 children:children:su-py-6 children:children:su-text-20"
        />
      )}
    </li>
  );
};

Item.displayName = 'VerticalNav.Item';

// PropTypes
// -----------------------------------------------------------------------------

Item.propTypes = {
  /**
   * className to be added to the list element
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
   * CSS Classes on the link element
   */
  elementClasses: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),

  /**
   * The element to be rendered as the link
   */
  element: PropTypes.element,

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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.node.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
      active: PropTypes.bool,
    })
  ),
  /**
   * Whether or not the item is active
   */
  active: PropTypes.bool,

  /**
   * Show nested levels by forcing the expanded children.
   */
  showNestedLevels: PropTypes.bool,
};