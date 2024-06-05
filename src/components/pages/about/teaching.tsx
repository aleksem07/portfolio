import styles from "@/styles/components/teaching.module.scss";

const Teaching = () => {
  return (
    <section className={styles.teaching}>
      <h2 className={styles.teaching__title}>Courses and advanced training:</h2>
      <h2>Курсы и повышение квалификации</h2>

      <ul className={styles.teaching__list}>
        <li className={styles.teaching__item}>tea</li>
        <li>chi</li>
        <li>tch</li>
      </ul>
    </section>
  );
};

export default Teaching;
