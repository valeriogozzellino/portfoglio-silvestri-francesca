"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BgImageMobile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute flex justify-center w-full h-[70vh] md:h-[130vh] inset-0 -z-[1]">
      <div
        id="imgTopLeft"
        className=" flex items-center justify-center w-4/5 h-full ">
        <Image
          src="/images/coverHome/IMG_4638.jpg"
          alt="image top left"
          fill
          sizes="(max-width: 1024px) 100vw, (min-width: 1025px) 50vw"
        />
      </div>
      {/* <div
        id="imgTopLeft"
        className="absolute top-0 left-0 flex items-center justify-center w-[30vw] h-[30vh] sm:w-[25vw] sm:h-[25vh] md:w-[35vw] md:h-[35vh] lg:w-[40vw] lg:h-[40vh] xl:w-[45vw] xl:h-[45vh]"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/CAPOPLAZA.jpg"
          alt="image top left"
          fill
          sizes="(max-width: 1024px) 100vw, (min-width: 1025px) 50vw"
          className="object-contain "
        />
      </div> */}
      {/* <div
        id="imgTopRight"
        className="absolute top-0 right-0 flex items-center justify-center w-[30vw] h-[30vh] sm:w-[25vw] sm:h-[25vh] md:w-[35vw] md:h-[35vh] lg:w-[40vw] lg:h-[40vh] xl:w-[45vw] xl:h-[45vh]"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/LAZZA.jpg"
          alt="image top right"
          fill
          sizes="(max-width: 1024px) 100vw, (min-width: 1025px) 50vw"
          className="object-contain"
        />
      </div>
      <div
        id="imgBottomLeft"
        className="absolute bottom-0 left-0 flex items-center justify-center w-[30vw] h-[30vh] sm:w-[25vw] sm:h-[25vh] md:w-[35vw] md:h-[30vh] lg:w-[40vw] lg:h-[40vh] xl:w-[45vw] xl:h-[45vh]"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/GEOLIER.jpg"
          alt="image bottom left"
          fill
          sizes="(max-width: 1024px) 100vw, (min-width: 1025px) 50vw"
          className="object-contain"
        />
      </div>
      <div
        id="imgBottomRight"
        className="absolute bottom-0 right-0 flex items-center justify-center w-[30vw] h-[30vh] sm:w-[25vw] sm:h-[25vh] md:w-[35vw] md:h-[30vh] lg:w-[40vw] lg:h-[40vh] xl:w-[45vw] xl:h-[45vh]"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/NIKYSAVAGE.jpg"
          alt="image bottom right"
          fill
          sizes="(max-width: 1024px) 100vw, (min-width: 1025px) 50vw"
          className="object-contain"
        />
      </div>
      <div
        id="imgBottomCenter"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[30vw] h-[30vh] sm:w-[25vw] sm:h-[25vh] md:w-[35vw] md:h-[35vh] lg:w-[40vw] lg:h-[40vh] xl:w-[45vw] xl:h-[45vh]"
        style={{
          transform: `translate(-50%, -50%) translateY(${
            scrollPosition * 0.3
          }px)`,
        }}>
        <Image
          src="/images/coverHome/EMIS.png"
          alt="image bottom center"
          fill
          sizes="(max-width: 1024px) 100vw, (min-width: 1025px) 50vw"
          className="object-contain"
        />
      </div> */}
    </div>
  );
};

export default BgImageMobile;
