import styles from "@/styles/components/courses.module.scss";
import COURSES from "@/common/courses";
import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  return (
    <section className={styles.teaching}>
      <h2 className={styles.teaching__title}>Courses and advanced training:</h2>
      <h2>Курсы и повышение квалификации</h2>

      <ul className={styles.teaching__list}>
        {COURSES.map(({ http, id, image, name, course, desc, language }) => {
          return (
            <li className={styles.teaching__item} key={id}>
              <Link href={http} target="_blank" title="подробнее">
                <h3>{name}</h3>
                <p>Язык курса: {language}</p>
                <Image
                  className={styles.teaching__image}
                  src={image}
                  alt={name}
                  width={200}
                  height={200}
                />
                <p>{course}</p>
                <p>{desc}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Courses;
