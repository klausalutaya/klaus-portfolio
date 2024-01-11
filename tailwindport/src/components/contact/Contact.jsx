import React, { useRef, useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p98tuq4",
        "template_o7t23g7",
        form.current,
        "nupIspPBTU59pmuue"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0.3, // Adjust this threshold as needed
  });

  const quaVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5, type: "spring", stiffness: 20 },
    },
  };

  const getVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 5, type: "spring", stiffness: 20 },
    },
  };

  const conVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 5, type: "spring", stiffness: 20 },
    },
  };
  return (
    <section className="contact section pt-10" id="contact">
      <motion.div
       ref={ref}
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={conVariants}

      >
      <h2 className="text-[46px] font-poppins-bold">Get in touch</h2>
      <span className="text-[16px] text-[#757575] font-poppins-regular">
        Contact Me
      </span>
      </motion.div>

      <div className="flex justify-center gap-[60px] pt-[60px] iphonemax:flex-col">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={quaVariants}
        >
          <h3 className="font-poppins-bold text-[22px]">Talk to me</h3>
          <div className="iphonemax:flex iphonemax:justify-center iphonemax:items-center">
            <div className="flex flex-col gap-5 pt-5">
              <div className="border rounded-xl w-[300px] h-[150px] flex flex-col items-center justify-center">
                <svg
                  className="w-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
                <h3 className="font-poppins-regular text-[16px] pt-1 leading-none">
                  Scout Borromeo St, cor Tomas Morato Ave, Quezon City, Metro
                  Manila
                </h3>
              </div>

              <div className="border rounded-xl w-[300px] h-[150px] flex flex-col items-center justify-center">
                <svg
                  className="w-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
                </svg>
                <h3 className="font-poppins-regular text-[16px]">Email</h3>
                <span className="font-poppins-regular text-[14px]">
                  klausalutaya@gmail.com
                </span>
              </div>
              <div className="border rounded-xl w-[300px] h-[150px] flex flex-col items-center justify-center">
                <svg
                  className="w-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
                <h3 className="font-poppins-regular text-[16px]">Contact</h3>
                <span className="font-poppins-regular text-[14px]">
                  +63 968 536 3891
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={getVariants}
        >
          <h3 className="text-center font-poppins-bold text-[22px]">
            Write me your project
          </h3>
          <div className="pt-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5 relative "
            >
              <div className="relative text-[#757575]">
                <label className=" iphonemax:left-[12px]  iphonemax:top-[-6px] absolute top-[-13px] left-3 z-10 border-none bg-white px-2 font-poppins-regular text-[15px]">
                 
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-[400px] h-[64px] border-[2px]  rounded-2xl z-0 p-3 outline-none bg-none font-poppins-regular text-[15px] iphonemax:w-[300px]"
                  placeholder="Name"
                />
              </div>

              <div className="relative text-[#757575]">
                <label className=" iphonemax:top-[-6px] absolute top-[-13px] left-3 iphonemax:left-[12px] z-10 border-none bg-white px-2 font-poppins-regular text-[15px]">
               
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-[400px] h-[64px] border-[2px]  rounded-2xl z-0 p-3 outline-none bg-none font-poppins-regular text-[15px] iphonemax:w-[300px]"
                  placeholder="Email"
                />
              </div>

              <div className="pt-5 relative text-[#757575]">
                <label className="absolute top-[8px] left-4 z-10 iphonemax:top-[10px]  bg-white px-2 font-poppins-regular text-[15px]">
                  
                </label>
                <textarea
                  name="project"
                  cols="35"
                  rows="15"
                  className=" w-[400px] h-[220px] border-[2px] rounded-2xl p-3 outline-none bg-none shadow-md font-poppins-regular text-[15px] iphonemax:w-[300px]"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="flex justify-center items-center ">
                <button className="border rounded-xl px-4 py-4 bg-[#333] text-[#FFF] flex font-poppins-regular text-[15px] items-center justify-center">
                Send Message
                  <svg
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="font-poppins-bold">
              {error && "Error"}
                {success && "Success"}
                </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
