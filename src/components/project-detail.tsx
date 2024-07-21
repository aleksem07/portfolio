import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/project-detail.module.scss";
import ProjectLinks from "@/components/project-links";
import { IProject } from "@/common/projects";
import ProjectStack from "@/components/project-stack";
import { useRouter } from "next/navigation";

const ProjectDetail: React.FC<{ currentProject: IProject }> = ({
  currentProject,
}) => {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };

  return (
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

        <p className={styles.project_detail__desc}>
          {currentProject.description}
        </p>

        {currentProject.stack && (
          <div className={styles.project_detail__stack}>
            <p className={styles.project_detail__stack_title}>
              {"Стек технологий"}
            </p>
            <ProjectStack currentProject={currentProject} />
          </div>
        )}

        <div className={styles.project_detail__links_container}>
          <ul className={styles.project_detail__list}>
            <ProjectLinks currentProject={currentProject} />
          </ul>
          <button className="button" onClick={clickHandler}>
            Назад
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
