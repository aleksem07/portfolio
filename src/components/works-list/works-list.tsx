import styles from "/src/styles/components/project-highlight.module.scss";
import Projects from "@/common/projects";
import Link from "next/link";
import ROUTES from "@/common/routes";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

interface IWorks {
  className?: string;
  isMainPage?: boolean;
  projectCount?: number;
}

const WorksList: React.FC<IWorks> = ({
  className,
  isMainPage = false,
  projectCount = 4,
}) => {
  const t = useTranslations();
  let PROJECTS = Projects();
  isMainPage ? (PROJECTS = PROJECTS.slice(0, projectCount)) : PROJECTS;
  return (
    <ul className={`${styles.projects__container} ${className || ""}`}>
      {PROJECTS.map(project => {
        return (
          <li className={styles.projects__item} key={project.id}>
            <Link
              className={styles.projects__link}
              href={`${ROUTES.WORKS}/${project.pageName}`}
            >
              <Image
                src={project.image}
                className={styles.projects__image}
                alt={`${project.alt} ${project.title}`}
                width={560}
                height={620}
              />
              <h3 className={styles.projects__item_title}>{project.title}</h3>
              <h5 className={styles.projects__item_desc}>
                <span>
                  {t("projects.block.description")}:{"\u00A0"}
                </span>
                {project.description}
              </h5>
              <div className={styles.projects__stack_container}>
                <h5 className={styles.projects__item_desc}>
                  <span>
                    {t("projects.block.stack")}:{"\u00A0"}
                  </span>
                </h5>
                <ul>
                  <li>stack</li>
                </ul>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default WorksList;
