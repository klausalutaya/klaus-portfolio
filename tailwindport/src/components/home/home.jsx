import React from "react";
import Picture from "../../assets/profile.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quaVariants = {
    hidden: { opacity: 0, y: -55 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, type: "spring", stiffness: 20 },
    },
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 30,
        type: "spring",
        stiffness: 20,
        staggerChildren: 0.1,
      },
    },
  };
  const handleClick = () => {
    const targetElement = document.querySelector("#Contact"); // Adjust the ID to match your Contact section
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  

  return (
    <div
      className="container flex pt-[50px]  justify-between items-center iphonemax:flex-col "
      id=""
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={quaVariants}
    >
      <div className="w-[350px] se:w-[250px]   rounded-md overflow-hidden hidden iphonemax:flex">
        <img
          src={Picture}
          alt=""
          className="w-full rounded-xl animate-profile__animate shadow-xl p-2 bg-[#757575]"
        />
      </div>

      <div
        className=" flex flex-col pt-3 justify-start items-start iphonemax:justify-center iphonemax:items-center"
      >
        <motion.div
          className="flex flex-col pt-3 justify-start items-start iphonemax:justify-center iphonemax:items-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-[35px] font-poppins-bold pt-2 iphonemax:text-[28px]"
            variants={textVariants}
          >
            Klaus Steven Alutaya
          </motion.h1>
          <motion.h3
            className="text-[30px] font-poppins-bold iphonemax:text-[20px] mb-5 pt-3"
            variants={textVariants}
          >
            I am a Web Developer
          </motion.h3>

          <motion.p
            className="font-poppins-regular text-[20px] iphonemax:text-[17px]"
            variants={textVariants}
          >
            This is my Portfolio Wonderland
          </motion.p>
        </motion.div>

        <div className="pt-5 flex">
        <motion.div
      className="border rounded-xl px-6 py-4 bg-[#333] text-[#FFF] flex gap-3 text-[16px] font-poppins-regular hover:bg-black cursor-pointer"
      initial={{ y: 0 }}
      animate={{
        y: [0, 8, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3.5,
        ease: "linear",
      }}
      onClick={handleClick}
    >
      Say Hello
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
          fill="white"
        />
        <path
          d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
          fill="white"
        />
      </svg>
    </motion.div>
        </div>
      </div>
      <div className="w-[700px]  rounded-md overflow-hidden relative iphonemax:hidden  ">
        <img
          src={Picture}
          alt=""
          className="w-full rounded-xl animate-profile__animate shadow-xl p-2 bg-[#757575]"
        />
      </div>
    </div>
  );
};

export default Home;
