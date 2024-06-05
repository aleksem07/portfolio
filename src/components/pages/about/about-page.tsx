import AboutMe from "./about-me";
import Teaching from "./teaching";
import MyStack from "./my-stack";

import styles from "@/styles/components/about-page.module.scss";

const AboutPage = () => {
  return (
    <section className={styles.about_page}>
      <AboutMe />
      <MyStack />
      <Teaching />
    </section>
  );
};

export default AboutPage;
