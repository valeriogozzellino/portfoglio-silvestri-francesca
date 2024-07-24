"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import imgProfile2 from "./imgProfile2.jpg";
import { motion } from "framer-motion";
import LoadingOverlay from "@/components/LoadingOverlay";

const Contacts = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    contenuto: "",
  });

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      message: formData.contenuto,
      to_email: "gozzellinovalerio@gmail.com",
      subject: "richiesta contatti sito",
    };

    emailjs
      .send(
        "service_i7vu515",
        "template_jc38hsi",
        templateParams,
        "mcJ4_qCEU_GK0iRCt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          setFormData({
            nome: "",
            email: "",
            contenuto: "",
          });
          setTimeout(() => setSuccess(false), 5000); // Nascondi il popup dopo 5 secondi
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Si è verificato un errore durante l'invio della mail.");
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollDirection(
        window.scrollY > scrollY ? "down" : window.scrollY < scrollY ? "up" : ""
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="relative h-fit flex flex-col md:flex-row overflow-hidden">
      <LoadingOverlay isLoading={isLoading} />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: scrollDirection === "down" && scrollY > 100 ? 0 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="relative flex-1 h-3/4 md:h-full min-h-[300px]">
        <Image
          src={imgProfile2}
          fill
          style={{ objectFit: "cover" }}
          alt="Profile Image"
        />
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" && scrollY > 100 ? -100 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col justify-center items-center p-6 bg-opacity-75 bg-gray-900 text-white md:bg-transparent md:w-1/2 md:h-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md">
          <div className="flex flex-col md:flex-row w-full gap-6">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="nome">NOME</label>
              <input
                className="bg-black bg-opacity-75 rounded-lg border-2 border-gray-700 w-full p-2"
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email">EMAIL</label>
              <input
                className="bg-black bg-opacity-75 rounded-lg border-2 border-gray-700 w-full p-2"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col text-center gap-2">
            <textarea
              className="bg-black bg-opacity-75 text-white rounded-lg border-2 border-gray-700 w-full p-2"
              name="contenuto"
              placeholder="COME POSSO AIUTARTI?"
              value={formData.contenuto}
              onChange={handleChange}
              required
              rows="5"
              style={{ resize: "none", overflow: "auto" }}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border w-max self-start rounded-lg px-8 py-2 hover:bg-white hover:text-black transition-colors duration-400"
            type="submit">
            {isLoading ? "INVIO..." : "INVIA"}
          </motion.button>
        </form>
        <h1 className="self-end text-5xl mt-8">CONTATTI</h1>
      </motion.div>

      {success && (
        <div className="absolute top-0 left-0 right-0 z-20 bg-green-500 text-white text-center p-4 rounded-b-lg">
          Email inviata con successo!
        </div>
      )}
    </div>
  );
};

export default Contacts;
