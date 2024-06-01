import { useTranslations } from "next-intl";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const t = useTranslations();

  const PROJECTS = [
    {
      id: uuidv4(),
      title: t("projects.nail-salon.title"),
      alt: t("projects.nail-salon.alt"),
      description: t("projects.nail-salon.description"),
      image: "/projects/nail-salon.jpg",
      stack: "React",
      pageName: "nail-salon",
    },
    {
      id: uuidv4(),
      title: t("projects.on-shelves.title"),
      alt: t("projects.on-shelves.alt"),
      description: t("projects.on-shelves.description"),
      image: "/projects/onShelves.png",
      stack: "React",
      pageName: "on-shelves",
    },
    {
      id: uuidv4(),
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/projects/graphiql1.png",
      stack: "React",
      pageName: "graphiql",
    },
    {
      id: uuidv4(),
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "kekstagram",
    },
    {
      id: uuidv4(),
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("projects.project2.title"),
      alt: t("projects.project2.alt"),
      description: t("projects.project2.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
  ];
  return PROJECTS;
};

export default Projects;
