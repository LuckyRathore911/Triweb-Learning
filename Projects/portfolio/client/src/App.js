import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import ExtraCurricular from "./pages/ExtraCurricular";
import ContactMe from "./pages/ContactMe";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/experience" element={<WorkExperience />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/extra-curricular" element={<ExtraCurricular />} />
        <Route exact path="/contact-me" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
