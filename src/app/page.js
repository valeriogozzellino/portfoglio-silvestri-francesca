"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CardsCarousel from "@/components/Carousels/CardsCarousel";
import LandingCarousel from "@/components/Carousels/LandingCarousel";
import Gallery from "@/components/Gallery";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Footer from "../components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (window.scrollY === 0) {
  //       window.scrollTo({
  //         top: 600,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="flex flex-col justify-center w-full gap-16">
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}>
          <img
            src="../images/logo.png"
            alt="first image"
            className="h-48 image-first w-fit"
          />
        </motion.div>
      )}

      <div className="relative mt-11 h-[55vh] md:h-[70vh]">
        <div className="flex flex-col justify-end h-full text-4xl md:text-6xl lg:text-8xl md:px-[10%]">
          <h1 className="self-start">
            <TextGenerateEffect
              words={"DIRECTED BY"}
              duration={0.5} // Durata breve per una comparsa rapida
              startDelay={1.5} // Piccolo ritardo iniziale
              staggerDuration={0.2} // Ritardo tra le lettere per un effetto fluido
              className="font-bold text-white"
            />
          </h1>
          <h1 className="self-center">
            <TextGenerateEffect
              words={"FRANCESCA"}
              duration={0.8} // Durata più lunga per un effetto leggermente più lento
              startDelay={2.1} // Inizia subito dopo "DIRECTED BY" è completato
              staggerDuration={0.1} // Ritardo tra le lettere per un effetto più morbido
              className="font-bold text-white"
            />
          </h1>
          <h1 className="self-end">
            <TextGenerateEffect
              words={"SILVESTRI"}
              duration={0.8} // Durata simile a "FRANCESCA" per coerenza
              startDelay={3.1} // Inizia subito dopo "FRANCESCA" è completato
              staggerDuration={0.1} // Ritardo tra le lettere per continuità
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
            startDelay={2.5}
            staggerDuration={0}
            className="font-bold text-white"
          />
        </h2>
      </div>
      <Gallery dataType={0} />
      <Footer />
    </div>
  );
}
