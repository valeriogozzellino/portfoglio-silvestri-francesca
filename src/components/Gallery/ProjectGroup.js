import ProjectCard from "./ProjectCard";

const ProjectGroup = ({ projects, columns }) => {
  const getGridColsClass = (columns) => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-3 lg:grid-cols-3";
      default:
        return "grid-cols-1"; // Imposta il fallback
    }
  };

  return (
    <div className={`grid ${getGridColsClass(columns)} gap-3 mb-3`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGroup;
