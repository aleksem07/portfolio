import Link from "next/link";
import CONTACTS from "@/common/contacts";
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
    <Link className={styles.email} href={email}>
      {mailFormatted}
    </Link>
  );
};

export default Email;
