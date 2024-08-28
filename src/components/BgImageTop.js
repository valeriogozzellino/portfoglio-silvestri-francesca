"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BgImageTop = () => {
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
    <div className="absolute w-full inset-0 flex justify-between items-center px-4 -z-[1]">
      <div
        id="imgUp"
        className="flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px] flex-col"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/fulminacci4.png"
          alt="first image"
          width={300}
          height={400}
        />
      </div>
      <div
        id="imgUp"
        className="flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px] flex-col"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/marracash2.png"
          alt="first image"
          width={300}
          height={400}
        />
      </div>
      <div
        id="imgDown"
        className="flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px] flex-col"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/IMG_0185.jpg"
          alt="first image"
          width={300}
          height={400}
        />
      </div>
      <div
        id="imgDown"
        className="flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px] flex-col"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/madame3.png"
          alt="first image"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default BgImageTop;
