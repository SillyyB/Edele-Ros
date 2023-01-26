import React, { useState } from "react";

const Calendar = () => {
  const [availableLessons, setAvailableLessons] = useState([
    {
      id: 1,
      name: "gallopperen",
      teacher: "van Bergen",
    },
  ]);

  const handleClick = () => {};
  return (
    <div className="mt-20">
      {/* title */}
      <div className="">
        <h2 className="text-3xl uppercase mb-2">Available lessons</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          consectetur saepe dolore.
        </p>
      </div>

      {/* upcoming lessons */}
      <ul>
        {/* map over the users array */}
        {availableLessons.map((lesson) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          <div key={lesson.id}>
            <p>{lesson.name}</p>
            <p>{lesson.teacher}</p>
          </div>
        ))}
      </ul>
      <button onClick="">Doe mee aan deze les</button>
    </div>
  );
};

export default Calendar;
