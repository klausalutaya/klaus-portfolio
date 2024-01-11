import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Links from './links/links';
import ToggleButton from './toggleButton/toggleButton';

const Sidebar = () => {
const [open, setOpen] = useState(false)
    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
                
            }
        },
        closed: {
            clipPath: "circle(20px at 50px 50px)",
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };
  return (
    <motion.div className='flex flex-col items-center justify-center bg-white text-white z-20' animate={open ? "open" : "closed"}>
    <motion.div className='  iphonemax:w-[200px] fixed top-0 left-0 bottom-0 w-[300px] bg-[#333333] rounded-xl' variants={variants}>
      <Links />
    </motion.div>
    <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
