import AboutMe from "./about-me";
import Courses from "./courses";
import MyStack from "./my-stack";

import styles from "@/styles/components/about-page.module.scss";

const AboutPage = () => {
  return (
    <section className={styles.about_page}>
      <AboutMe />
      <MyStack />
      <Courses />
    </section>
  );
};

export default AboutPage;
