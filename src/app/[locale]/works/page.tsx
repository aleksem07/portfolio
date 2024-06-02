import Works from "@/components/works/works";
import BackgroundBall from "@/components/background-ball";
import styles from "@/styles/components/works.module.scss";
import TitlePage from "@/app/title-page";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <>
      <TitlePage title={t("page.title.works")} desc={t("page.desc.works")} />
      <BackgroundBall right="-10%" top="-0.5%" />
      <Works className={styles.works} />
    </>
  );
}
