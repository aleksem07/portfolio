import Projects from "@/common/projects";
import BackgroundBall from "@/components/background-ball";

const project = () => {
  const PORJECTS = Projects();
  return (
    <>
      <p>{PORJECTS[0].title}</p>;
      <BackgroundBall left="10%" top="-0.5%" />
    </>
  );
};

export default project;
