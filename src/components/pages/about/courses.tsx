import styles from "@/styles/components/courses.module.scss";
import CoursesArray from "@/common/courses";
import Image from "next/image";
import Link from "next/link";


const Courses = () => {

  const COURSES = CoursesArray();

  return (
    <section className={styles.courses}>
      <h2 className={styles.courses__title}>{"title-courses"}:</h2>

      <ul className={styles.courses__list}>
        {COURSES.map(
          ({ http, id, image, name, course, desc, language, date }) => {
            return (
              <li className={styles.courses__item} key={id}>
                <Link
                  className={styles.courses__link_image}
                  href={image}
                  target="_blank"
                  title="открыть"
                >
                  <Image
                    className={styles.courses__image}
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                  />
                </Link>
                <div className={styles.courses__container}>
                  <h3 className={styles.courses__name}>{name}</h3>
                  <p className={styles.courses__language}>
                    {"language"}: <span>{language}</span>
                  </p>
                  <p className={styles.courses__date}>{date}</p>
                  <h4 className={styles.courses__subtitle}>{course}</h4>
                  <p className={styles.courses__desc}>{desc}</p>
                  <Link
                    className={styles.courses__details}
                    href={http}
                    target="_blank"
                    title="подробнее"
                  >
                    {"details"}
                  </Link>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Courses;
