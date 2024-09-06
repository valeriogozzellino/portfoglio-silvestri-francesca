"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NavItem = ({ text, to, isImage, imgSrc, imgAlt }) => {
  return (
    <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={to}>
        {isImage ? (
          <Image src={imgSrc} alt={imgAlt} width={90} height={90} />
        ) : (
          text
        )}
      </Link>
    </motion.span>
  );
};

const NavDesktop = () => {
  return (
    <nav className="hidden md:flex flex-row w-full justify-between fixed bg-black z-10 p-6">
      <NavItem text="DIRECTED BY FRANCESCA SILVESTRI" to={"/"} />

      <div className="flex flex-row gap-4 text-white">
        <NavItem text="INSTAGRAM" to={"https://www.instagram.com/memegirvl/"} />
        <NavItem text="PORTFOLIO" to={"/"} />
        <NavItem text="CONTATTI" to={"/contatti"} />
      </div>
    </nav>
  );
};

export default NavDesktop;
