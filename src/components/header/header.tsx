import styles from "/src/styles/components/header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import ChooseLanguage from "../choose-language";
import NavLinks from "../../common/nav-links";

const Header: React.FC = () => {
  const NAV_LINKS = NavLinks();
  return (
    <header className={styles.header}>
      <Logo />
      <ChooseLanguage />
      <nav
        className={`${styles.header_nav} ${styles.nav}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className={styles.nav_list}>
          {NAV_LINKS.map(link => (
            <li className={`${styles.nav_item}`} key={link.name}>
              <Link
                className={`${link.active ? styles.nav_item_active : ""}`}
                to={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
