import styles from "/src/styles/components/promo.module.scss";
import Link from "next/link";
import ROUTES from "@/common/routes";
import { useTranslations } from "next-intl";

const Promo = () => {
  const t = useTranslations();

  return (
    <section className={styles.promo}>
      <h2 className={styles.promo__title}>{t("promo.title")}</h2>
      <Link className="button" href={ROUTES.WORKS}>
        {t("buttons.explore_works")}
      </Link>
    </section>
  );
};

export default Promo;
