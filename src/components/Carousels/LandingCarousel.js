import React, { useState } from "react";
import dynamic from "next/dynamic";

// Import components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import {
  Navigation as SwiperNavigation,
  Keyboard,
  Mousewheel,
  Zoom,
} from "swiper/modules";

import { projects } from "@/utils/projects_music";
import { projectsFashion } from "@/utils/projects_fashion";
import Navigation from "./Navigation";
import Link from "next/link";
const YouTubePlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const LandingCarousel = ({ dataType }) => {
  // select the type of data
  let dataProjects;
  if (dataType == 0) {
    dataProjects = projects;
  } else {
    dataProjects = projectsFashion;
  }
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  // This function calculates the scale of each slide based on its distance from the active slide
  const calculateScale = (index) => {
    const distance = Math.abs(index - activeSlide);
    const scaleFactor = 0.15; // Decrease scale by 10% per slide away from the active slide
    const minScale = 0.5; // The smallest scale for the furthest slides
    const scale = Math.max(1 - distance * scaleFactor, minScale);
    return scale;
  };

  return (
    <div id="portfolio" className="w-full pb-[10%] min-h-28">
      <Swiper
        centeredSlides={true}
        autoHeight
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        zoom={true}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[SwiperNavigation, Keyboard, Mousewheel, Zoom]}
        onSlideChangeTransitionStart={handleSlideChange}
        className="swiper-3d">
        {dataProjects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{
                scale: activeSlide === index ? 1 : calculateScale(index),
              }}
              transition={{ duration: 0.3 }}
              className="h-fit w-full ">
              {project?.type == "youtube" && (
                <YouTubePlayer
                  url={project.url}
                  style={{
                    maxWidth: "-webkit-fill-available",
                  }}
                />
              )}
              <Link href={`/project/${project.id}`}>
                {project.type === "local" && (
                  <video
                    src={project.url}
                    controls
                    style={{ width: 600, height: 400 }}
                  />
                )}
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: activeSlide === index ? 1 : 0.7 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col text-center pt-4">
              <h1 className="font-semibold">{project.description}</h1>
            </motion.div>
          </SwiperSlide>
        ))}

        <Navigation />
      </Swiper>

      <div className="relative flex flex-row justify-between w-full font-bold text-4xl md:text-6xl lg:text-8xl">
        <h1>#{dataProjects[activeSlide].id}</h1>

        <h1>{dataProjects[activeSlide].title}</h1>
      </div>
    </div>
  );
};

export default LandingCarousel;
