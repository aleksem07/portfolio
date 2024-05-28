import Link from "next/link";
import ROUTES from "@/common/routes";
import styles from "/src/styles/components/project-highlight.module.scss";
import Works from "@/components/works/works";
import { useTranslations } from "next-intl";

const ProjectsHighlight = () => {
  const t = useTranslations();

  return (
    <section className={styles.projects}>
      <h2 className={styles.projects__title}>{t("projects.block.title")}</h2>
      <Link
        className={`${styles.projects__button} button button__transparent`}
        href={ROUTES.WORKS}
      >
        {t("buttons.project")}
      </Link>
      <Works />
    </section>
  );
};

export default ProjectsHighlight;
