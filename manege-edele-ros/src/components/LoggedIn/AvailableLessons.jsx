import React, { useState } from "react";
import { GiTeacher } from "react-icons/gi";

const AvailableLessons = () => {
  const [isDisabled, setIsDisabled] = useState("");
  const [myLessons, setMyLessons] = useState([]);
  const toggleDisabledButton = () => setIsDisabled(!isDisabled);
  const [open, setOpen] = useState(false);

  // state with array of objects
  const [availableLessons, setAvailableLessons] = useState([
    {
      name: "Gallopperen",
      date: "06.02.2023",
      time: "12:00 - 13:30",
      teacher: "van Hop",
    },
    {
      name: "Springen",
      date: "08.03.2023",
      time: "10:00 - 11:30",
      teacher: "Rieter",
    },
  ]);

  // handle button click functions
  const handleClick = (index) => {
    // join class & show new list
    console.dir(availableLessons[index]);
    setMyLessons([...myLessons, availableLessons[index]]);
    toggleDisabledButton(availableLessons[index]);
  };

  return (
    <div>
      <table className="w-full table-auto font-sourceSansPro font-normal">
        <thead className="">
          <tr className="text-md border-b  uppercase  tracking-wide text-gray-600">
            <th className="w-1/6 px-4 py-5 pl-28" align="start">
              Datum & tijd
            </th>
            <th className="w-1/6 p-4 font-sourceSansPro" align="center">
              Instructeur
            </th>
            <th className="p-4 pl-12" align="start">
              Training
            </th>
          </tr>
        </thead>
        {availableLessons.map((lesson, index) => (
          <tbody className="border-b">
            <tr className="font-medium tracking-tight">
              <td className="flex flex-col py-1 px-4 pl-28" align="center">
                <p className="pb-1 text-gray-500" align="start">
                  <span className="pr-2">Mo.</span> {lesson.date}
                </p>
                <p className="text-gray-400" align="start">
                  {lesson.time}
                </p>
              </td>
              <td className="py-2 px-4 text-red-600" align="center">
                {lesson.teacher}
              </td>
              <td className="py-2 px-4 pl-[52px] text-gray-500">
                {lesson.name}
              </td>
              <td className="py-2 px-4 pl-[52px] text-gray-500">
                {" "}
                <button
                  value={index}
                  onClick={(e) => handleClick(e.target.value)}
                  className={
                    isDisabled
                      ? "rounded bg-red-800 py-1 px-5 font-light text-white"
                      : "rounded bg-gray-200 py-1 px-5 font-light text-emerald-800"
                  }
                >
                  Doe mee
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AvailableLessons;
