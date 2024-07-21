import React from "react";
import CalendlyEmbed from "@/app/contatti/CalendlyEmbed";
import Contacts from "./Contacts";

const Contatti = () => {
  return (
    <div className="flex flex-col h-full">
      <Contacts />

      {/* <CalendlyEmbed url="https://calendly.com/gabrielemasciulli/parliamo?background_color=000000&text_color=ffffff" /> */}
    </div>
  );
};

export default Contatti;
