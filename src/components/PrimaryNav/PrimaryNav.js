import React, { useEffect } from 'react';
import Navigation from '../../../content/_settings/navigation.yml';
import Components from '../../../content/_settings/kss.json';
import Link from 'next/link';
import { useRouter } from 'next/router';

const doExpandThingy = () => {
  const decanterNav = document.getElementById('decanter-nav');
  const actives = decanterNav.querySelectorAll('.su-secondary-nav__item--current');
  if (actives.length) {
    actives.forEach(
      element => {

        // While we have parents go up and add the active class.
        while (element) {
          // End when we get to the parent nav item stop.
          if (element === decanterNav) {
            // Stop at the top most level.
            break;
          }

          // If we are on a LI element we need to add the active class.
          if (element.tagName === 'LI') {
            element.classList.add('su-secondary-nav__item--expanded');
            element.classList.add('active-trail');
          }

          // Always increment.
          element = element.parentNode;
        }
      }
    );
  }
}

/**
 * Search for the active path and add the active class.
 * @param {*} items link items
 * @param {*} key active path key
 */
const setActivePath = (items, key) => {
  items.map((item) => dynamicActiveSearch(item, key));
}

/**
 * Search for the active path and add the active class.
 * @param {*} item link item
 * @param {*} key active path key
 */
function dynamicActiveSearch(item, key) {
  item.class = ['su-secondary-nav__link'];
  if (item.path && item.path == key) {
    item.class.push('su-secondary-nav__item--current');
  }

  if (item.children) {
    item.children.map((item) => dynamicActiveSearch(item, key));
  }
}

const PrimaryNav = () => {
  const pages = Navigation.nav_items;
  const components = Components.items;
  components.map((item) => {
    item.path = `${item.path.replace(/\/+$/, '')}/`;
    item.children.map((child1) => {
      child1.path = `${child1.path.replace(/\/+$/, '')}/`;
      child1.children.map((child2) => {
        child2.path = `${child2.path.replace(/\/+$/, '')}/`;
      });
    });
    return item;
  });

  const items = pages.concat(components);
  const { isReady, asPath } = useRouter();
  setActivePath(items, asPath);

  useEffect(() => {
    const decanterNav = document.getElementById('decanter-nav');
    const actives = decanterNav.querySelectorAll('.su-secondary-nav__item')
    actives.forEach(
      element => {
        element.classList.remove('su-secondary-nav__item--expanded');
        element.classList.remove('su-secondary-nav__item--current');
        element.classList.remove('active-trail');
      }
    );

    if (isReady && window) {
      setActivePath(items, asPath);
      doExpandThingy();
    }

  }, [isReady, asPath, items]);

  return (
    <>
      <nav className="decanter-nav no-js" aria-label="main menu" id="decanter-nav">
        <ul className="su-secondary-nav__menu-lv1 su-secondary-nav__menu">
          {items.map((item, index) => (
            <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv1-" + index}>
              <a className={item?.class?.join(' ')} href={item.path}>{item.label}</a>
              {item.children && (
                <ul className="su-secondary-nav__menu-lv2 su-secondary-nav__menu">
                  {item.children.map((lv2, index2) => (
                    <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv2-" + index2}>
                      <a className={lv2?.class?.join(' ')} href={lv2.path}>{lv2.label}</a>
                      {lv2.children && (
                        <ul className="su-secondary-nav__menu-lv3 su-secondary-nav__menu">
                          {lv2.children.map((lv3, index3) => (
                            <li className="su-secondary-nav__item" key={"lv3-" + index3}>
                              <a className={lv3?.class?.join(' ')} href={lv3.path}>{lv3.label}</a>
                              {lv3.children && (
                                <ul className="su-secondary-nav__menu-lv4 su-secondary-nav__menu">
                                  {lv3.children.map((lv4, index4) => (
                                    <li className="su-secondary-nav__item" key={"lv4-" + index4}>
                                      <a className={lv4?.class?.join(' ')} href={lv4.path}>{lv4.label}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default PrimaryNav;
