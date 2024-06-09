import AboutMe from "./about-me";
import Courses from "./courses";
import MyStack from "./my-stack";
import Link from "next/link";
import ROUTES from "@/common/routes";
import { useTranslations } from "next-intl";
import styles from "@/styles/components/about-page.module.scss";

const AboutPage = () => {
  const t = useTranslations();

  return (
    <section className={styles.about_page}>
      <AboutMe />
      <Link className={`button ${styles.about_button}`} href={ROUTES.CONTACTS}>
        {t("buttons.contact")}
      </Link>
      <MyStack />
      <Courses />
    </section>
  );
};

export default AboutPage;
