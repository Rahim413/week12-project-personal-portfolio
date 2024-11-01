"use client"
import React from 'react';
import { useState } from 'react';
import './projects.css';
import { projectsData } from './projectsData'; 

const Projects = () => {
  const [currentActive, setCurrentActive] = useState("all");

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-github"></a>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="icon-link"></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
