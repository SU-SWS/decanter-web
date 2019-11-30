import NavData from '../../content/navigation/primary-nav.json';
import Link from 'next/link';

const PrimaryNav = props => (
  <>
    <nav className={`${NavData.modifier_class} su-main-nav no-js`} aria-label="main menu">
      <button class="su-main-nav__toggle" aria-expanded="false">Menu</button>
      <ul className="su-main-nav__menu-lv1">
        {NavData.list_items.map(item => (
          <li>
            <Link href={item.href}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default PrimaryNav;
