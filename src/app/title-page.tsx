import styles from "@/styles/components/title-page.module.scss";

interface ITitlePageProps {
  title: string;
  desc: string;
}

const TitlePage: React.FC<ITitlePageProps> = ({ title, desc }) => {
  return (
    <div className={styles.title_page}>
      <h2 className={styles.title_page__title}>{title}</h2>
      <p className={styles.title_page__desc}>{desc}</p>
    </div>
  );
};

export default TitlePage;
