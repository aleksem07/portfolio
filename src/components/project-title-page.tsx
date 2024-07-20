import React from "react";
import TitlePage from "@/app/title-page";

const ProjectTitlePage: React.FC<{ projectName: string }> = ({
  projectName,
}) => (
  <TitlePage
    title={"detail-title"}
    desc={"detail-subtitle"}
    project_name={projectName}
  />
);

export default ProjectTitlePage;
