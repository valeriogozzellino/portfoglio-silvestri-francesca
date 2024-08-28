"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CardsCarousel from "@/components/Carousels/CardsCarousel";
import LandingCarousel from "@/components/Carousels/LandingCarousel";
import Gallery from "@/components/Gallery";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Footer from "../components/Footer";
import BgImageTop from "@/components/BgImageTop";
import ScreenSaver from "@/components/ScreenSaver";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="flex flex-col justify-center w-full gap-16">
      {showIntro && <ScreenSaver />}

      <div className="relative mt-11 h-[55vh] md:h-[80vh]">
        <div className="flex flex-col justify-center items-center h-full text-4xl md:text-6xl lg:text-8xl">
          <img
            src="../images/logo.png"
            alt="first image"
            className="h-20 w-1/2 md:w-auto md:h-48 "
          />
        </div>
        <BgImageTop />
        {/* <CardsCarousel /> */}
      </div>

      {/* <HorizontalCarousel /> */}
      <div className="w-full mt-10 text-3xl md:text-4xl lg:text-8xl md:px-[10%]">
        <h2 className="self-center">
          <TextGenerateEffect
            words={"PROJECTS"}
            duration={1.5}
            startDelay={2.5}
            staggerDuration={0}
            className="font-light  text-white"
          />
        </h2>
      </div>
      <Gallery dataType={0} />
      <Footer />
    </div>
  );
}
