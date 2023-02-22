import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import JsonAPI from "./context/JsonAPI";

function App() {
  return (
    <JsonAPI>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="project" element={<Project />} />
        </Routes>
      </div>
    </JsonAPI>
  );
}

export default App;
