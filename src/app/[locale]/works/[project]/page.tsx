import Projects from "@/common/projects";

const project = () => {
  const PORJECTS = Projects();
  return <p>{PORJECTS[0].title}</p>;
};

export default project;
