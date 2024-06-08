import styles from "@/styles/components/about-me.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutMe = () => {
  const t = useTranslations("about-page");

  return (
    <section className={styles.about_me}>
      <h2 className={styles.about_me__title}>{t("about.title")}</h2>
      <Image
        className={styles.about_me__image}
        src="/me2.jpg"
        alt="my photo"
        width={500}
        height={500}
      />
    </section>
  );
};

export default AboutMe;
