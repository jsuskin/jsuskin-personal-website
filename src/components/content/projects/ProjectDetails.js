import React from 'react';

function ProjectDetails(props) {
  const { project } = props;
  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p><em>{project.description}</em></p>
      <ul>
        {project.github.map(arr => {
          return (
            <li key={arr[1]}>
              <h4>{arr[0]}: <a href={arr[1]} target="_blank" rel="noopener noreferrer">{arr[1]}</a></h4>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ProjectDetails;
