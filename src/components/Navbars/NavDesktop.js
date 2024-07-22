"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "/public/images/logo.png"; // Assicurati che il percorso sia corretto

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
    <nav className="hidden md:flex flex-row w-full justify-between p-6">
      <NavItem
        isImage={true}
        imgSrc="/images/logo.png"
        imgAlt="Logo"
        to={"/"}
      />

      <div className="flex flex-row gap-4">
        <NavItem text="INSTAGRAM" to={"https://www.instagram.com/memegirvl/"} />
        <NavItem text="PORTFOLIO" to={"/"} />
        <NavItem text="CONTATTI" to={"/contatti"} />
      </div>
    </nav>
  );
};

export default NavDesktop;
