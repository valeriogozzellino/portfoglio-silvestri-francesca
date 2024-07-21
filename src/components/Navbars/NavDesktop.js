"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = ({ text, to }) => {
  return (
    <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={to}>{text}</Link>
    </motion.span>
  );
};

const NavDesktop = () => {
  return (
    <nav className="hidden md:flex flex-row w-full justify-between p-6">
      <NavItem text="FRANCESCA SILVESTRI" to={"/"} />

      <div className="flex flex-row gap-4">
        <NavItem text="INSTAGRAM" to={"https://www.instagram.com/memegirvl/"} />
        <NavItem text="PORTFOLIO" to={"/"} />
        <NavItem text="CONTATTI" to={"/contatti"} />
      </div>
    </nav>
  );
};

export default NavDesktop;
