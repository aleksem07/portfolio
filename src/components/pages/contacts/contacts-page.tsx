import GetInTouchWithMe from "./get-in-touch-with-me";
import Phone from "@/components/phone";
import Email from "@/components/email";
import styles from "@/styles/components/contacts-page.module.scss";
import ParallaxComponent from "@/app/parallax";
import Link from "next/link";

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <h3 className="text-center mb-8 text-xl font-semibold">
        Пожалуйста, свяжитесь со мной любым удобным способом
      </h3>
      <div className={styles.contacts__container}>
        <div>
          phone: <Phone />
        </div>
        <div>
          email: <Email />
        </div>
        <div>
          telegram:
          <Link
            className={styles.telegram}
            href={"https://t.me/aleksem07"}
            target="_blank"
          >
            @aleksem07
          </Link>
        </div>
        <div>
          whatsApp:
          <Link
            className={styles.telegram}
            href={"https://wa.me/+79066066444"}
            target="_blank"
          >
            @aleksem07
          </Link>
        </div>
        <div>
          viber:
          <Link
            className={styles.telegram}
            href={"https://viber.click/79066066444"}
            target="_blank"
          >
            @aleksem07
          </Link>
        </div>
        <div>
          github:
          <Link
            className={styles.telegram}
            href={"https://github.com/aleksem07"}
            target="_blank"
          >
            aleksem07
          </Link>
        </div>
      </div>

      <ParallaxComponent
        img="/parallax-contacts.jpg"
        speed={20}
        className="h-[150px] mb-24"
      />

      <GetInTouchWithMe />
    </section>
  );
};

export default ContactsPage;
