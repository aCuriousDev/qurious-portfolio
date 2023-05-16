import "./App.css";
import eventsData from "./data/eventsData";
import projectsData from "./data/projectsData";
import TechTimeline from "./components/TechTimeline/TechTimeline";
import Contact from "./components/Contact/Contact";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <h1>This my portfolio website</h1>
      <ProjectsGrid projects={projectsData} />
      <TechTimeline events={eventsData} />
      <ContactMe />
      <Contact />
    </>
  );
}

export default App;
