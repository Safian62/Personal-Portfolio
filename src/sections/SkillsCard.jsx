import React, { FC } from "react";



const SkillsCard = ({ item }) => {
  return (
    <div className=" sm:w-[95%] glass text-center h-[180px] rounded-2xl border hover:border-primary-color hover:shadow-[0_10px_40px_3px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-3 cursor-pointer group">
      <div
        className="w-[80px] h-[80px] bg-primary/10  mx-auto mt-5 flex justify-center items-center rounded-3xl shadow-xl transition-all duration-300 
    group-hover:shadow-[inset_0_10px_40px_rgba(79,209,197,0.4),0_8px_25px_rgba(0,0,0,0.15)]
    group-hover:scale-105"
      >
        <img
          src={item.img}
          alt={`${item.name} logo`}
          loading="lazy"
          decoding="async"
          className="h-10 w-10 rounded-2xl"
        />
      </div>

      <h3 className="font-semibold text-xl mt-4 text-secondary-color group-hover:text-primary-color">
        {item.name}
      </h3>

      <div className="hidden group-hover:block h-1 mx-auto w-[12%] rounded-2xl mt-2 bg-primary"></div>
    </div>
  );
};

export default SkillsCard;
