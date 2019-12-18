import React from 'react';
import Link from 'next/link';
import Navigation from '../../../content/_settings/navigation.yml';
import Components from '../../../content/_settings/kss.json';
// import ActivePath from 'decanter/core/src/js/components/nav/ActivePath';

/**
 * [dynamicAsLink description]
 * @param  {[type]} item          [description]
 * @param  {[type]} index         [description]
 * @param  {String} [test="page"] [description]
 * @return {[type]}               [description]
 */
function dynamicAsLink(item, index, test = "page") {

  var parts = item.path.split("/");
  if (parts[1] == test) {
    item.path = "/" + test + "/[id]";
    item.as = "/" + test + "/" + parts[2] + "/";
    item.id = parts[2];
  }

  if (item.children) {
    item.children.map((item2, index2) => dynamicAsLink(item2, index2, test))
  }
}

/**
 * [dynamicActiveSearch description]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
function dynamicActiveSearch(item, key) {
  item.class = ['su-secondary-nav__link'];

  if (item.id == key) {
    item.class.push('su-secondary-nav__item--current');
  }

  if (item.children) {
    item.children.map((item) => dynamicActiveSearch(item, key));
  }
}

Navigation.nav_items.map((item, index) => dynamicAsLink(item, index, 'page'));
Components.items.map((item, index) => dynamicAsLink(item, index, 'component'));
Components.items.map((item, index) => dynamicAsLink(item, index, 'page'));

class PrimaryNav extends React.Component {

  /**
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount() {
    var decanterNav = document.getElementById('decanter-nav');
    let actives = decanterNav.querySelectorAll('.su-secondary-nav__item--current');
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
   * [setActivePath description]
   * @param {[type]} items [description]
   */
  setActivePath(items) {
    var key = this.props.id;
    items.map((item) => dynamicActiveSearch(item, key));
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    var pages = Navigation.nav_items;
    var components = Components.items;
    var items = pages.concat(components);
    this.setActivePath(items);

    return (
      <>
        <nav className="decanter-nav no-js" aria-label="main menu" id="decanter-nav">
          <ul className="su-secondary-nav__menu-lv1 su-secondary-nav__menu">
            {items.map((item, index) => (
              <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv1-" + index}>
                <Link href={item.path} as={item.as}>
                  <a className={item.class.join(' ')}>{item.label}</a>
                </Link>
                {item.children && (
                  <ul className="su-secondary-nav__menu-lv2 su-secondary-nav__menu">
                    {item.children.map((lv2, index2) => (
                      <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv2-" + index2}>
                        <Link href={lv2.path} as={lv2.as}>
                          <a className={lv2.class.join(' ')}>{lv2.label}</a>
                        </Link>
                        {lv2.children && (
                          <ul className="su-secondary-nav__menu-lv3 su-secondary-nav__menu">
                            {lv2.children.map((lv3, index3) => (
                              <li className="su-secondary-nav__item" key={"lv3-" + index3}>
                                <Link href={lv3.path} as={lv3.as}>
                                  <a className={lv3.class.join(' ')}>{lv3.label}</a>
                                </Link>
                                {lv3.children && (
                                  <ul className="su-secondary-nav__menu-lv4 su-secondary-nav__menu">
                                    {lv3.children.map((lv4, index4) => (
                                      <li className="su-secondary-nav__item" key={"lv4-" + index4}>
                                        <Link href={lv4.path} as={lv4.as}>
                                          <a className={lv4.class.join(' ')}>{lv4.label}</a>
                                        </Link>
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
}

export default PrimaryNav;
