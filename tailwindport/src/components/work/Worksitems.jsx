// WorksItems.js
import React from "react";

const WorksItems = ({ item }) => {
  return (
    
    <div className="flex justify-center items-center font-poppins-regular hover:bg-transparent">
      
      <div className="mx-auto gap-x-3 border rounded-[30px] px-6">
        <div className="rounded-xl pt-10" key={item.id}>
          <img src={item.image} alt="" className="w-[350px] h-[230px] rounded-xl" />
          <h3 className="font-poppins-bold">{item.title}</h3>
          <a href={item.link} className="flex items-center justify-center gap-2" target="_blank">
            View Project <svg className="w-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;
