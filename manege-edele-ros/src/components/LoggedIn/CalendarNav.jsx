import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AvailableLessons from "./AvailableLessons";

const CalendarNav = () => {
  const [open, setOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true)

  // handle dropdown on Calendar (beschikbare lessen > jou lessen)
  const handleOpen = () => {
    setOpen(!open);
  };

  
  return (
    <div className="border-b-[1.5px] border-gray-300 bg-gray-200 px-28 py-3 font-sourceSansPro font-light text-gray-600">
      <div
        className="flex cursor-pointer items-center justify-end space-x-4"
        onClick={handleOpen}
      >
        <p className="font-bold tracking-wide text-gray-500">
          Beschikbare lessen
        </p>
        <BsThreeDotsVertical className="text-xl" />
      </div>
      <div>
        {!open ? null : (
          <ul className="absolute right-16 top-[152px] rounded-lg border  border-gray-300 bg-gray-200 last:pb-0">
            <li className="cursor-pointer rounded-t-lg px-4 py-2 pr-20 hover:bg-gray-300">
              Beschikbare lessen
            </li>
            <li className="cursor-pointer rounded-b-lg px-4 py-2 pr-20 hover:bg-gray-300">
              Uw lessen
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CalendarNav;
