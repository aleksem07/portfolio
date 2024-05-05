import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "../header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="visually_hidden">Портфолио Алексей Семячкин</h1>
    </>
  );
}

export default App;
