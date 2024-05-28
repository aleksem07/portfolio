import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations();

  const PROJECTS = [
    {
      id: 1,
      title: t("projects.project1.title"),
      alt: t("projects.project1.alt"),
      description: t("projects.project1.description"),
      image: "/placeholder-pic.jpg",
      stack: "React",
      name: "Work 1",
      img: "/placeholder-pic.jpg",
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/placeholder-pic.jpg",
      stack: "React",
      name: "Work 2",
      img: "/placeholder-pic.jpg",
    },
  ];
  return PROJECTS;
};

export default Projects;
