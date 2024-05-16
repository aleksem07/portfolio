import "./App.scss";
import Header from "../header/Header.tsx";
import Promo from "../promo/Promo.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES from "../../common/routes.ts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Promo />} />
        <Route path={ROUTES.ABOUT} element={"ABOUT"} />
        <Route path={ROUTES.WORKS} element={"WORKS"} />
        <Route path={ROUTES.CONTACTS} element={"CONTACTS"} />
        <Route path="*" element={"no way"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
