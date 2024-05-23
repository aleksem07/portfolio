import styles from "/src/styles/components/footer.module.scss";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import AllRightsReserved from "./all-rights-reserved";
import Contacts from "./contacts";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <header>
        <h4>Get in Touch With Us</h4>
        <Link
          rel="stylesheet"
          to="mailto:<aleksem07@gmail.com?subject=Frontend&body=Привет!"
        >
          aleksem07@gmail.com
        </Link>
      </header>
      <div>
        <Logo />
        <p>Belgorod</p>
        <div>
          <Link to="tel:-79102244000">+7(910)22-44-000</Link>
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
