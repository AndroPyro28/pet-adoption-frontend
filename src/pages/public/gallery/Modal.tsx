import React from "react";
import { ModalBackdrop } from "./components";

import { motion } from "framer-motion";

type modalProps = {
  displayPicture: string;
  setDisplayPicture: React.Dispatch<React.SetStateAction<string>>;
};
const Modal = ({
  displayPicture,
  setDisplayPicture,
}: modalProps): JSX.Element => {
  const imageVariant = {
    initial: {
      height: "0px",
    },
    animate: {
      height: "80%",
      rotate: 720,
      transition: {
        duration: 0.5,
      },
    },
    whileDrag: {
      cursor: "grabbing",
    },
    hover: {
      cursor: "grab",
    },
  };
  return (
    <ModalBackdrop>
      <a onClick={() => setDisplayPicture("")}>
      <i
        className="fa-solid fa-x closeBtn"
      ></i>
      </a>
      
      <motion.img
        src={displayPicture}
        variants={imageVariant}
        initial="initial"
        animate="animate"
        drag
        dragConstraints={{
          left: 5,
          top: 5,
          right: 5,
          bottom: 5,
        }}
        whileDrag="whileDrag"
        whileHover="hover"
      />
    </ModalBackdrop>
  );
};

export default Modal;
