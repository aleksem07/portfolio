import Link from "next/link";
import ROUTES from "@/common/routes";
import MyPhoto from "@/components/my-photo/my-photo";
import styles from "/src/styles/components/get-know-me.module.scss";
import { useTranslations } from "next-intl";
import BackgroundBall from "@/components/background-ball";

const GetKnowMe = () => {
  const t = useTranslations();

  return (
    <section className={styles.get_know_me}>
      <BackgroundBall left="15%" top="-30%" />
      <div className={styles.get_know_me__desc}>
        <h3 className={styles.get_know_me__title}>{t("get_know_me.title")}</h3>
        <p className={styles.get_know_me__text}>{t("get_know_me.text")}</p>
        <Link className="button" href={ROUTES.ABOUT}>
          {t("buttons.about")}
        </Link>
      </div>

      <MyPhoto />
    </section>
  );
};

export default GetKnowMe;
