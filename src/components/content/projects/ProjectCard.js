import React from 'react';
import ProjectDetails from './ProjectDetails';
import Preview from './Preview';

function ProjectCard(props) {
    const { project, idx } = props;
    return (
      <div
        className={
          `project-card${idx % 2 === 0 ? ' card-left' : ' card-right'}`
        }
      >
        <ProjectDetails project={project} />
        <Preview project={project} />
      </div>
    );
  }

export default ProjectCard;
