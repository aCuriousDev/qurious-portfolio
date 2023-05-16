/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ProjectsGrid.css";

const ProjectsGrid = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div
          className="project-card"
          key={project.id}
          onClick={() => handleOpenProject(project)}
        >
          <img
            className="project-image"
            src={project.image}
            alt={project.title}
          />
          <h3 className="project-title">{project.title}</h3>
        </div>
      ))}

      {selectedProject && (
        <div className="modal" onClick={handleCloseProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseProject}>
              Close
            </button>
            <h2>{selectedProject.title}</h2>
            <img
              className="modal-image"
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
