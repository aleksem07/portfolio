import AboutPage from "@/components/pages/about/about-page";
import TitlePage from "@/app/title-page";
import { generateStaticParams } from "@/components/generateStaticParams";

export default function About() {
  return (
    <>
      <TitlePage title="page.title.about" desc="page.desc.about" />
      <AboutPage />
    </>
  );
}
export { generateStaticParams };
