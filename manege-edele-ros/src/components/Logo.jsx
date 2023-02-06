import React from "react";
import { FaHorseHead } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex justify-center font-cormorant items-center">
      <FaHorseHead className="text-primary text-5xl pr-2" />
      <div className="flex-flex-col">
        <h1 className="text-primary text-4xl font-bold tracking-wide">
          Edele Ros
        </h1>

        <p className="text-primary text-lg font-bold pl-[90px] -mt-3">Manege</p>
      </div>
    </div>
  );
};

export default Logo;
