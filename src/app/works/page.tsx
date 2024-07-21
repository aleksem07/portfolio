import WorksPage from "@/components/pages/works/works-page";
import TitlePage from "@/app/title-page";
import { generateStaticParams } from "@/components/generateStaticParams";

export default function About() {
  return (
    <>
      <TitlePage title={"Мои проекты"} desc={"Список работ"} />
      <WorksPage />
    </>
  );
}
export { generateStaticParams };
