import React from "react";
import {BsThreeDotsVertical} from "react-icons/bs"

const CalendarNav = () => {
  return (
    <div className="border-b-[1.5px] border-gray-300 bg-gray-200 px-28 font-sourceSansPro font-light text-gray-600 py-3">
      <div className="flex items-center justify-end space-x-4">
        <p className="font-bold text-gray-500 tracking-wide">Beschikbare lessen</p>
        <BsThreeDotsVertical className="text-xl"/>
      </div>
    </div>
  );
};

export default CalendarNav;
