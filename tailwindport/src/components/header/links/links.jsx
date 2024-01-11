import React, { useState } from "react";
import { motion } from 'framer-motion';

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {
    const [activeNav, setActiveNav] = useState("#Homepage");
    const items = ["Homepage", "Skills", "Portfolio", "Contact", "About"];

    const handleClick = (item) => {
        setActiveNav(`#${item}`);
        const targetElement = document.getElementById(item);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div className="absolute w-[100%] h-[80%] flex flex-col items-center justify-center gap-[20px] iphonemax:h-[65%] iphonemax:text-[20px]  text-[25px] font-poppins-regular" variants={variants}>
            {items.map((item) => (
                <motion.span
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, cursor: 'pointer' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleClick(item)}
                    className={activeNav === `#${item}` ? "transition duration-300 cursor-pointer" : "transition duration-300 cursor-pointer"}
                >
                    {item}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default Links;
