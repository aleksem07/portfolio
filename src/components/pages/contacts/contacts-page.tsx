import GetInTouchWithMe from "./get-in-touch-with-me";
import City from "@/components/city";
import Phone from "@/components/phone";
import Email from "@/components/email";
import Image from "next/image";
import styles from "@/styles/components/contacts-page.module.scss";

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <GetInTouchWithMe />
      <Image
        src="/note.png"
        className=""
        alt="Developer`s photo"
        width={1148}
        height={636}
      />
      <City />
      <Phone />
      <Email />
    </section>
  );
};

export default ContactsPage;
