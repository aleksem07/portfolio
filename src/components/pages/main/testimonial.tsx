import styles from "/src/styles/components/testimonial.module.scss";

import BackgroundBall from "@/components/background-ball";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <BackgroundBall left="12%" top="-80%" />
      <div className={styles.testimonial__container}>
        <h2 className={styles.testimonial__title}>{"Отзывы"}</h2>
        <blockquote>
          <p className={styles.testimonial__desc}>
            {
              "“Alexey was fantastic to work with from start to finish. We were looking for an outstanding site and it delivered. I tried to develop a website myself, thinking that I would not have to pay money to professional developers, but I was very mistaken. Working with Alexey was worth every penny and was surprisingly affordable! I can't thank Alexey enough for his efforts and professionalism. I would recommend him to anyone looking for a site!”"
            }
          </p>
          <footer className={styles.testimonial__author}>
            - {"Майкл Дэвис"}
          </footer>
        </blockquote>
      </div>
      <div className={styles.testimonial__quotes}></div>
    </section>
  );
};

export default Testimonial;
