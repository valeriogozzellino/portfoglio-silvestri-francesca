import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
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

const LandingCarousel = ({ dataType }) => {
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

  const calculateScale = (index) => {
    const distance = Math.abs(index - activeSlide);
    const scaleFactor = 0.15;
    const minScale = 0.85;
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
              initial={{ scale: 0.85 }}
              animate={{
                scale: activeSlide === index ? 1 : calculateScale(index),
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center h-fit w-full p-2">
              <Link href={`/project/${project.id}`}>
                <div className="relative group">
                  <Image
                    src={project.url}
                    alt={project.title}
                    width={700}
                    height={500}
                    className="max-w-full max-h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <span className="text-white text-lg font-bold">
                      {project.title}
                    </span>
                    <p>
                      <b>clicca</b> per scoprire di più
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: activeSlide === index ? 1 : 0.85 }}
              transition={{ duration: 0.5 }}
              className="text-center pt-4">
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
