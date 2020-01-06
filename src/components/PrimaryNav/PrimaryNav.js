import React from 'react';
import Navigation from '../../../content/_settings/navigation.yml';
import Components from '../../../content/_settings/kss.json';

/**
 * [dynamicAsLink description]
 * @param  {[type]} item          [description]
 * @param  {[type]} index         [description]
 * @param  {String} [test="page"] [description]
 * @return {[type]}               [description]
 */
function dynamicAsLink(item, index, test = ["page", "component"]) {

  var parts = item.path.split("/");
  if (test.includes(parts[1])) {
    item.path = "/" + parts[1] + "/[id]";
    item.as = "/" + parts[1] + "/" + parts[2] + "/";
    item.id = parts[2];
  }
  else {
    item.as = item.path;
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
  if (item.id && item.id == key) {
    item.class.push('su-secondary-nav__item--current');
  }

  if (item.children) {
    item.children.map((item) => dynamicActiveSearch(item, key));
  }
}

Navigation.nav_items.map((item, index) => dynamicAsLink(item, index));
Components.items.map((item, index) => dynamicAsLink(item, index));

class PrimaryNav extends React.Component {

  doExpandThingy() {
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
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount() {
    this.doExpandThingy();
  }

  // /**
  //  * [routeChangeComplete description]
  //  * @param  {[type]} url [description]
  //  * @return {[type]}     [description]
  //  */
  // componentDidUpdate() {
  //   this.doExpandThingy();
  // }
  //
  //
  // /**
  //  * [shouldComponentUpdate description]
  //  * @param  {[type]} nextProps [description]
  //  * @param  {[type]} nextState [description]
  //  * @return {[type]}           [description]
  //  */
  // refreshNav() {
  //   // this.forceUpdate();
  //   this.setState({});
  // }

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
                  <a className={item.class.join(' ')} href={item.as}>{item.label}</a>
                {item.children && (
                  <ul className="su-secondary-nav__menu-lv2 su-secondary-nav__menu">
                    {item.children.map((lv2, index2) => (
                      <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv2-" + index2}>
                          <a className={lv2.class.join(' ')} href={lv2.as}>{lv2.label}</a>
                        {lv2.children && (
                          <ul className="su-secondary-nav__menu-lv3 su-secondary-nav__menu">
                            {lv2.children.map((lv3, index3) => (
                              <li className="su-secondary-nav__item" key={"lv3-" + index3}>
                                  <a className={lv3.class.join(' ')} href={lv3.as}>{lv3.label}</a>
                                {lv3.children && (
                                  <ul className="su-secondary-nav__menu-lv4 su-secondary-nav__menu">
                                    {lv3.children.map((lv4, index4) => (
                                      <li className="su-secondary-nav__item" key={"lv4-" + index4}>
                                          <a className={lv4.class.join(' ')} href={lv4.as}>{lv4.label}</a>
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
