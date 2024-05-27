import { useTranslation } from "react-i18next";
import placeholder from "/src/assets/placeholder-pic.jpg";

const Projects = () => {
  const { t } = useTranslation();

  const PROJECTS = [
    {
      id: 1,
      title: t("projects.project1.title"),
      alt: t("projects.project1.alt"),
      description: t("projects.project1.description"),
      image: placeholder,
      stack: "React",
      name: "Work 1",
      img: placeholder,
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: placeholder,
      stack: "React",
      name: "Work 2",
      img: placeholder,
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      alt: t("projects.project3.alt"),
      description: t("projects.project3.description"),
      image: placeholder,
      stack: "React",
      name: "Work 3",
      img: placeholder,
    },
    {
      id: 4,
      title: t("projects.project4.title"),
      alt: t("projects.project4.alt"),
      description: t("projects.project4.description"),
      image: placeholder,
      stack: "React",
      name: "Work 4",
      img: placeholder,
    },
  ];
  return PROJECTS;
};

export default Projects;
