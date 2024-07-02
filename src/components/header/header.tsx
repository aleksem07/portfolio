"use client";
import styles from "@/styles/components/header.module.scss";
import Logo from "../logo/logo";
import ChooseLang from "../choose-lang";
import NavLinks from "@/common/nav-links";
import { useRouter, usePathname } from "next/navigation";
import Burger from "@/components/burger";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { setIsOpenNav } from "@/redux/nav-slice/nav-slice";

const Header: React.FC = () => {
  const NAV_LINKS = NavLinks();
  const router = useRouter();
  const pathname = usePathname();
  const pathnameFiltered = `/${
    pathname
      .replace(/^\/[a-z]{2}(\/|$)/, "/")
      .toLowerCase()
      .split("/")[1]
  }`;
  const dispatch = useAppDispatch();
  const navIsOpenNow = useAppSelector(
    (state: RootState) => state.navIsOpen.value
  );

  const handleChange = (href: string) => {
    router.push(`${href}`);
    dispatch(setIsOpenNav(false));
  };

  return (
    <header className={styles.header}>
      <Logo />
      <ChooseLang />
      <Burger />
      <nav>
        <ul
          className={`${styles.nav_list} ${
            navIsOpenNow ? `${styles.nav__open}` : `${styles.nav__close}`
          }`}
        >
          {NAV_LINKS.map(link => (
            <li className={`${styles.nav_item} `} key={link.name}>
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
