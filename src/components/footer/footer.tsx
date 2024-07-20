import styles from "/src/styles/components/footer.module.scss";
import Logo from "@/components/logo/logo";
import AllRightsReserved from "./all-rights-reserved";
import Contacts from "./contacts";
import Phone from "@/components/phone";
import Email from "@/components/email";
import City from "@/components/city";


const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__header}>
        <h4 className={styles.footer__title}>{"footer.title"}</h4>
        <Email className={styles.email} />
      </div>
      <div className={styles.footer__body}>
        <Logo />
        <City />
        <div className={styles.footer__body_contacts}>
          <Phone />
          <Contacts />
        </div>
      </div>
      <AllRightsReserved />
    </footer>
  );
};

export default Footer;
