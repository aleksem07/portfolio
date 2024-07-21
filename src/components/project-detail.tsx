import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/project-detail.module.scss";
import ProjectLinks from "@/components/project-links";

const ProjectDetail: React.FC<{ currentProject: any }> = ({
  currentProject,
}) => (
  <section className={styles.project_detail}>
    <Link
      className={styles.project_detail__link}
      target="_blank"
      href={`${currentProject.image}`}
    >
      <Image
        className={styles.project_detail__image}
        src={currentProject.image}
        alt={`Обложка проекта: ${currentProject.title}`}
        width={500}
        height={100}
      />
    </Link>
    <div className={styles.project_detail__desc_container}>
      <h3 className={styles.project_detail__title}>{currentProject.title}</h3>
      <p className={styles.project_detail__stack}>{"Стэк"}</p>
      <p className={styles.project_detail__desc}>
        {currentProject.description}
      </p>
      <div className={styles.project_detail__links_container}>
        <ProjectLinks currentProject={currentProject} />
      </div>
    </div>
  </section>
);

export default ProjectDetail;
