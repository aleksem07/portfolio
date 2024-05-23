import styles from "/src/styles/components/header.module.scss";
import NAV_LINKS from "../../common/nav-links";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.header_logo} href="/">
        &lt;aleksem07 /&gt;
      </a>
      <nav
        className={`${styles.header_nav} ${styles.nav}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className={styles.nav_list}>
          {NAV_LINKS.map(link => (
            <li className={`${styles.nav_item}`} key={link.name}>
              <a
                className={`${link.active ? styles.nav_item_active : ""}`}
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
