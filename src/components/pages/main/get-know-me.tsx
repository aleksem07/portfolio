import Link from "next/link";
import ROUTES from "@/common/routes";
import MyPhoto from "@/components/my-photo/my-photo";
import styles from "/src/styles/components/get-know-me.module.scss";

import BackgroundBall from "@/components/background-ball";

const GetKnowMe = () => {
  return (
    <section className={styles.get_know_me}>
      <BackgroundBall left="15%" top="-30%" />
      <div className={styles.get_know_me__desc}>
        <h3 className={styles.get_know_me__title}>
          {"Давайте познакомимся поближе"}
        </h3>
        <p className={styles.get_know_me__text}>
          {
            "Я помогу вам сэкономить время и деньги на разработке сайта для вашего бизнеса. В портфолио представлен широкий спектр работ."
          }
        </p>
        <Link className={`button ${styles.about_button}`} href={ROUTES.ABOUT}>
          {"Узнайте больше"}
        </Link>
        <Link
          className={`button ${styles.about_button}`}
          href={ROUTES.CONTACTS}
        >
          {"Контакты"}
        </Link>
      </div>

      <MyPhoto />
    </section>
  );
};

export default GetKnowMe;
