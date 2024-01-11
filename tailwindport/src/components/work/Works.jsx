import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorksItems from "./Worksitems";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Works = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const workVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 5, type: 'spring', stiffness: 10} },
  };

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <motion.div
      className="justify-center items-center flex flex-col pt-[20px] "
      id="portfolio"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={workVariants}
    >
      <div className="pt-[60px]">
        <h2 className="text-[46px] font-poppins-bold">Portfolio</h2>
        <span className="text-[18px] text-[#757575] font-poppins-regular">Most Recent Works</span>
      </div>
      <div
       className="flex items-center justify-center gap-5 pt-[60px]
       ">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "text-[#757575]" : ""} cursor-pointer uppercase font-poppins-bold`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-2 gap-10 pt-10 md:justify-center font-poppins-regular iphonemax:grid-cols-1 ">
          {projects.map((item) => {
            return <WorksItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
