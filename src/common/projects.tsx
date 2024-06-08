import { useTranslations } from "next-intl";
import { v4 as uuidv4 } from "uuid";

interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  pageName: string;
  github: string;
  deploy: string;
}

const Projects = () => {
  const t = useTranslations("projects");

  const PROJECTS: IProject[] = [
    {
      id: uuidv4(),
      title: t("nail-salon.title"),
      description: t("nail-salon.description"),
      image: "/projects/nail-salon.jpg",
      pageName: "nail-salon",
      github: "https://github.com/aleksem07/nail-salon",
      deploy: "https://nail-salon-gold.vercel.app/",
    },
    {
      id: uuidv4(),
      title: t("on-shelves.title"),
      description: t("on-shelves.description"),
      image: "/projects/onShelves.png",
      pageName: "on-shelves",
      github: "https://github.com/aleksem07/onShelves",
      deploy: "https://aleksem07.github.io/onShelves/",
    },
    {
      id: uuidv4(),
      title: t("graphql.title"),
      description: t("graphql.description"),
      image: "/projects/graphiql.png",
      pageName: "graphiql",
      github: "https://github.com/aleksem07/graphiql-app/pull/3",
      deploy: "https://quiet-manatee-2adebe.netlify.app/",
    },
    {
      id: uuidv4(),
      title: t("kekstagram.title"),
      description: t("kekstagram.description"),
      image: "/projects/kekstagram.png",
      pageName: "kekstagram",
      github: "https://github.com/aleksem07/kekstagram",
      deploy: "https://aleksem07.github.io/kekstagram/",
    },
    {
      id: uuidv4(),
      title: t("cat-energy.title"),
      description: t("cat-energy.description"),
      image: "/projects/cat-energy.png",
      pageName: "cat-energy",
      github: "https://github.com/aleksem07/catEnergy",
      deploy: "https://aleksem07.github.io/catEnergy/",
    },
    {
      id: uuidv4(),
      title: t("drink2go.title"),
      description: t("drink2go.description"),
      image: "/projects/drink-to-go.png",
      pageName: "drink2go",
      github: "https://github.com/aleksem07/Drink2Go",
      deploy: "https://aleksem07.github.io/Drink2Go/",
    },
    {
      id: uuidv4(),
      title: t("customer-development.title"),
      description: t("customer-development.description"),
      image: "/projects/customer-development.jpg",
      pageName: "customer-development",
      github: "https://github.com/aleksem07/customer_development--landing",
      deploy: "https://aleksem07.github.io/customer_development--landing/",
    },
    {
      id: uuidv4(),
      title: t("scandi.title"),
      description: t("scandi.description"),
      image: "/projects/scandi.jpg",
      pageName: "scandi",
      github: "https://github.com/aleksem07/htmlacademy-marathon5.0",
      deploy: "https://aleksem07.github.io/htmlacademy-marathon5.0/",
    },
    {
      id: uuidv4(),
      title: t("plants.title"),
      description: t("plants.description"),
      image: "/projects/plants.png",
      pageName: "plants",
      github: "https://github.com/aleksem07/plants",
      deploy: "https://aleksem07.github.io/plants/",
    },
  ];
  return PROJECTS;
};

export default Projects;
