import styles from "/src/styles/components/project-higlight.module.scss";
import Projects from "../../common/projects";
import { Link } from "react-router-dom";
import ROUTES from "../../common/routes";

const Works = () => {
  const PROJECTS = Projects();
  return (
    <ul className={styles.projects__container}>
      {PROJECTS.map(project => {
        return (
          <li key={project.id}>
            <Link to={`${ROUTES.WORKS}/${project.id}`}>
              <img
                src={project.image}
                className=""
                alt={`${project.alt} ${project.title}`}
                width={260}
                height={368}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                <li>stack</li>
              </ul>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Works;
