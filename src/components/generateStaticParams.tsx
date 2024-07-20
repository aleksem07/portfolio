import Projects from "@/common/projects";

async function generateStaticParams() {
  const locales = ["EN", "RU"];
  const projects = Projects();

  const params = locales.flatMap(locale =>
    projects.map(project => ({
      locale,
      project,
    }))
  );

  return params;
}

export { generateStaticParams };
