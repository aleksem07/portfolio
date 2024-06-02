import AboutMe from "./about-me";
import FollowMe from "./follow-me";
import Teaching from "./teaching";
import TitlePage from "@/app/title-page";

import styles from "@/styles/components/about-page.module.scss";

const AboutPage = () => {
  return (
    <section className={styles.about_page}>
      <AboutMe />
      <Teaching />
      <FollowMe />
    </section>
  );
};

export default AboutPage;
