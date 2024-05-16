import "./App.scss";
import Header from "../header/Header.tsx";
import { Routes, Route } from "react-router-dom";
import ROUTES from "../../common/routes.ts";
import MainPage from "../pages/main-page/main-page.tsx";
import AboutPage from "../pages/about-page/about-page.tsx";
import WorksPage from "../pages/works-page/works-page.tsx";
import ContactsPage from "../pages/contacts-page/contacts-page.tsx";
import Footer from "../footer/footer.tsx";
import BackgroundBall from "../background-ball.tsx";

function App() {
  return (
    <>
      <Header />
      <BackgroundBall />
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.WORKS} element={<WorksPage />} />
        <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
        <Route path="*" element={"no way"} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
