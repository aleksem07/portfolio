import styles from "@/styles/components/title-page.module.scss";
import BackgroundBall from "@/components/background-ball";

interface ITitlePageProps {
  title: string;
  desc: string;
  project_name?: string;
}

const TitlePage: React.FC<ITitlePageProps> = ({
  title,
  desc,
  project_name = "",
}) => {
  return (
    <div className={styles.title_page}>
      <h2 className={styles.title_page__title}>{title}</h2>
      <p className={styles.title_page__desc}>{`${desc} ${project_name}`}</p>
      <BackgroundBall left="10%" top="-0.5%" />
    </div>
  );
};

export default TitlePage;
