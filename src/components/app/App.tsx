import "./App.scss";
import Header from "../header/header.tsx";
import { Routes, Route } from "react-router-dom";
import ROUTES from "../../common/routes.ts";
import MainPage from "../pages/main-page/main-page.tsx";
import AboutPage from "../pages/about-page/about-page.tsx";
import WorksPage from "../pages/works-page/works-page.tsx";
import ContactsPage from "../pages/contacts-page/contacts-page.tsx";
import Footer from "../footer/footer.tsx";
import BackgroundBall from "../background-ball.tsx";
import WorkDetail from "../pages/works-page/work-detail.tsx";
import NotFound from "../pages/404.tsx";
import { useTranslation } from "react-i18next";
import Projects from "../../common/projects.tsx";

const App: React.FC = () => {
  const PROJECTS = Projects();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h1 className="visually_hidden">{t("h1")}</h1>
      <BackgroundBall />
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.WORKS} element={<WorksPage works={PROJECTS} />} />
        <Route
          path={`${ROUTES.WORKS}/:workId`}
          element={<WorkDetail works={PROJECTS} />}
        />
        <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
