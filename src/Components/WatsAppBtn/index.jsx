import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonContainer } from "./styles";

const WhatsAppButton = ({ phoneNumber = "5599999999999", message = "Olá! Gostaria de saber mais." }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <ButtonContainer href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={32} />
    </ButtonContainer>
  );
};

export { WhatsAppButton };