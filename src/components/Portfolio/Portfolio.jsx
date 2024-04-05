import { useState } from 'react';
import { Toolbar } from './Toolbar';
import { ProjectList } from './ProjectList';
import './Portfolio.css';

export const Portfolio = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedFilter);

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
  }

  return (
    <div className="container">
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selectedFilter}
        onSelectFilter={handleSelectFilter}
      />
      <ProjectList projects={filteredProjects}/>
    </div>
  )
}
