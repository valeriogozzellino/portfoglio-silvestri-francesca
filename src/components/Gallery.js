import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Gallery = ({ dataType }) => {
  let dataProjects;
  if (dataType === 0) {
    dataProjects = projects.filter((project) => project.category === "music");
  } else {
    dataProjects = projects.filter((project) => project.category === "fashion");
  }
  const scrollHandler = () => {
    const elements = document.querySelectorAll(".image-reveal");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Se la parte superiore dell'elemento è sotto il bordo superiore del viewport
      // e sopra il bordo inferiore, l'elemento è visibile.
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div id="portfolio" className="w-full">
      <style jsx>{`
        @media (min-width: 1024px) {
          .hover-reveal {
            opacity: 0; // Nascondi il testo di default per schermi grandi
            transition: opacity 0.5s ease-in-out;
          }
          .group:hover .hover-reveal {
            opacity: 100;
          }
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3 mb-3">
        {projects.slice(0, 2).map((project, index) => (
          <div key={index} className="relative group image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        {projects.slice(2, 5).map((project, index) => (
          <div key={index} className="relative group image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-3">
        {projects.slice(5, 7).map((project, index) => (
          <div key={index} className="relative group  image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-3">
        {projects.slice(7, 10).map((project, index) => (
          <div key={index} className="relative group  image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-3">
        {projects.slice(10, 12).map((project, index) => (
          <div key={index} className="relative group image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-3">
        {projects.slice(12, 15).map((project, index) => (
          <div key={index} className="relative group  image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-3">
        {projects.slice(15, 17).map((project, index) => (
          <div key={index} className="relative group image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-3">
        {projects.slice(17, 20).map((project, index) => (
          <div key={index} className="relative group image-reveal">
            <Link href={`/project/${project.id}`}>
              <Image
                src={project.url}
                alt={project.title}
                layout="responsive"
                width={800}
                height={700}
                className="object-cover rounded image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
                <div className="text-slate-200 font-thin font-sans text-center">
                  <h3 className="text-xl font-semibold ">{project.title}</h3>
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
