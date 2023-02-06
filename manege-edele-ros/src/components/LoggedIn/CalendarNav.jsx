import React from "react";

const CalendarNav = () => {
  return (
    <div className="border-b-[1.5px] border-t-[1.5px] border-gray-300 bg-gray-200 px-28 font-sans font-medium">
      <ul className="flex items-center space-x-12">
        <li className=" py-4">
          <p className="tracking-wide">Geplande lessen</p>
        </li>
        <li>
          <p>Nieuwe lessen</p>
        </li>
        <li>Uw lessen</li>
      </ul>
    </div>
  );
};

export default CalendarNav;
