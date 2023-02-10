import React, { useState } from "react";
import CreateNewClass from "./Lessons/CreateNewClass";
import LessonDescriptionBar from "./Lessons/LessonDescriptionBar";

const Calendar = () => {
  const nextId = "";

  // state
  const [name, setName] = useState();
  const [isDisabled, setIsDisabled] = useState({});
  const [myLessons, setMyLessons] = useState([]);

  // state with array of objects
  const [availableLessons, setAvailableLessons] = useState([
    {
      name: "Gallopperen",
      date: "06.02.2023",
      time: "12:00 - 13:30",
      teacher: "van Hop",
      id: 1,
    },
    {
      name: "Springen",
      date: "08.03.2023",
      time: "10:00 - 11:30",
      teacher: "Rieter",
      id: 2,
    },
  ]);

  // handle button click functions
  const handleClick = (index) => {
    // join class & show new list with your lessons
    setMyLessons([...myLessons, availableLessons[index]]);
    // prevent mulitple clicks
    isDisabled[availableLessons[index].id] = true
    setIsDisabled(isDisabled);
    console.log(isDisabled)
  };

  const handleRemoveLesson = (index) => {
    // delete lesson from 'your lessons'
    setMyLessons((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
    // enable button
    isDisabled[myLessons[index].id] = false
    setIsDisabled(isDisabled);
console.log(index)
    console.log(isDisabled)
  };

  const handleCreateClass = () => {
    setAvailableLessons([...availableLessons, { teacher: "Perenboom" }]);
  };

  return (
    <div className="">
      {/* <CalendarNav /> */}

      <div>
        <LessonDescriptionBar
          title="Doe mee aan de les!"
          description="Schrijf u in voor de les door op de `Doe mee` knop te klikken!"
        />
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
              <tr
                className={
                  isDisabled[lesson.id]
                    ? "font-medium tracking-tight"
                    : "bg-gray-50 font-medium  tracking-tight"
                }
              >
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
                  <button
                    value={index}
                    onClick={(e) => handleClick(e.target.value)}
                    disabled={isDisabled[lesson.id]}
                    className={
                      isDisabled[lesson.id]
                        ? "cursor-not-allowed rounded  bg-gray-400 py-1 px-5 font-light text-gray-200"
                        : "rounded bg-gray-200 py-1 px-5 font-light text-emerald-500 hover:bg-gray-300 hover:text-emerald-700"
                    }
                  >
                    {isDisabled[lesson.id]
                      ? "u bent ingeschreven!"
                      : "doe mee aan deze les"}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <LessonDescriptionBar
        icon="FiUserCheck"
        title="Uw lessen"
        description="Hier ziet u alle lessen waar u voor bent ingeschreven"
      />

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
        {myLessons.map((lesson, index) => (
          <tbody className="border-b odd:bg-gray-50 even:bg-white">
            <tr className="font-medium tracking-tight ">
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
              <td className="py-2 px-4  text-gray-500">
                <button
                  value={index}
                  onClick={() => handleRemoveLesson(index)}
                  className="rounded bg-red-700 px-5 py-1 tracking-wider text-white hover:bg-red-800"
                >
                  Schrijf mij uit
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

     {/* <CreateNewClass /> */}
      <div className="pt-40">
        <button onClick={handleCreateClass}>add</button>
      </div>
    </div>
  );
};

export default Calendar;
