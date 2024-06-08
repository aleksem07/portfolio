import styles from "@/styles/components/other-projects.module.scss";
import WorksList from "@/components/works-list/works-list";

const OtherProjects = () => {
  return (
    <div className={styles.other_projects}>
      <h3 className={styles.other_projects__title}>Other Projects</h3>
      <WorksList isMainPage className="flex" />
    </div>
  );
};

export default OtherProjects;
