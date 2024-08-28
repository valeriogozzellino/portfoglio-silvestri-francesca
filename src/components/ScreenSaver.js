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
      <img
        src="../images/logo.png"
        alt="first image"
        className="h-60 image-first w-fit"
      />
      <p className="mt-12 font-b text-2xl">Scrool to start...</p>
    </motion.div>
  );
};

export default ScreenSaver;
