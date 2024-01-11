import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0.5, // Adjust this threshold as needed
  });

  const quaVariants = {
    hidden: { opacity: 0, y: -55 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, type: 'spring', stiffness: 20 } },
  };

  return (
    <motion.section
     className="qualification section pt-[120px]" 
     id=""
     ref={ref}
     initial="hidden"
     animate={inView ? 'visible' : 'hidden'}
     variants={quaVariants}
   
     >
      <h2 className="text-[46px] font-poppins-bold">Qualification</h2>
      <span className="text-[18px] text-[#757575] font-poppins-regular">My Personal Journey</span>

      <div className="qualification__container max-w-768px font-poppins-regular">
        <div className="qualification__tabs flex justify-center mb-2 pt-8 gap-[120px] iphonemax:gap-[60px]">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active flex items-center cursor-pointer mr-1"
                : "qualification__button flex items-center cursor-pointer mr-1"
            }
            onClick={() => toggleTab(1)}
          >
            <div className=" text-[20px] gap iphonemax:text-[23px] font-poppins-bold hover:text-[#757575]">
            <i className="  "></i>{" "}
            Education
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active flex items-center cursor-pointer"
                : "qualification__button flex items-center cursor-pointer"
            }
            onClick={() => toggleTab(2)}
          >
           <div className="text-[25px] iphonemax:text-[23px] flex justify-center items-center font-poppins-bold hover:text-[#757575]">
            <i className="  mr-0.25"></i>{" "}
            Experience
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className={
              toggleState === 1
                ? "qualification__content block"
                : "qualification__content hidden"
            }
          >
           
           <div className="mx-auto grid grid-cols-2 gap-10">
            
            <div className="flex justify-center items-center iphonemax:mr-[20px]">
              <i className="uil uil-calendar-alt font-poppins-regular"></i>2010 - 2014
            </div>
            <div className="flex flex-col leading-none  gap-1 font-poppins-regular pt-3 ">
              Surigao Education Center
            <span className="text-[#757575]">
             High School
            </span>
            </div>

            <div className="flex justify-center items-center iphonemax:mr-[20px]">
              <i className="uil uil-calendar-alt font-poppins-regular"></i>2014 - 2019
            </div>
            <div className="flex flex-col leading-none  gap-1 poppins-regular ">
              STI College Surigao
            <span className="text-[#757575]">
              Computer Engineering
            </span>
            </div>
            
            
           

            
          </div>

            

        
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content block"
                : "qualification__content hidden"
            }
          >
            <div className="mx-auto grid grid-cols-2 gap-4">
            
                <div className="flex justify-center items-center iphonemax:mr-[40px]">
                  <i className="uil uil-calendar-alt font-poppins-regular"></i>2022
                </div>
                <div className="flex flex-col leading-none  gap-1 poppins-regular pt-3 ">
                  Prior Authorization Coordinator
                <span className="text-[#757575]">
                  Optum Global Solutions
                </span>
                </div>
                
                <div className="flex justify-center items-center iphonemax:mr-[40px]">
                  <i className="uil uil-calendar-alt font-poppins-regular "></i>2023
                </div>
                <div className="flex flex-col leading-none  gap-1 poppins-regular ">
                  Web Developer
                <span className="text-[#757575]">
                Zuitt Coding Bootcamp
                </span>
                </div>
                <div className="flex justify-center items-center iphonemax:mr-[40px]">
                  <i className="uil uil-calendar-alt font-poppins-regular"></i>2023
                </div>
                <div className="flex flex-col leading-none  gap-1 poppins-regular ">
                  Full Stack Web Developer
                <span className="text-[#757575]">
                  Sharks Billiard League
                </span>
                </div>

                
              </div>
              </div>


            
          </div>
        </div>
      
    </motion.section>
  );
};

export default Qualification;
