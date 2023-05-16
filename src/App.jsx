import "./App.css";
import eventsData from "./data/eventsData";
import projectsData from "./data/projectsData";
import TechTimeline from "./components/TechTimeline/TechTimeline";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ProjectsGrid projects={projectsData} />
      <TechTimeline events={eventsData} />
      <ContactMe />
    </>
  );
}

export default App;
