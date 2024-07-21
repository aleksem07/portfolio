import React from "react";
import TitlePage from "@/app/title-page";

const ProjectTitlePage: React.FC<{ projectName: string }> = ({
  projectName,
}) => (
  <TitlePage
    title={"Детали Проекта"}
    desc={"Подробнее о проекте"}
    project_name={projectName}
  />
);

export default ProjectTitlePage;
