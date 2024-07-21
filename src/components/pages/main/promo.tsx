import styles from "/src/styles/components/promo.module.scss";
import Link from "next/link";
import ROUTES from "@/common/routes";

const Promo = () => {
  return (
    <section className={styles.promo}>
      <h2 className={styles.promo__title}>
        {"Разработка динамичных и адаптивных веб-сайтов для вашего бизнеса."}
      </h2>
      <Link className="button" href={ROUTES.WORKS}>
        {"Посмотреть работы"}
      </Link>
    </section>
  );
};

export default Promo;
