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
    <div className="absolute w-full h-[120vh] inset-0 -z-[1]">
      <div
        id="imgTopLeft"
        className="absolute top-0 left-0 flex items-center justify-center w-[600px] h-[500px]"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/CAPOPLAZA.jpg"
          alt="image top left"
          width={500}
          height={500}
        />
      </div>
      <div
        id="imgTopRight"
        className="absolute top-0 right-0 flex items-center justify-center w-[600px] h-[500px]"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/LAZZA.jpg"
          alt="image top right"
          width={500}
          height={500}
        />
      </div>
      <div
        id="imgBottomLeft"
        className="absolute bottom-0 left-0 flex items-center justify-center w-[500px] h-[600px]"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/GEOLIER.jpg"
          alt="image bottom left"
          width={500}
          height={450}
        />
      </div>
      <div
        id="imgBottomRight"
        className="absolute bottom-0 right-0 flex items-center justify-center w-[500px] h-[600px]"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/coverHome/NIKYSAVAGE.jpg"
          alt="image bottom right"
          width={500}
          height={40}
        />
      </div>
      <div
        id="imgBottomCenter"
        className="absolute  bottom-20 right-[420px] flex items-center justify-center w-[500px] h-[500px] "
        style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}>
        <Image
          src="/images/coverHome/EMIS.png"
          alt="image bottom right"
          width={400}
          height={250}
        />
      </div>
    </div>
  );
};

export default BgImageMobile;
