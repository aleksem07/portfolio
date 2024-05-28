import { useTranslations } from "next-intl";
import MainPage from "@/components/pages/main/main-page";
import BackgroundBall from "@/components/background-ball";

export default function Index() {
  const t = useTranslations();
  return (
    <>
      <h1 className="visually_hidden">{t("h1")}</h1>
      <BackgroundBall />
      <MainPage />
    </>
  );
}
