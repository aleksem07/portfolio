import styles from "/src/styles/components/promo.module.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../../common/routes";
import { useTranslation } from "react-i18next";

const Promo = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.promo}>
      <h2 className={styles.promo__title}>{t("promo.title")}</h2>
      <Link className="button" to={ROUTES.WORKS}>
        {t("buttons.explore_works")}
      </Link>
    </section>
  );
};

export default Promo;
