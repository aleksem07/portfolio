import { v4 as uuidv4 } from "uuid";

interface ICoursesProps {
  id: string;
  name: string;
  course: string;
  image: string;
  http: string;
  desc: string;
  language: string;
  date: string;
}

const CoursesArray = () => {
  const COURSES: ICoursesProps[] = [
    {
      id: uuidv4(),
      name: "HTML Academy",
      course: "Front-end Developer",
      image: "/courses/htmlacademy.jpg",
      http: "https://htmlacademy.ru/profession/frontender",
      desc: "Подготовка к профессии, HTML и CSS. Профессиональная вёрстка сайтов, HTML и CSS. Адаптивная вёрстка и автоматизация, JavaScript. Профессиональная разработка веб-интерфейсов, Подготовка вёрстки для cистем управления контентом (CMS), Вёрстка React-компонентов, Грейдирование",
      language: "ru",
      date: "may 2023",
    },
    {
      id: uuidv4(),
      name: "RS School",
      course: "JavaScript/Front-end 2023Q1 (javascript)",
      image: "/courses/rsschool.jpg",
      http: "https://rs.school/courses/javascript-ru",
      desc: "На протяжении всего обучения проводятся пробные собеседования с разными наставниками. Программа состоит из 3 этапов. Для перехода на каждую более высокую ступень существуют требования. Этап 1 - Git, HTML, CSS, Javascript basics, Этап 2 - Advanced Javascript, TypeScript, Security, Testing, Agile Networking, web development tools, REST Этап 3 - Совместная разработка финального проекта.",
      language: "en",
      date: "september 2023",
    },
    {
      id: uuidv4(),
      name: "RS School",
      course: "React 2023 Q4 (react)",
      image: "/courses/react2023q4.png",
      http: "https://rs.school/courses/reactjs",
      desc: "Учащиеся RS School, завершившие этап #2 RS School, и новые студенты с сильными навыками CoreJS/TS/Frontend: JavaScript, TypeScript, Git, GitHub (клонирование, добавление, фиксация, отправка, извлечение, объединение, перебазирование, работа с запросом на извлечение) npm, Webpack, CSS3/HTML5, Chrome DevTools, Figma, Понимание REST",
      language: "en",
      date: "january 2024",
    },
    {
      id: uuidv4(),
      name: "HTML Academy",
      course: "Technical skills scoring",
      image: "/courses/htmlacademy.jpg",
      http: "https://htmlacademy.ru/membrana-results/1915851-1-899a8f16",
      desc: "Скоринг навыков проводился в формате выполнения тестового задания с автоматическими проверками. В качестве заданий использовались задания легкого и среднего уровня сложности олимпиады по фронтенду для Яндекса.",
      language: "ru",
      date: "march 2024",
    },
  ];

  return COURSES;
};

export default CoursesArray;
