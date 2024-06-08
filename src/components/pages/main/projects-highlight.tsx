import Link from "next/link";
import ROUTES from "@/common/routes";
import styles from "/src/styles/components/project-highlight.module.scss";
import Works from "@/components/works-list/works-list";
import { useTranslations } from "next-intl";
import BackgroundBall from "@/components/background-ball";

const ProjectsHighlight = () => {
  const t = useTranslations();

  return (
    <section className={styles.projects}>
      <BackgroundBall left="71%" top="-11%" />
      <h2 className={styles.projects__title}>{t("projects.block.title")}</h2>
      <Link
        className={`${styles.projects__button} button button__transparent`}
        href={ROUTES.WORKS}
      >
        {t("buttons.project")}
      </Link>
      <Works isMainPage={true} />
    </section>
  );
};

export default ProjectsHighlight;
