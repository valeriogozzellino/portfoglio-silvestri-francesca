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
    <div className="absolute w-full h-full inset-0 -z-[1]">
      <div
        id="imgTopLeft"
        className="absolute top-0 left-0 flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px]"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/fulminacci4.png"
          alt="image top left"
          width={300}
          height={400}
        />
      </div>
      <div
        id="imgTopRight"
        className="absolute top-0 right-0 flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px]"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/marracash2.png"
          alt="image top right"
          width={100}
          height={200}
        />
      </div>
      <div
        id="imgBottomLeft"
        className="absolute bottom-0 left-0 flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px]"
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/IMG_0185.jpg"
          alt="image bottom left"
          width={100}
          height={200}
        />
      </div>
      <div
        id="imgBottomRight"
        className="absolute bottom-0 right-0 flex items-center justify-center w-[200px] h-[400px] md:w-[300px] md:h-[600px]"
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}>
        <Image
          src="/images/madame3.png"
          alt="image bottom right"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default BgImageMobile;
