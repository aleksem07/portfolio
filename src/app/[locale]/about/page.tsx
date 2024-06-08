import AboutPage from "@/components/pages/about/about-page";
import TitlePage from "@/app/title-page";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <>
      <TitlePage title={t("page.title.about")} desc={t("page.desc.about")} />
      <AboutPage />
    </>
  );
}
