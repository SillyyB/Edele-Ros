import React, { useState } from "react";

const Calendar = () => {
  const [availableLessons, setAvailableLessons] = useState([
    {
      id: 1,
      name: "gallopperen",
      teacher: "van Bergen",
    },
  ]);

  const [myLessons, setMyLessons] = useState([
    {
      id: 2,
      name: "springen",
      teacher: "Plooi",
    },
  ]);

  const handle = () => {};

  const handleClick = () => {
    const newArray = structuredClone(availableLessons);
    const updateLessons = [...myLessons, newArray];
    setMyLessons(updateLessons);
  };

  return (
    <div className="py-20">
      {/* title */}
      <div className="py-20 ">
        <h2 className="text-3xl uppercase mb-2">Available lessons</h2>
        <p className="text-zinc-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          consectetur saepe dolore.
        </p>
      </div>

      {/* upcoming lessons */}
      <ul>
        {availableLessons.map((lesson) => (
          <div key={lesson.id}>
            <p>{lesson.name}</p>
            <p>{lesson.teacher}</p>
          </div>
        ))}
      </ul>
      <button onClick={handleClick}>Doe mee aan deze les</button>

      <ul>
        {myLessons.map((lesson) => {
          <div key={lesson.id}>
            <p>{lesson.name}</p>
            <p>{lesson.teacher}</p>
          </div>;
        })}
      </ul>
    </div>
  );
};

export default Calendar;
