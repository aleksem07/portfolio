import BackgroundBall from "@/components/background-ball";
import WorksPage from "@/components/pages/works/works-page";
import TitlePage from "@/app/title-page";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("page");
  return (
    <>
      <TitlePage title={t("title.works")} desc={t("desc.works")} />
      <WorksPage />
      <BackgroundBall left="10%" top="-0.5%" />
    </>
  );
}
