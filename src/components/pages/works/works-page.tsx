import styles from "@/styles/components/works.module.scss";
import WorksList from "@/components/works-list/works-list";

const WorksPage = () => {
  return (
    <section>
      <WorksList className={styles.works} />
    </section>
  );
};

export default WorksPage;
