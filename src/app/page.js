'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery/Gallery";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Footer from "../components/Footer";
import BgImageTop from "@/components/HomeBgImage/BgImageTop";
import ScreenSaver from "@/components/ScreenSaver";
import BgImageMobile from "@/components/HomeBgImage/BgImageMobile";
import Image from "next/image";

export default function Home() {

  const [showIntro, setShowIntro] = useState(true);
    
  return (
    <div className="flex flex-col justify-center w-full md:gap-16">
      {showIntro && <ScreenSaver />}

      <div className="relative mt-11 h-[50vh] md:h-[80vh]">
        <div className="flex flex-col justify-end items-center h-full md:h-[90vh] text-4xl md:text-6xl lg:text-8xl">
          <Image
            src="/images/loghi/LOGO.png"
            alt="first image"
            className="h-16 w-auto md:w-auto md:h-14 lg:w-[35vh] lg:h-[15vh]"
            width={300}
            height={300}
          />
        </div>

        <div className="block">
          <BgImageTop />
        </div>
      </div>

      <div className="w-full mt-12 text-3xl md:text-4xl lg:text-8xl md:px-[10%]">
        <h2 className="self-center font-bold">
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
