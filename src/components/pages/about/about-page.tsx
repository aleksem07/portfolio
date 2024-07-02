import AboutMe from "./about-me";
import Courses from "./courses";
import MyStack from "./my-stack";
import { useTranslations } from "next-intl";
import styles from "@/styles/components/about-page.module.scss";

const AboutPage = () => {
  const t = useTranslations();

  return (
    <section className={styles.about_page}>
      <AboutMe />
      <MyStack />
      <Courses />
    </section>
  );
};

export default AboutPage;
