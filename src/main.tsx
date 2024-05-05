import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "/src/styles/+.scss";
import "/src/styles/mixins.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
