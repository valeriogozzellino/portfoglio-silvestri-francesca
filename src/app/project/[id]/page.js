import VideoPlayer from "@/components/VideoPlayer";
import { projects } from "@/utils/projects_music";
import { imgProjects } from "@/utils/img_projects";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import "../../globals.css";
const Project = ({ params }) => {
  const project = projects.find((p) => p.id == params.id);
  const imgsProject = imgProjects.filter((img) => img.idProject == params.id);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-full text-2xl md:text-xl lg:text-6xl md:px-[10%]">
        <h3 className="self-center">
          <TextGenerateEffect
            words={project.title}
            duration={1.5}
            startDelay={1.5}
            staggerDuration={0}
            className="font-bold mb-6"
          />
        </h3>
      </div>
      <div className="w-full flex items-center justify-center">
        <video
          src={project.url}
          controls
          style={{ width: "100vh", height: "70vh" }}
        />
      </div>
      <div className="mt-6 w-4/5 text-xl md:text-xl lg:text-2xl md:px-[10%]">
        <h5 className="self-center">
          <TextGenerateEffect
            words={project.detailedDescription}
            duration={1.5}
            startDelay={1.5}
            staggerDuration={0}
            className=" text-center mb-6"
          />
        </h5>
      </div>
      <div className="mt-6 mb-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
        {imgsProject.map((img, index) => (
          <div className="p-1 image-container" key={index}>
            <Image
              src={img.url}
              alt={img.alt}
              width={300} // Aggiungi una larghezza appropriata
              height={200} // Aggiungi un'altezza appropriata
              className="ml-11 rounded-lg lg:ml-9"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
