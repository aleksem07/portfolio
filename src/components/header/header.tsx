"use client";
import styles from "@/styles/components/header.module.scss";
import Logo from "../logo/logo";
import ChooseLang from "../choose-lang";
import NavLinks from "@/common/nav-links";
import { useRouter, usePathname } from "next/navigation";

const Header: React.FC = () => {
  const NAV_LINKS = NavLinks();
  const router = useRouter();
  const pathname = usePathname();
  const pathnameFiltered = pathname
    .replace(/^\/[a-z]{2}(\/|$)/, "/")
    .toLowerCase();

  const handleChange = (href: string) => {
    router.push(`${href}`);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <ChooseLang />
      <nav
        className={`${styles.header_nav} ${styles.nav}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className={styles.nav_list}>
          {NAV_LINKS.map(link => (
            <li className={`${styles.nav_item}`} key={link.name}>
              <button
                onClick={() => handleChange(link.href)}
                className={`${
                  pathnameFiltered === link.href ? styles.nav_item_active : ""
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
