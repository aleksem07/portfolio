import Projects from "@/common/projects";
import BackgroundBall from "@/components/background-ball";
import TitlePage from "@/app/title-page";
import styles from "@/styles/components/project-detail.module.scss";
import NotFound from "@/app/not-found";
import OtherProjects from "@/components/other-projects";

const project = () => {
  const PROJECTS = Projects();
  const onShelvesProject = PROJECTS.find(
    project => project.pageName === "on-shelves"
  );

  return (
    <>
      <TitlePage title={"Project Detail"} desc={"Details About The Project"} />

      {onShelvesProject ? (
        <section className={styles.project_detail}>
          {onShelvesProject.title} {onShelvesProject.alt}
          {onShelvesProject.description}
        </section>
      ) : (
        <NotFound />
      )}

      <OtherProjects />
      <BackgroundBall left="10%" top="-0.5%" />
    </>
  );
};

export default project;
