// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects, setProjects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  return (
    <div>
      <h1>Project Detail</h1>
      <p>Project: {project ? project.name : 'Project not found'}</p>
      {/* Add sections for tasks in 'pending', 'active', 'late', 'completed' */}
    </div>
  );
};

export default ProjectDetail;