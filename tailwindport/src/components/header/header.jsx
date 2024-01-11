import React from "react";
import Sidebar from "./Sidebar";
import Insta from "../../assets/insta.png";
import Git from "../../assets/git.png";
import Linked from "../../assets/linked.png";
import fb from "../../assets/fb.png.png";
const header = () => {
  return (
    <div>
      <header className="container">
        <nav className=" flex">
          <Sidebar />
          <a
            href="/"
            className="text-black text-[15px] flex uppercase font-poppins-bold iphonemax:hidden"
          >
            Klaus dev
          </a>
          <div className="flex justify-center items-center ml-auto">
            <ul className="flex  ">
              <div className="flex text-black gap-8  ">
                <a href="https://www.facebook.com/klavenkel/" target="_blank">
                  <img src={fb} alt="facebook" className="w-[20px]" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={Insta} alt="instagram" className="w-[20px]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/klaus-alutaya-363669270/"
                  target="_blank"
                >
                  <img src={Linked} alt="linkedin" className="w-[20px]" />
                </a>

                <a href="https://github.com/klausalutaya" target="_blank">
                  <img src={Git} alt="github " className="w-[20px]" />
                </a>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default header;
