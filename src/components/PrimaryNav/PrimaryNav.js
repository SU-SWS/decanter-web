import NavData from '../../../content/_navigation/primary-nav.json';
import Link from 'next/link';

const PrimaryNav = props => (
  <>
    <nav className="su-secondary-nav su-secondary-nav--buttons-dark no-js" aria-label="main menu">
      <ul className="su-secondary-nav__menu-lv1 su-secondary-nav__menu">
        {NavData.list_items.map((item, index) => (
          <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv1-" + index}>
            <Link href={item.href}>
              <a className="su-secondary-nav__link">{item.text}</a>
            </Link>
            {item.children && (
              <ul className="su-secondary-nav__menu-lv2 su-secondary-nav__menu">
                {item.children.map((lv2, index2) => (
                  <li className="su-secondary-nav__item su-secondary-nav__item--parent" key={"lv2-" + index2}>
                    <Link href={lv2.href}>
                      <a className="su-secondary-nav__link">{lv2.text}</a>
                    </Link>
                    {lv2.children && (
                      <ul className="su-secondary-nav__menu-lv3 su-secondary-nav__menu">
                        {lv2.children.map((lv3, index3) => (
                          <li className="su-secondary-nav__item" key={"lv3-" + index3}>
                            <Link href={lv3.href}>
                              <a className="su-secondary-nav__link">{lv3.text}</a>
                            </Link>
                            {lv3.children && (
                              <ul className="su-secondary-nav__menu-lv4 su-secondary-nav__menu">
                                {lv3.children.map((lv4, index4) => (
                                  <li className="su-secondary-nav__item" key={"lv4-" + index4}>
                                    <Link href={lv4.href}>
                                      <a className="su-secondary-nav__link">{lv4.text}</a>
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

export default PrimaryNav;
