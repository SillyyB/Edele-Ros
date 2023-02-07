import React, { useState } from "react";
import Lesson from "./Lesson";
import { GiTeacher } from "react-icons/gi";
import AvailableLessons from "./AvailableLessons";
import CalendarNav from "./CalendarNav";

const Calendar = () => {
  // state
  const [name, setName] = useState("");
  const [isDisabled, setIsDisabled] = useState("");
  const [myLessons, setMyLessons] = useState([]);
  const toggleDisabledButton = () => setIsDisabled(!isDisabled);

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
    console.dir(availableLessons[index]);
    setMyLessons([...myLessons, availableLessons[index]]);
    toggleDisabledButton(availableLessons[index]);
  };
  const handleRemoveLesson = (index) => {
    setMyLessons((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="">
      <CalendarNav />

      <div>
        <table className="w-full table-auto font-sourceSansPro font-normal">
          <thead className="">
            <tr className="text-md border-b  uppercase  tracking-wide text-gray-600">
              <th className="w-1/6 px-4 py-5 pl-28" align="center">
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
                  <p className="pb-1 text-gray-500" >
                    <span className="pr-2">Mo.</span> {lesson.date}
                  </p>
                  <p className="text-gray-400 pl-3" align="start">{lesson.time}</p>
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

      {/* title */}
      <div className="pt-80 ">
        <div>
          {/* map your selected lessons */}
          <div className="mb-20">
            <h2 className="mb-2 text-3xl uppercase">Uw lessen</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              consectetur saepe dolore.
            </p>
          </div>
          {/* lessons map over  */}
          <ul>
            {myLessons.map((lesson, index) => (
              <div key={index} className="border-b-2 border-black">
                <h1 className="text-2xl uppercase tracking-wide">
                  {lesson.name}
                </h1>
                <p className="text-lg tracking-wider text-gray-600">
                  {lesson.date}
                </p>

                <p className="">3/6</p>
                <div className="flex">
                  <p>
                    <GiTeacher className="text-3xl" />
                  </p>
                  <p className="text-xl text-zinc-500">{lesson.teacher}</p>
                </div>
                <div className="flex justify-end">
                  <button
                    value={index}
                    onClick={() => handleRemoveLesson(index)}
                    className="rounded bg-red-700 px-5 py-1 tracking-wider text-white"
                  >
                    Schrijf mij uit
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>

        {/* create lesson */}
        {/* <div>
          <p>LessonTitle</p>
          <p>date</p>
          <p>teacher</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button
            onClick={() => {
              setName("");
              setAvailableLessons([
                ...availableLessons,
                { id: nextId++, name: name },
              ]);
            }}
          >
            Join Lesson
          </button>
        </div> */}
      </div>

      {/* <Lesson /> */}
    </div>
  );
};

export default Calendar;
