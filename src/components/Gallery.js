import { projects } from "@/utils/projects_music";
import { projectsFashion } from "@/utils/projects_fashion";
import Image from "next/image";

const Gallery = ({ dataType }) => {
  let dataProjects;
  if (dataType === 0) {
    dataProjects = projects;
  } else {
    dataProjects = projectsFashion;
  }

  return (
    <div id="portfolio" className="w-full pb-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-3">
        {dataProjects.slice(0, 2).map((project, index) => (
          <div key={index} className="relative group">
            <Image
              src={project.url}
              alt={project.title}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        {dataProjects.slice(2, 5).map((project, index) => (
          <div key={index} className="relative group">
            <Image
              src={project.url}
              alt={project.title}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-3">
        {dataProjects.slice(5, 7).map((project, index) => (
          <div key={index} className="relative group">
            <Image
              src={project.url}
              alt={project.title}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {dataProjects.slice(7, 10).map((project, index) => (
          <div key={index} className="relative group">
            <Image
              src={project.url}
              alt={project.title}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
