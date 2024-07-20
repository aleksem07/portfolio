import Link from "next/link";
import ROUTES from "@/common/routes";
import styles from "/src/styles/components/project-highlight.module.scss";
import Works from "@/components/works-list/works-list";

import BackgroundBall from "@/components/background-ball";

const ProjectsHighlight = () => {


  return (
    <section className={styles.projects}>
      <BackgroundBall left="71%" top="-11%" />
      <h2 className={styles.projects__title}>{"projects.block.title"}</h2>
      <Link
        className={`${styles.projects__button} button button__transparent`}
        href={ROUTES.WORKS}
      >
        {"buttons.project"}
      </Link>
      <Works isMainPage={true} />
    </section>
  );
};

export default ProjectsHighlight;
