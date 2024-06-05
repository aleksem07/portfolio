import Projects from "@/common/projects";
import BackgroundBall from "@/components/background-ball";

const project = () => {
  const PROJECTS = Projects();
  const onShelvesProject = PROJECTS.find(
    project => project.pageName === "on-shelves"
  );
  return (
    <>
      {onShelvesProject ? (
        <p>
          {onShelvesProject.title} {onShelvesProject.alt}
          {onShelvesProject.description}
        </p>
      ) : null}
      <BackgroundBall left="10%" top="-0.5%" />
    </>
  );
};

export default project;
