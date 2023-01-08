import React from "react";
import { FaHorseHead } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex justify-center font-cormorant items-center">
      <FaHorseHead className="text-primary text-5xl pr-2 pt-2" />
      <div className="flex-flex-col pt-8">
        <h1 className="text-primary text-6xl font-bold tracking-wider">
          Edele Ros
        </h1>

        <p className="text-primary text-2xl font-bold pl-44 -mt-3">Manege</p>
      </div>
    </div>
  );
};

export default Logo;
