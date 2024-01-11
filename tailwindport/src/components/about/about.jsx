import { useState, useEffect } from "react";
import AboutImg from "../../assets/klaus.jpeg";
import CV from "../../assets/Klaus-Cv1.pdf";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const about = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, type: 'spring', stiffness: 20 } },
  };
  const sectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, type: 'spring', stiffness: 20 } },
  };

  return (
    <div className="container pt-[160px]" id="about">
      <div className="pt-10">
        <motion.h2
          className="text-[46px] font-poppins-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          About Me
        </motion.h2>
        <motion.span
          className="text-[18px] text-[#757575] font-poppins-regular"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          My Introduction
        </motion.span>

        <div className="flex justify-between iphonemax:flex-col ">
          <div className="pl-3 pt-10 w-full flex justify-center items-center">
            <motion.img
              src={AboutImg}
              alt=""
              className="w-[280px] h-[280px] rounded-full iphonemax:w-[230px] iphonemax:h-[230px]"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={imageVariants}
            />
          </div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="flex justify-center items-start pt-[50px] iphonemax:flex-col w-full">
              <div className="flex justify-start items-start font-poppins-regular">
                Passionate web developer fluent in the language of innovation,
                sculpting digital realms with code. Proficient in HTML, CSS,
                JavaScript sorcery, crafting immersive online experiences. drive
                and to transform ideas into captivating web realities, one line
                of code at a time.
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-5">
              <div className="flex items-center justify-between iphonemax:justify-evenly ">
                <div className="flex font-poppins-regular gap-2 ">
                  <svg
                    className="w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                  </svg>
                  <h3 className="text-[14px] font-poppins-regular iphonemax:text-[12px]">
                    Name
                  </h3>
                </div>
                <div className="mr-8">
                  <span className="text-[16px] text-[#757575 font-poppins-regular iphonemax:text-[12px]">
                    Klaus Steven Kinkel Alutaya
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between  iphonemax:justify-evenly ">
                <div className="flex font-poppins-regular gap-2 iphonemax:pr-3">
                  <svg
                    className="w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                  </svg>
                  <h3 className="text-[14px] font-poppins-regular iphonemax:text-[12px]">
                    Email
                  </h3>
                </div>
                <div className="mr-8">
                  <span className="text-[16px] text-[#757575 font-poppins-regular iphonemax:text-[12px]">
                    Klausalutaya@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between  iphonemax:justify-evenly  ">
                <div className="flex font-poppins-regular gap-2 iphonemax:pr-[53px]">
                  <svg
                    className="w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                  </svg>
                  <h3 className="text-[14px] font-poppins-regular iphonemax:text-[12px]">
                    Contact
                  </h3>
                </div>
                <div className="mr-8">
                  <span className="text-[16px] text-[#757575 font-poppins-regular iphonemax:text-[12px]">
                    +63 968 536 3891
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center pt-5">
              <div className=" w-[250px] border rounded-xl px-1 py-4 bg-[#333] text-[#FFF] flex text-[14px] font-open-sans items-center justify-center hover:bg-black ">
                <a
                  download=""
                  href={CV}
                  className=" items-center flex justify-center gap-3 font-poppins-regular"
                >
                  Download Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                      fill="white"
                    />
                    <path
                      d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                      fill="white"
                    />
                    <path
                      d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                      fill="white"
                    />
                    <path
                      d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default about;
