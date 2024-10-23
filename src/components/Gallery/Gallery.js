import { useEffect } from "react";
import { projects } from "@/utils/projects";
import ProjectGroup from "./ProjectGroup";

/**
 * gestisce la struttura della gallery nella home
 * @param {*} param0
 * @returns
 */
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
      <ProjectGroup projects={projects.slice(0, 2)} columns={2} />
      <ProjectGroup projects={projects.slice(2, 5)} columns={3} />
      <ProjectGroup projects={projects.slice(5, 7)} columns={2} />
      <ProjectGroup projects={projects.slice(7, 10)} columns={3} />
      <ProjectGroup projects={projects.slice(10, 12)} columns={2} />
      <ProjectGroup projects={projects.slice(12, 15)} columns={3} />
      <ProjectGroup projects={projects.slice(15, 17)} columns={2} />
      <ProjectGroup projects={projects.slice(17, 20)} columns={3} />
      <ProjectGroup projects={projects.slice(20, 22)} columns={2} />
      <ProjectGroup projects={projects.slice(22, 25)} columns={3} />
      <ProjectGroup projects={projects.slice(25, 27)} columns={2} />
    </div>
  );
};

export default Gallery;
