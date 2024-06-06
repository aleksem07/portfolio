"use client";
import Projects from "@/common/projects";
import BackgroundBall from "@/components/background-ball";
import TitlePage from "@/app/title-page";
import styles from "@/styles/components/project-detail.module.scss";
import NotFound from "@/app/not-found";
import OtherProjects from "@/components/other-projects";

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
          {currenProject.title} {currenProject.alt}
          {currenProject.description}
        </section>
      ) : (
        <NotFound />
      )}

      <OtherProjects />
      <BackgroundBall left="10%" top="-0.5%" />
    </>
  );
};

export default Project;
