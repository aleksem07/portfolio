import styles from "/src/styles/components/project-highlight.module.scss";
import Projects from "@/common/projects";
import Link from "next/link";
import ROUTES from "@/common/routes";
import Image from "next/image";

const Works = () => {
  const PROJECTS = Projects();
  return (
    <ul className={styles.projects__container}>
      {PROJECTS.map(project => {
        return (
          <li key={project.id}>
            <Link href={`${ROUTES.WORKS}/${project.id}`}>
              <Image
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
