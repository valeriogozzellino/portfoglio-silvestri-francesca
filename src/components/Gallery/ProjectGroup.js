import ProjectCard from "./ProjectCard";

const ProjectGroup = ({ projects, columns }) => {
  const gridClass = `grid grid-cols-1 md:grid-cols-${columns} lg:grid-cols-${columns} gap-3 mb-3`;

  return (
    <div className={gridClass}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGroup;
