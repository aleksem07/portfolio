import styles from "/src/styles/components/footer.module.scss";
import Logo from "../logo/logo";
import AllRightsReserved from "./all-rights-reserved";
import Contacts from "./contacts";
import Phone from "../phone";
import Email from "../email";
import City from "../city";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <header>
        <h4>Get in Touch With Us</h4>
        <Email />
      </header>
      <div>
        <Logo />
        <City />
        <div>
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
