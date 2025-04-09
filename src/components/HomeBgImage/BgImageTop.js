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
    <div className="absolute flex justify-center  w-full h-[70vh] md:h-[130vh] inset-0 -z-[1]">
      <div
        id="imgTopLeft"
        className=" flex items-center justify-center w-full h-full "
      >
        <Image
          src="/images/coverHome/IMG_4638.jpg"
          alt="image top left"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 1024px) 100vw, (min-width: 1025px) 50vw"
        />
      </div>
    </div>
  );
};

export default BgImageMobile;
