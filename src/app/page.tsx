import MainPage from "@/components/pages/main/main-page";
import BackgroundBall from "@/components/background-ball";

export default function Index() {
  return (
    <>
      <h1 className="visually_hidden">
        {"Создание динамичных и адаптивных веб-сайтов для вашего бизнеса."}
      </h1>
      <BackgroundBall right={"5%"} />
      <MainPage />
    </>
  );
}
