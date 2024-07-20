import Projects from "@/common/projects";

async function generateStaticParams() {
  const PROJECTS = await Projects();

  return PROJECTS.map(project => ({
    project: project.pageName,
  }));
}

export { generateStaticParams };
