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
    { name: "Gallopperen", date: "06/02/2023", teacher: "Plooien" },
    { name: "Springen", date: "06/02/2023", teacher: "van Riet" },
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

      <div className="">
        <table className="w-full table-auto font-sans font-normal ml-24">
          <thead className="">
            <tr className="text-md border-b  uppercase  tracking-tight text-gray-600">
              <th className="w-1/3 p-4" align="start">
                Datum & tijd
              </th>
              <th className="w-1/3 p-4" align="start">
                Instructeur
              </th>
              <th className="w-1/3 p-4" align="start">
                Training
              </th>
            </tr>
          </thead>
          <tbody className="border-b">
            <tr className="font-medium tracking-tight">
              <td className="flex flex-col py-2 px-4">
                <p className="pb-1 text-gray-500">Mo. 06.02.2023</p>
                <p className="pb-1 text-gray-400">12:00 - 13:30</p>
              </td>
              <td className="py-2 px-4">van Hop</td>
              <td className="py-2 px-4">Springen</td>
            </tr>
          </tbody>
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

        <div className="">
          <h2 className="mb-2 text-3xl uppercase">Available lessons</h2>
          <p className="text-zinc-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            consectetur saepe dolore.
          </p>
        </div>
        {/* map available lessons */}
        <ul className="w-2/3">
          {availableLessons.map((lesson, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col rounded bg-zinc-200 p-4 shadow-lg "
            >
              <div className="flex justify-between pb-4">
                <h1 className="text-2xl tracking-wide">{lesson.name}</h1>
                <p className="rounded-full border-4 bg-zinc-400  px-2.5 py-2 text-lg tracking-wider text-white">
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
                      ? "rounded bg-emerald-900 px-5 py-1 tracking-wider text-gray-500"
                      : "rounded bg-emerald-700 px-5 py-1 tracking-wider text-white"
                  }
                >
                  {isDisabled ? "Ik doe niet mee" : "Doe mee"}
                </button>
              </div>
            </div>
          ))}
        </ul>

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
