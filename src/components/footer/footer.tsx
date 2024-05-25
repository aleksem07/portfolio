import styles from "/src/styles/components/footer.module.scss";
import Logo from "../logo/logo";
import AllRightsReserved from "./all-rights-reserved";
import Contacts from "./contacts";
import Phone from "../phone";
import Email from "../email";
import City from "../city";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <header className={styles.footer__header}>
        <h4 className={styles.footer__title}>{t("footer.title")}</h4>
        <Email />
      </header>
      <div className={styles.footer__body}>
        <Logo />
        <City />
        <div className={styles.footer__body_contacts}>
          <Phone />
          <Contacts />
        </div>
      </div>
      <footer>
        <AllRightsReserved />
      </footer>
    </footer>
  );
};

export default Footer;
