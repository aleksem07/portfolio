import styles from "/src/styles/components/testimonial.module.scss";

import BackgroundBall from "@/components/background-ball";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <BackgroundBall left="12%" top="-80%" />
      <div className={styles.testimonial__container}>
        <h2 className={styles.testimonial__title}>{"testimonial.title"}</h2>
        <blockquote>
          <p className={styles.testimonial__desc}>{"testimonial.desc"}</p>
          <footer className={styles.testimonial__author}>
            - {"testimonial.name"}
          </footer>
        </blockquote>
      </div>
      <div className={styles.testimonial__quotes}></div>
    </section>
  );
};

export default Testimonial;
