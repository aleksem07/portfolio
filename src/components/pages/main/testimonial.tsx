import styles from "/src/styles/components/testimonial.module.scss";
import { useTranslations } from "next-intl";
import BackgroundBall from "@/components/background-ball";

const Testimonial = () => {
  const t = useTranslations();

  return (
    <section className={styles.testimonial}>
      <BackgroundBall left="12%" top="-80%" />
      <div className={styles.testimonial__container}>
        <h2 className={styles.testimonial__title}>{t("testimonial.title")}</h2>
        <blockquote>
          <p className={styles.testimonial__desc}>{t("testimonial.desc")}</p>
          <footer className={styles.testimonial__author}>
            - {t("testimonial.name")}
          </footer>
        </blockquote>
      </div>
      <div className={styles.testimonial__quotes}></div>
    </section>
  );
};

export default Testimonial;
