"use client";

import CardsCarousel from "@/components/Carousels/CardsCarousel";
import LandingCarousel from "@/components/Carousels/LandingCarousel";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full gap-16">
      <div className="relative h-[55vh] md:h-[70vh]">
        {/* Title */}
        <div className="flex flex-col justify-end h-full text-4xl md:text-6xl lg:text-8xl md:px-[10%]">
          <h1 className="self-start">
            <TextGenerateEffect
              words={"CIAO, SONO"}
              duration={1.5}
              startDelay={0}
              staggerDuration={1}
              className="font-bold"
            />
          </h1>
          <h1 className="self-center">
            <TextGenerateEffect
              words={"FRANCESCA"}
              duration={1.5}
              startDelay={1}
              staggerDuration={0}
              className="font-bold"
            />
          </h1>
          <h1 className="self-end">
            <TextGenerateEffect
              words={"SILVESTRI"}
              duration={1.5}
              startDelay={1}
              staggerDuration={0}
              className="font-bold"
            />
          </h1>
        </div>

        {/* Image Stack */}
        <CardsCarousel />
      </div>
      <div className="flex w-full items-center flex-col">
        <TextGenerateEffect
          duration={0.5}
          words={"BREVE DESCRIZIONE DEL MIO LAVORO"}
          startDelay={2}
          staggerDuration={0.5}
          className="text-center mb-4 mt-10 text-xl md:text-2xl lg:text-4xl "
        />
        <div className="w-3/5 md:w-2/3 lg:w-1/2">
          <TextGenerateEffect
            duration={0.5}
            words={
              "Sono un videomaker professionista specializzato nella creazione di video musicali e spot pubblicitari di moda. Con un livello di competenza avanzato, ho lavorato su numerosi progetti di alto profilo, catturando l'essenza di concerti ed eventi per immortalare i momenti più emozionanti. Il mio obiettivo è permettere alle persone di rivivere queste esperienze uniche o di scoprirle per la prima volta attraverso i miei video. Nel mio portfolio troverai una selezione dei miei lavori, che testimoniano la passione e l'attenzione ai dettagli che metto in ogni progetto."
            }
            startDelay={4}
            staggerDuration={0}
            className="text-center mb-10 text-slate-200"
          />
        </div>
      </div>

      {/* <HorizontalCarousel /> */}
      <div className="w-full text-2xl md:text-xl lg:text-6xl md:px-[10%]">
        <h3 className="self-center">
          <TextGenerateEffect
            words={"VIDEO MUSICALI"}
            duration={1.5}
            startDelay={2}
            staggerDuration={0}
            className="font-bold"
          />
        </h3>
      </div>
      <LandingCarousel dataType={0} />
      <div className="w-full text-2xl md:text-xl lg:text-6xl md:px-[10%]">
        <h3 className="self-center">
          <TextGenerateEffect
            words={"SPOT PUBBLICITARI DI MODA"}
            duration={1.5}
            startDelay={2}
            staggerDuration={0}
            className="font-bold"
          />
        </h3>
      </div>
      <LandingCarousel dataType={1} />
    </div>
  );
}
