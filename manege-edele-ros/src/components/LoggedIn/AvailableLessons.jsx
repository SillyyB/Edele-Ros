import React, { useState } from "react";
import { GiTeacher } from "react-icons/gi";

const AvailableLessons = () => {
  const [availableLessons, setAvailableLessons] = useState([
    { name: "Gallopperen", date: "06/02/2023", teacher: "Plooien" },
    { name: "Springen", date: "06/02/2023", teacher: "van Riet" },
  ]);
  const [myLessons, setMyLessons] = useState([]);

  const handleClick = (index) => {
    console.dir(availableLessons[index]);
    setMyLessons([...myLessons, availableLessons[index]]);
    toggleDisabledButton(availableLessons[index]);
  };
  const [isDisabled, setIsDisabled] = useState("");
  const toggleDisabledButton = () => setIsDisabled(!isDisabled);

  return (
    <ul>
      {availableLessons.map((lesson, index) => (
        <div
          key={index}
          className="shadow-lg bg-zinc-200 rounded p-4 flex flex-col mb-4 "
        >
          <div className="flex justify-between pb-4">
            <h1 className="text-2xl tracking-wide">{lesson.name}</h1>
            <p className="text-lg bg-zinc-400 border-4  px-2.5 py-2 rounded-full tracking-wider text-white">
              3/6
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <p>
                <GiTeacher className="text-3xl" />
              </p>
              <p className="text-xl text-zinc-500">{lesson.teacher}</p>
            </div>
            <p className="text-lg text-zinc-500">{lesson.date}</p>
          </div>
          <div className="flex justify-end">
            <button
              value={index}
              onClick={(e) => handleClick(e.target.value)}
              className={
                isDisabled
                  ? "bg-emerald-900 px-5 py-1 rounded text-gray-500 tracking-wider"
                  : "bg-emerald-700 px-5 py-1 rounded text-white tracking-wider"
              }
            >
              {isDisabled ? "Ik doe niet mee" : "Doe mee"}
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default AvailableLessons;
