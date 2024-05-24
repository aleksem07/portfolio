import styles from "/src/styles/components/header.module.scss";
import NAV_LINKS from "../../common/nav-links";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import ChooseLanguage from "../choose-language";

const Header: React.FC = () => {
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
