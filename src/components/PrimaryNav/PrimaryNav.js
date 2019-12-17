import Link from 'next/link';
import Navigation from '../../../content/_settings/navigation.yml';
import Components from '../../../content/_settings/kss.json';

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
    item.as = "/" + test + "/" + parts[2];
  }

  if (item.children) {
    item.children.map((item2, index2) => dynamicAsLink(item2, index2, test))
  }
}

Navigation.nav_items.map((item, index) => dynamicAsLink(item, index, 'page'));
Components.items.map((item, index) => dynamicAsLink(item, index, 'component'));
Components.items.map((item, index) => dynamicAsLink(item, index, 'page'));

const PrimaryNav = (props) => {
  var pages = Navigation.nav_items;
  var components = Components.items;
  var items = pages.concat(components);
  return (
    <>
      <nav className="su-secondary-nav no-js" aria-label="main menu">
        <ul className="su-secondary-nav__menu-lv1 su-secondary-nav__menu">
          {items.map((item, index) => (
            <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv1-" + index}>
              <Link href={item.path} as={item.as}>
                <a className="su-secondary-nav__link">{item.label}</a>
              </Link>
              {item.children && (
                <ul className="su-secondary-nav__menu-lv2 su-secondary-nav__menu">
                  {item.children.map((lv2, index2) => (
                    <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv2-" + index2}>
                      <Link href={lv2.path} as={lv2.as}>
                        <a className="su-secondary-nav__link">{lv2.label}</a>
                      </Link>
                      {lv2.children && (
                        <ul className="su-secondary-nav__menu-lv3 su-secondary-nav__menu">
                          {lv2.children.map((lv3, index3) => (
                            <li className="su-secondary-nav__item" key={"lv3-" + index3}>
                              <Link href={lv3.path} as={lv3.as}>
                                <a className="su-secondary-nav__link">{lv3.label}</a>
                              </Link>
                              {lv3.children && (
                                <ul className="su-secondary-nav__menu-lv4 su-secondary-nav__menu">
                                  {lv3.children.map((lv4, index4) => (
                                    <li className="su-secondary-nav__item" key={"lv4-" + index4}>
                                      <Link href={lv4.path} as={lv4.as}>
                                        <a className="su-secondary-nav__link">{lv4.label}</a>
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

export default PrimaryNav;
