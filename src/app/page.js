"use client";

import CardsCarousel from "@/components/Carousels/CardsCarousel";
import LandingCarousel from "@/components/Carousels/LandingCarousel";
import Gallery from "@/components/Gallery";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { useEffect } from "react";
import Footer from "../components/Footer";
export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY === 0) {
        window.scrollTo({
          top: 600,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center w-full gap-16">
      <div className="relative mt-8 h-[55vh] md:h-[70vh]">
        {/* Title */}
        <div className="flex flex-col justify-end h-full text-4xl md:text-6xl lg:text-8xl md:px-[10%]">
          <h1 className="self-start">
            <TextGenerateEffect
              words={"DIRECTED BY"}
              duration={1.5}
              startDelay={0}
              staggerDuration={1}
              className="font-bold text-white"
            />
          </h1>
          <h1 className="self-center">
            <TextGenerateEffect
              words={"FRANCESCA"}
              duration={1.5}
              startDelay={1}
              staggerDuration={0}
              className="font-bold text-white"
            />
          </h1>
          <h1 className="self-end">
            <TextGenerateEffect
              words={"SILVESTRI"}
              duration={1.5}
              startDelay={1}
              staggerDuration={0}
              className="font-bold text-white"
            />
          </h1>
        </div>

        {/* Image Stack */}
        <CardsCarousel />
      </div>

      {/* <HorizontalCarousel /> */}
      <div className="w-full mt-10 text-3xl md:text-2xl lg:text-6xl md:px-[10%]">
        <h2 className="self-center">
          <TextGenerateEffect
            words={"PROJECTS"}
            duration={1.5}
            startDelay={2}
            staggerDuration={0}
            className="font-bold text-white"
          />
        </h2>
      </div>
      <Gallery dataType={0} />
      {/* <LandingCarousel dataType={0} /> */}
      {/* <div className="w-full text-2xl md:text-xl lg:text-6xl md:px-[10%]">
        <h3 className="self-center">
          <TextGenerateEffect
            words={"FASHION"}
            duration={1.5}
            startDelay={2}
            staggerDuration={0}
            className="font-bold"
          />
        </h3>
      </div> */}
      {/* <Gallery dataType={1} /> */}
      {/* <LandingCarousel dataType={1} /> */}
      <Footer />
    </div>
  );
}
