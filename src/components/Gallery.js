import { projects } from "@/utils/projects_music";
import { projectsFashion } from "@/utils/projects_fashion";
import Image from "next/image";
import Link from "next/link";

const Gallery = ({ dataType }) => {
  let dataProjects;
  if (dataType === 0) {
    dataProjects = projects;
  } else {
    dataProjects = projectsFashion;
  }

  return (
    <div id="portfolio" className="w-full pb-[5%]">
      <style jsx>{`
        @media (min-width: 1024px) {
          .hover-reveal {
            opacity: 0; // Nascondi il testo di default per schermi grandi
            transition: opacity 0.5s ease-in-out;
          }
          .group:hover .hover-reveal {
            opacity: 100; // Mostra il testo al passaggio del mouse per schermi grandi
          }
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-3">
        {dataProjects.slice(0, 2).map((project, index) => (
          <div key={index} className="relative group">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        {dataProjects.slice(2, 5).map((project, index) => (
          <div key={index} className="relative group">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-3">
        {dataProjects.slice(5, 7).map((project, index) => (
          <div key={index} className="relative group">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {dataProjects.slice(7, 10).map((project, index) => (
          <div key={index} className="relative group">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
