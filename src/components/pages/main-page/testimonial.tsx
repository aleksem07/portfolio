import styles from "/src/styles/components/testimonial.module.scss";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.testimonial}>
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
