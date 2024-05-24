import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "/src/styles/+.scss";
import "/src/styles/mixins.scss";
import "/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
