"use client";
import Projects from "@/common/projects";
import BackgroundBall from "@/components/background-ball";
import TitlePage from "@/app/title-page";
import styles from "@/styles/components/project-detail.module.scss";
import NotFound from "@/app/not-found";
import OtherProjects from "@/components/other-projects";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Project: React.FC = () => {
  const PROJECTS = Projects();
  const [selectedProject, setSelectedProject] = useState("");
  const currenProject = PROJECTS.find(
    project => project.pageName === selectedProject
  );

  const pathname = usePathname();

  useEffect(() => {
    const projectName = pathname.split("/")[3];
    setSelectedProject(projectName);
  }, [pathname]);

  return (
    <>
      <TitlePage title={"Project Detail"} desc={"Details About The Project"} />

      {currenProject ? (
        <section className={styles.project_detail}>
          <Link
            target="_blank"
            href={`/projects/${currenProject.pageName}.png`}
          >
            <Image
              className={styles.project_detail__image}
              src={currenProject.image}
              alt={currenProject.alt}
              width={500}
              height={100}
            />
          </Link>

          <div>
            <h3 className={styles.project_detail__title}>
              {currenProject.title}
            </h3>
            <p className={styles.project_detail__desc}>
              {currenProject.description}
            </p>
          </div>
        </section>
      ) : (
        <Loading />
      )}

      <OtherProjects />
      <BackgroundBall left="10%" top="-0.5%" />
    </>
  );
};

export default Project;
