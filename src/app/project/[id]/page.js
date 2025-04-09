"use client";
import { projects } from "@/utils/projects";
import { videoProjects } from "@/utils/video_projects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import "../../globals.css";
import YouTubePlayer from "@/components/YouTubePlayer";
import Footer from "@/components/Footer";
const Project = ({ params }) => {
  const project = projects.find((p) => p.id == params.id);
  const videosProject = videoProjects.filter(
    (video) => video.idProject == params.id
  );

  return (
    <div className="flex flex-col w-full justify-center  items-center">
      <div className="w-full text-3xl text-center md:text-3xl lg:text-6xl mt-20 md:px-[10%]">
        <h3 className="self-center">
          <TextGenerateEffect
            words={project.description}
            duration={1.5}
            startDelay={0}
            staggerDuration={0}
            className="font-bold mb-6 text-white"
          />
        </h3>
      </div>
      <div className="w-full text-xl text-center md:text-xl lg:text-3xl md:px-[10%] text-white">
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
        {project.type === "imageCollection" ||
          project.type === "videoCollection"}
      </div>
      <div className="mt-6 mb-5 w-4/5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
        {videosProject.map((item, index) => (
          <div className="p-2 flex flex-col items-center" key={index}>
            {project.type == "videoCollection" ? (
              <video
                src={item.url}
                controls
                preload="auto"
                style={{ width: "100vh", height: "70vh" }}
              />
            ) : (
              <Image src={item.url} alt={item.title} width={500} height={400} />
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Project;
