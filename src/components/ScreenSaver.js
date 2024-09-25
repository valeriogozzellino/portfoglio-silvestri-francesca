"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScreenSaver = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex  flex-col items-center justify-center bg-black"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 1 }}>
      <Image
        src="/images/loghi/LOGO.png"
        alt="first image"
        width={600}
        height={600}
        className="image-first"
      />
    </motion.div>
  );
};

export default ScreenSaver;
