import { v4 as uuidv4 } from "uuid";

export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  pageName: string;
  github: string;
  deploy?: string;
  stack?: string[];
  layout?: string;
}

const Projects = () => {
  const PROJECTS: IProject[] = [
    {
      id: uuidv4(),
      title: "Салон красоты",
      description: "Лендинг для мастера ногтевого сервиса",
      image: "/projects/nail-salon.jpg",
      pageName: "nail-salon",
      github: "https://github.com/aleksem07/nail-salon",
      deploy: "https://nail-salon-gold.vercel.app/",
      stack: ["tailwindcss", "typescript", "sass", "react", "nextjs", "redux"],
    },
    {
      id: uuidv4(),
      title: "Фильтры для маркетплейса",
      description: "Создание формы с фильтрами для маркетплейса",
      image: "/projects/bitrix-markup-stub.png",
      pageName: "marketplace-filters",
      github: "https://github.com/aleksem07/bitrix-markup-stub/pull/2",
      deploy: "https://aleksem07.github.io/bitrix-markup-stub/",
      stack: ["pug", "javascript", "sass", "gulp"],
      layout:
        "https://www.figma.com/design/Hb00ywFQootjKmQtNxGppR/Untitled-(Copy)?t=7wq4B9t1SA4xMhSo-0",
    },
    {
      id: uuidv4(),
      title: "По полочкам",
      description: "Многостраничный книжный интернет магазин",
      image: "/projects/onShelves.png",
      pageName: "on-shelves",
      github: "https://github.com/aleksem07/onShelves",
      deploy: "https://aleksem07.github.io/onShelves/",
      stack: ["pug", "javascript", "sass"],
    },
    {
      id: uuidv4(),
      title: "GraphiQL",
      description: "Песочница GraphiQL",
      image: "/projects/graphiql.png",
      pageName: "graphiql",
      github: "https://github.com/aleksem07/graphiql-app/pull/3",
      deploy: "https://quiet-manatee-2adebe.netlify.app/",
      stack: [
        "tailwindcss",
        "typescript",
        "sass",
        "react",
        "nextjs",
        "redux",
        "graphql",
      ],
    },
    {
      id: uuidv4(),
      title: "Портфолио",
      description: "Сайт-визитка",
      image: "/projects/portfolio.png",
      pageName: "portfolio",
      github: "https://github.com/aleksem07/portfolio",
      deploy: "https://portfolio-ecru-kappa-40.vercel.app",
      stack: ["tailwindcss", "typescript", "sass", "react", "nextjs", "redux"],
    },
    {
      id: uuidv4(),
      title: "ToDo Календарь",
      description: "Небольшое приложение список задач по дням",
      image: "/projects/todo-calendar.png",
      pageName: "todo-calendar",
      github: "https://github.com/aleksem07/to-do-calendar",
      stack: ["typescript", "sass", "html5", "vitejs", "react"],
    },
    {
      id: uuidv4(),
      title: "Cat Energy",
      description: "Многостраничный интернет магазин для животных",
      image: "/projects/cat-energy.png",
      pageName: "cat-energy",
      github: "https://github.com/aleksem07/catEnergy",
      deploy: "https://aleksem07.github.io/catEnergy/",
      stack: ["javascript", "sass", "html5", "pug", "css3"],
    },
    {
      id: uuidv4(),
      title: "Drink2go",
      description: "Многостраничный интернет магазин по продаже кофе",
      image: "/projects/drink-to-go.png",
      pageName: "drink2go",
      github: "https://github.com/aleksem07/Drink2Go",
      deploy: "https://aleksem07.github.io/Drink2Go/",
      stack: ["javascript", "sass", "html5", "css3"],
    },
    {
      id: uuidv4(),
      title: "Customer Development",
      description: "Лендинг события",
      image: "/projects/customer-development.jpg",
      pageName: "customer-development",
      github: "https://github.com/aleksem07/customer_development--landing",
      deploy: "https://aleksem07.github.io/customer_development--landing/",
      stack: ["javascript", "sass", "html5", "css3"],
    },
    {
      id: uuidv4(),
      title: "Scandi",
      description: "Лендинг для агентства дизайна",
      image: "/projects/scandi.jpg",
      pageName: "scandi",
      github: "https://github.com/aleksem07/htmlacademy-marathon5.0",
      deploy: "https://aleksem07.github.io/htmlacademy-marathon5.0/",
      stack: ["javascript", "sass", "html5", "css3"],
    },
    {
      id: uuidv4(),
      title: "Plants",
      description: "Лендинг садоводов",
      image: "/projects/plants.png",
      pageName: "plants",
      github: "https://github.com/aleksem07/plants",
      deploy: "https://aleksem07.github.io/plants/",
      stack: ["typescript", "sass", "html5", "css3"],
    },
    {
      id: uuidv4(),
      title: "Kekstagram",
      description: "Небольшой проект по типу Instagram",
      image: "/projects/kekstagram.png",
      pageName: "kekstagram",
      github: "https://github.com/aleksem07/kekstagram",
      deploy: "https://aleksem07.github.io/kekstagram/",
      stack: ["javascript", "sass", "html5", "css3"],
    },
  ];
  return PROJECTS;
};

export default Projects;
