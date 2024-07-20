"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Projects from "@/common/projects";
import ProjectDetail from "@/components/project-detail";
import ProjectTitlePage from "@/components/project-title-page";
import NotFound from "@/app/not-found";

const ProjectClient: React.FC = () => {
  const PROJECTS = Projects();
  const [selectedProject, setSelectedProject] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const projectName = pathname.split("/")[2];
    setSelectedProject(projectName);
  }, [pathname]);

  const currentProject = PROJECTS.find(
    project => project.pageName === selectedProject
  );

  return (
    <>
      {currentProject ? (
        <>
          <ProjectTitlePage projectName={selectedProject} />
          <ProjectDetail currentProject={currentProject} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ProjectClient;
