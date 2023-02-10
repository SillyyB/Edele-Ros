import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CreateNewClass from "./Lessons/CreateNewClass";

const CalendarNav = () => {
  const [open, setOpen] = useState(false);
  const [openCreateClass, setOpenCreateClass] = useState(false);

  // handle dropdown on Calendar (beschikbare lessen > jou lessen)
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle dropdown on Calendar (beschikbare lessen > jou lessen)
  const handleOpenCreateClass = () => {
    setOpenCreateClass(!openCreateClass);
  };

  return (
    <div className="flex border-b-[1.5px] border-gray-300 bg-gray-200 px-28 py-3 font-sourceSansPro font-light text-gray-600">
      <div className="flex w-full justify-between">
        {/* Available lessons button */}
        <button className="flex" onClick={handleOpen}>
          <p className="font-bold tracking-wide text-gray-500">
            Beschikbare lessen
          </p>
          <BsThreeDotsVertical className="text-xl" />
        </button>
        {/* Create new class button*/}
        <button onClick={handleOpenCreateClass}>
          <p>Les aanmaken</p>
        </button>
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
