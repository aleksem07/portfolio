import ROUTES from "../../../common/routes";
import { Link } from "react-router-dom";
import MyPhoto from "../../my-photo/my-photo";
import styles from "/src/styles/components/get-know-me.module.scss";
import { useTranslation } from "react-i18next";

const GetKnowMe = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.get_know_me}>
      <div className={styles.get_know_me__desc}>
        <h3 className={styles.get_know_me__title}>{t("get_know_me.title")}</h3>
        <p className={styles.get_know_me__text}>{t("get_know_me.text")}</p>
        <Link className="button" to={ROUTES.ABOUT}>
          {t("buttons.about")}
        </Link>
      </div>

      <MyPhoto />
    </section>
  );
};

export default GetKnowMe;
