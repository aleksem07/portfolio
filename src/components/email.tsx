import { Link } from "react-router-dom";
import CONTACTS from "../common/contacts";
import styles from "/src/styles/components/footer.module.scss";

let email = "";

CONTACTS.forEach(contact => {
  if (contact.name === "mail") {
    return (email = contact.link);
  }
});

const mailFormatted = email.replace(/mailto:([^?]+).*/, "$1");

const Email = () => {
  return (
    <Link className={styles.email} to={email}>
      {mailFormatted}
    </Link>
  );
};

export default Email;
