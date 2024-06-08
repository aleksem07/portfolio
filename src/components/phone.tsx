import Link from "next/link";
import CONTACTS from "@/common/contacts";
import styles from "@/styles/components/phone.module.scss";

let phone = "";

CONTACTS.forEach(contact => {
  if (contact.name === "phone") {
    return (phone = contact.link);
  }
});

const phoneFormatted = phone.replace("tel:", "").replace("-", "");

const Phone = () => {
  return (
    <Link className={styles.phone} href={phone}>
      +{phoneFormatted}
    </Link>
  );
};

export default Phone;
