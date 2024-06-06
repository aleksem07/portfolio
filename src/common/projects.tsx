import { useTranslations } from "next-intl";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const t = useTranslations("projects");

  const PROJECTS = [
    {
      id: uuidv4(),
      title: t("nail-salon.title"),
      alt: t("nail-salon.alt"),
      description: t("nail-salon.description"),
      image: "/projects/nail-salon.jpg",
      stack: "React",
      pageName: "nail-salon",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/onShelves.png",
      stack: "React",
      pageName: "on-shelves",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/graphiql1.png",
      stack: "React",
      pageName: "graphiql",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "kekstagram",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      alt: t("on-shelves.alt"),
      description: t("on-shelves.description"),
      image: "/projects/kekstagram.png",
      stack: "React",
      pageName: "Work 2",
    },
  ];
  return PROJECTS;
};

export default Projects;
