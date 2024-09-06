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
    <div className="absolute w-full h-[100vh] inset-0 -z-[1]">
      <div
        id="imgTopLeft"
        className="absolute top-0 left-0 flex items-center justify-center w-[300px] h-[200px] z-[2]"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
          marginTop: "50px",
          marginLeft: "50px",
        }}>
        <Image
          src="/images/coverHome/CAPOPLAZA.jpg"
          alt="image top left"
          width={400}
          height={500}
        />
      </div>
      <div
        id="imgTopRight"
        className="absolute top-60 -right-20 flex items-center justify-center w-[400px] h-[200px] z-[3]"
        style={{
          transform: `translateY(-${scrollPosition * 0.2}px)`,
          marginRight: "100px",
        }}>
        <Image
          src="/images/coverHome/LAZZA.jpg"
          alt="image top right"
          width={400}
          height={200}
        />
      </div>
      <div
        id="imgBottomLeft"
        className="absolute bottom-36 left-0 flex items-center justify-center w-[300px] h-[100px] z-[0]"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
          marginBottom: "50px",
          marginLeft: "50px",
        }}>
        <Image
          src="/images/coverHome/GEOLIER.jpg"
          alt="image bottom left"
          width={400}
          height={200}
        />
      </div>
      <div
        id="imgBottomRight"
        className="absolute bottom-0 -right-36 flex items-center justify-center w-[400px] h-[100px] z-[1]"
        style={{
          transform: `translateY(-${scrollPosition * 0.2}px)`,
          marginRight: "150px",
        }}>
        <Image
          src="/images/coverHome/NIKYSAVAGE.jpg"
          alt="image bottom right"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default BgImageMobile;
