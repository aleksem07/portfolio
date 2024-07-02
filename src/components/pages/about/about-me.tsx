import styles from "@/styles/components/about-me.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/common/routes";

const AboutMe = () => {
  const t = useTranslations("about-page");
  const t_button = useTranslations("");

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
      <Link className={`button ${styles.about_button}`} href={ROUTES.CONTACTS}>
        {t_button("buttons.contact")}
      </Link>
    </section>
  );
};

export default AboutMe;
