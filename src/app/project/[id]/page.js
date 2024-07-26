import { projects } from "@/utils/projects_music";
import { imgProjects } from "@/utils/img_projects";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import "../../globals.css";
import YouTubePlayer from "@/components/YouTubePlayer";

const Project = ({ params }) => {
  const project = projects.find((p) => p.id == params.id);
  const imgsProject = imgProjects.filter((img) => img.idProject == params.id);

  return (
    <div className="flex flex-col w-full justify-center  items-center">
      <div className="w-full text-3xl text-center md:text-3xl lg:text-6xl mt-20 md:px-[10%]">
        <h3 className="self-center">
          <TextGenerateEffect
            words={project.description}
            duration={1.5}
            startDelay={1.5}
            staggerDuration={0}
            className="font-bold mb-6"
          />
        </h3>
      </div>
      <div className="w-full text-xl text-center md:text-xl lg:text-3xl md:px-[10%]">
        <h3 className="self-center">
          <TextGenerateEffect
            words={project.title}
            duration={1.5}
            startDelay={1.5}
            staggerDuration={0}
            className="mb-6"
          />
        </h3>
      </div>
      <div className="w-full flex items-center justify-center">
        {project?.type == "youtube" && (
          <YouTubePlayer
            url={project.videoUrl}
            width="600px"
            height="300px"
            className="max-w-full max-h-full object-cover"
          />
        )}
        {project.type === "local" && (
          <video
            src={project.videoUrl}
            controls
            preload="auto"
            style={{ width: "100vh", height: "70vh" }}
          />
        )}
      </div>
      <div className="mt-6 w-4/5 text-xl md:text-xl lg:text-2xl md:px-[10%]">
        <h5 className="self-center">
          <TextGenerateEffect
            words={project.detailedDescription}
            duration={1.5}
            startDelay={1.5}
            staggerDuration={0}
            className="text-center mb-6"
          />
        </h5>
      </div>
      <div className="mt-6 mb-5 w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {imgsProject.map((img, index) => (
          <div className="p-2" key={index}>
            <Image
              src={img.url}
              alt={img.alt}
              className="rounded-lg"
              width={700}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
