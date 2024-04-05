import './ProjectList.css';

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {
        projects.map((project, index) => (
          <img
            src={project.img}
            alt={project.category}
            className="project_image"
            key={index}
          />
        ))
      }
    </div>
  )
}
