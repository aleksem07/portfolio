import { Link } from "react-router-dom";
import ROUTES from "../../../common/routes";
import styles from "/src/styles/components/project-higlight.module.scss";
import { useTranslation } from "react-i18next";
import Works from "../../works/works";

const ProjectsHighlight = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.projects}>
      <h2 className={styles.projects__title}>{t("projects.block.title")}</h2>
      <Link
        className={`${styles.projects__button} button button__transparent`}
        to={ROUTES.WORKS}
      >
        {t("buttons.project")}
      </Link>
      <Works />
    </section>
  );
};

export default ProjectsHighlight;
