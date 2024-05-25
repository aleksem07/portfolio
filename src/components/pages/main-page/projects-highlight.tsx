import { Link } from "react-router-dom";
import ROUTES from "../../../common/routes";
import placeholder from "/src/assets/placeholder-pic.jpg";
import styles from "/src/styles/components/project-higlight.module.scss";

const ProjectsHighlight = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projects__title}>My Projects Highlight</h2>
      <Link className={`${styles.projects__button} button`} to={ROUTES.WORKS}>
        Explore More
      </Link>
      <ul className={styles.projects__container}>
        <li>
          <img
            src={placeholder}
            className=""
            alt="Developer`s photo"
            width={560}
            height={768}
          />
          <h3>Brand Journey Improvements</h3>
          <ul>
            <li>stack</li>
          </ul>
        </li>
        <li>
          <img
            src={placeholder}
            className=""
            alt="Developer`s photo"
            width={560}
            height={768}
          />
          <h3>Brand Journey Improvements2</h3>
          <ul>
            <li>stack2</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default ProjectsHighlight;
