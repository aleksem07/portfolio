import { v4 as uuidv4 } from "uuid";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("about-page.courses");
  const COURSES: ICoursesProps[] = [
    {
      id: uuidv4(),
      name: "HTML Academy",
      course: "Front-end Developer",
      image: "/courses/htmlacademy.jpg",
      http: "https://htmlacademy.ru/profession/frontender",
      desc: t("html-academy.frontend"),
      language: "ru",
      date: "may 2023",
    },
    {
      id: uuidv4(),
      name: "RS School",
      course: "JavaScript/Front-end 2023Q1 (javascript)",
      image: "/courses/rsschool.jpg",
      http: "https://rs.school/courses/javascript-ru",
      desc: t("rs-school.frontend"),
      language: "en",
      date: "september 2023",
    },
    {
      id: uuidv4(),
      name: "RS School",
      course: "React 2023 Q4 (react)",
      image: "/courses/react2023q4.png",
      http: "https://rs.school/courses/reactjs",
      desc: t("rs-school.react"),
      language: "en",
      date: "january 2024",
    },
    {
      id: uuidv4(),
      name: "HTML Academy",
      course: "Technical skills scoring",
      image: "/courses/htmlacademy.jpg",
      http: "https://htmlacademy.ru/membrana-results/1915851-1-899a8f16",
      desc: t("html-academy.scoring"),
      language: "ru",
      date: "march 2024",
    },
  ];

  return COURSES;
};

export default CoursesArray;
