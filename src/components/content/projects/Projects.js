import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';
import './Projects.css';

function Projects() {
  return (
    <ul className="projects-list">
      {projects.map((project, idx) => {
        return (
          <li key={project.name}>
            <ProjectCard
              project={project}
              idx={idx}
            />
          </li>
        )
      })}
    </ul>
  );
}

export default Projects;
