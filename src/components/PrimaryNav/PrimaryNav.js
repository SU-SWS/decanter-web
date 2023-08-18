import React from 'react';
import Navigation from '../../../content/_settings/navigation.yml';
import Components from '../../../content/_settings/kss.json';
import Link from 'next/link';

// doExpandThingy() {
//   var decanterNav = document.getElementById('decanter-nav');
//   let actives = decanterNav.querySelectorAll('.su-secondary-nav__item--current');
//   if (actives.length) {
//     actives.forEach(
//       element => {

//         // While we have parents go up and add the active class.
//         while (element) {
//           // End when we get to the parent nav item stop.
//           if (element === decanterNav) {
//             // Stop at the top most level.
//             break;
//           }

//           // If we are on a LI element we need to add the active class.
//           if (element.tagName === 'LI') {
//             element.classList.add('su-secondary-nav__item--expanded');
//             element.classList.add('active-trail');
//           }

//           // Always increment.
//           element = element.parentNode;
//         }
//       }
//     );
//   }
// }


// componentDidMount() {
//   this.doExpandThingy();
// }

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
  if (item.id && item.id == key) {
    item.class.push('su-secondary-nav__item--current');
  }

  if (item.children) {
    item.children.map((item) => dynamicActiveSearch(item, key));
  }
}

const PrimaryNav = ({id}) => {

  var pages = Navigation.nav_items;
  var components = Components.items;
  var items = pages.concat(components);
  setActivePath(items, id);

  return (
    <>
      <nav className="decanter-nav no-js" aria-label="main menu" id="decanter-nav">
        <ul className="su-secondary-nav__menu-lv1 su-secondary-nav__menu">
          {items.map((item, index) => (
            <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv1-" + index}>
                <Link className={item?.class?.join(' ')} href={item.path}>{item.label}</Link>
              {item.children && (
                <ul className="su-secondary-nav__menu-lv2 su-secondary-nav__menu">
                  {item.children.map((lv2, index2) => (
                    <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv2-" + index2}>
                        <Link className={lv2?.class?.join(' ')} href={lv2.path}>{lv2.label}</Link>
                      {lv2.children && (
                        <ul className="su-secondary-nav__menu-lv3 su-secondary-nav__menu">
                          {lv2.children.map((lv3, index3) => (
                            <li className="su-secondary-nav__item" key={"lv3-" + index3}>
                                <Link className={lv3?.class?.join(' ')} href={lv3.path}>{lv3.label}</Link>
                              {lv3.children && (
                                <ul className="su-secondary-nav__menu-lv4 su-secondary-nav__menu">
                                  {lv3.children.map((lv4, index4) => (
                                    <li className="su-secondary-nav__item" key={"lv4-" + index4}>
                                        <Link className={lv4?.class?.join(' ')} href={lv4.path}>{lv4.label}</Link>
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
