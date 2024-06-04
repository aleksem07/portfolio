import GetInTouchWithMe from "./get-in-touch-with-me";
import City from "@/components/city";
import Phone from "@/components/phone";
import Email from "@/components/email";
import Contacts from "@/components/footer/contacts";
import styles from "@/styles/components/contacts-page.module.scss";
import ParallaxComponent from "@/app/parallax";

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <GetInTouchWithMe />
      <ParallaxComponent
        img="/note.png"
        speed={20}
        className="h-[150px] mb-24"
      />
      <div className={styles.contacts__container}>
        <Phone />
        <Email />
        <City />
      </div>
      <Contacts className="justify-center" classIcon="w-[40px] h-[40px]" />
    </section>
  );
};

export default ContactsPage;
