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
  const PROJECTS: IProject[] = [
    {
      id: uuidv4(),
      title: "Салон красоты",
      description: "Описание проекта",
      image: "/projects/nail-salon.jpg",
      pageName: "nail-salon",
      github: "https://github.com/aleksem07/nail-salon",
      deploy: "https://nail-salon-gold.vercel.app/",
    },
    {
      id: uuidv4(),
      title: "По полочкам",
      description: "Описание проекта",
      image: "/projects/onShelves.png",
      pageName: "on-shelves",
      github: "https://github.com/aleksem07/onShelves",
      deploy: "https://aleksem07.github.io/onShelves/",
    },
    {
      id: uuidv4(),
      title: "GraphiQL",
      description: "Описание проекта",
      image: "/projects/graphiql.png",
      pageName: "graphiql",
      github: "https://github.com/aleksem07/graphiql-app/pull/3",
      deploy: "https://quiet-manatee-2adebe.netlify.app/",
    },
    {
      id: uuidv4(),
      title: "Kekstagram",
      description: "Описание проекта",
      image: "/projects/kekstagram.png",
      pageName: "kekstagram",
      github: "https://github.com/aleksem07/kekstagram",
      deploy: "https://aleksem07.github.io/kekstagram/",
    },
    {
      id: uuidv4(),
      title: "Cat Energy",
      description: "Описание проекта",
      image: "/projects/cat-energy.png",
      pageName: "cat-energy",
      github: "https://github.com/aleksem07/catEnergy",
      deploy: "https://aleksem07.github.io/catEnergy/",
    },
    {
      id: uuidv4(),
      title: "Drink2go",
      description: "Описание проекта",
      image: "/projects/drink-to-go.png",
      pageName: "drink2go",
      github: "https://github.com/aleksem07/Drink2Go",
      deploy: "https://aleksem07.github.io/Drink2Go/",
    },
    {
      id: uuidv4(),
      title: "Customer Development",
      description: "Описание проекта",
      image: "/projects/customer-development.jpg",
      pageName: "customer-development",
      github: "https://github.com/aleksem07/customer_development--landing",
      deploy: "https://aleksem07.github.io/customer_development--landing/",
    },
    {
      id: uuidv4(),
      title: "Scandi",
      description: "Описание проекта",
      image: "/projects/scandi.jpg",
      pageName: "scandi",
      github: "https://github.com/aleksem07/htmlacademy-marathon5.0",
      deploy: "https://aleksem07.github.io/htmlacademy-marathon5.0/",
    },
    {
      id: uuidv4(),
      title: "Plants",
      description: "Описание проекта",
      image: "/projects/plants.png",
      pageName: "plants",
      github: "https://github.com/aleksem07/plants",
      deploy: "https://aleksem07.github.io/plants/",
    },
    {
      id: uuidv4(),
      title: "Портфолио",
      description: "Описание проекта",
      image: "/projects/portfolio.png",
      pageName: "portfolio",
      github: "https://github.com/aleksem07/portfolio",
      deploy: "https://portfolio-ecru-kappa-40.vercel.app",
    },
  ];
  return PROJECTS;
};

export default Projects;
