import React from "react";
import BackgroundBall from "@/components/background-ball";
import OtherProjects from "@/components/other-projects";
import ProjectClient from "@/components/project-client";
import { generateStaticParams } from "@/components/generateStaticParams";

const Project: React.FC = () => (
  <>
    <ProjectClient />
    <OtherProjects />
    <BackgroundBall left="10%" top="-0.5%" />
  </>
);

export default Project;
export { generateStaticParams };
