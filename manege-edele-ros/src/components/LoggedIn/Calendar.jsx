import React, { useState } from "react";
import Lesson from "./Lesson";

const Calendar = () => {
  let nextId = 0;

  const [name, setName] = useState("");
  const [myLessons, setMyLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState();

  return (
    <div className="py-20">
      {/* title */}
      <div className="pt-20 pb-10">
        <h2 className="text-3xl uppercase mb-2">Available lessons</h2>
        <p className="text-zinc-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          consectetur saepe dolore.
        </p>
      </div>

      {/* upcoming lessons */}
      <div>
        <h1 className="text-2xl pb-6">Available Lessons</h1>

        <div>
          <p>LessonTitle</p>
          <p>date</p>
          <p>teacher</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button
            onClick={() => {
              setName("");
              setMyLessons([...myLessons, { id: nextId++, name: name }]);
            }}
          >
            Join Lesson
          </button>
        </div>

        <h1 className="text-2xl mb-4 mt-8">Your lessons</h1>
        {/* map */}
        <ul>
          {myLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="shadow-lg bg-zinc-200 rounded p-4 flex flex-col "
            >
              <div className="flex justify-between flex-row-reverse pb-4">
                <h1 className="text-2xl tracking-wide">{lesson.name}</h1>
                <p className="text-lg bg-zinc-400 border-4  px-2.5 py-2 rounded-full tracking-wider text-white">
                  3/6
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-zinc-500">leraar: Plooi</p>
                <p className="text-lg text-zinc-500">datum: 1/31/2023</p>
              </div>
              <div className="flex justify-end">
                <button className="bg-emerald-700 px-5 py-1 rounded text-white tracking-wider">
                  Doe mee
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* <Lesson /> */}
    </div>
  );
};

export default Calendar;
