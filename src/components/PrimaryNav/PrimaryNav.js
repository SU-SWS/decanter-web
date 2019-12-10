import Navigation from '../../../content/_settings/navigation.yml';

const PrimaryNav = (props) => {
  var items = Navigation.nav_items;
  return (
    <>
      <nav className="su-secondary-nav su-secondary-nav--buttons-dark no-js" aria-label="main menu">
        <ul className="su-secondary-nav__menu-lv1 su-secondary-nav__menu">
          {items.map((item, index) => (
            <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv1-" + index}>
              <a className="su-secondary-nav__link" href={item.href}>{item.text}</a>
              {item.children && (
                <ul className="su-secondary-nav__menu-lv2 su-secondary-nav__menu">
                  {item.children.map((lv2, index2) => (
                    <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv2-" + index2}>
                      <a className="su-secondary-nav__link" href={lv2.href}>{lv2.text}</a>
                      {lv2.children && (
                        <ul className="su-secondary-nav__menu-lv3 su-secondary-nav__menu">
                          {lv2.children.map((lv3, index3) => (
                            <li className="su-secondary-nav__item" key={"lv3-" + index3}>
                              <a className="su-secondary-nav__link" href={lv3.href}>{lv3.text}</a>
                              {lv3.children && (
                                <ul className="su-secondary-nav__menu-lv4 su-secondary-nav__menu">
                                  {lv3.children.map((lv4, index4) => (
                                    <li className="su-secondary-nav__item" key={"lv4-" + index4}>
                                      <a className="su-secondary-nav__link" href={lv4.href}>{lv4.text}</a>
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
