"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "/public/images/logo.png"; // Assicurati che il percorso sia corretto

const HomeBtn = () => {
  return (
    <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href="/">
        <p className="text-wrap text-xs">
          DIRECTED BY <br /> FRANCESCA SILVESTRI
        </p>
        {/* <Image src={logo} alt="Francesca Silvestri" width={70} height={70} /> */}
      </Link>
    </motion.span>
  );
};

export default HomeBtn;
