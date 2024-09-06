import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="relative group image-reveal">
      <style jsx>{`
        @media (min-width: 1024px) {
          .hover-reveal {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          .group:hover .hover-reveal {
            opacity: 100;
          }
        }
      `}</style>

      <Link href={`/project/${project.id}`}>
        <div className="relative w-full h-0" style={{ paddingBottom: "75%" }}>
          {/* Imposta un contenitore con proporzioni fisse */}
          <Image
            src={project.url}
            alt={project.title}
            layout="fill" // Usa layout fill per occupare tutto lo spazio
            objectFit="cover" // Copre l'area mantenendo le proporzioni
            className="rounded image-zoom"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 hover-reveal">
          <div className="text-slate-200 font-thin font-sans text-center">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
