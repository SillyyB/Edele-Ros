import React from "react";
import {MdOutlineEventAvailable} from "react-icons/md"

const LessonDescriptionBar = ({title, description}) => {
  return (
    <div className="shadow border-gray-300 bg-gray-200 px-28 py-3 font-sourceSansPro">
      <p className="flex items-center pb-2 text-xl font-bold uppercase text-gray-600">
      <MdOutlineEventAvailable className="mr-3 text-4xl text-emerald-500"/>  {title}
      </p>
      <p className="text-sm font-light text-gray-500 pl-12">
        {description}
      </p>
    </div>
  );
};

export default LessonDescriptionBar;
