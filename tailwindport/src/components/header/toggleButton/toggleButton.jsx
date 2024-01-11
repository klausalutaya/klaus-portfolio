import React from "react";
import { motion } from 'framer-motion';
const toggleButton = ({ setOpen }) => {
  return (
    <button
      className=" iphonemax:w-[50px] h-[50px] rounded-full fixed top-[27px] left-[38px] bg-transparent border-none cursor-pointer justify-center items-center"
      onClick={() => setOpen((prev) => !prev)}
    >
       <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 19.5 L 17 3.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.5 L 20 16.5" },
            open: { d: "M 3 4.5 L 17 20.5" },
          }}
        />
      </svg>
     
    </button>
  );
};

export default toggleButton;
