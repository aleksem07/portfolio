import styles from "@/styles/components/about-me.module.scss";

import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/common/routes";

const AboutMe = () => {
  return (
    <section className={styles.about_me}>
      <h2 className={styles.about_me__title}>
        {"Моя цель — сделать работу так, чтобы вы остались довольны."}
      </h2>
      <Image
        className={styles.about_me__image}
        src="/me2.jpg"
        alt="Фото разработчика"
        width={500}
        height={500}
      />
      <Link className={`button ${styles.about_button}`} href={ROUTES.CONTACTS}>
        {"Контакты"}
      </Link>
    </section>
  );
};

export default AboutMe;
