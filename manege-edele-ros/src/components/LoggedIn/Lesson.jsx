import React from "react";

const Lesson = () => {
  return (
    <div className="shadow-lg bg-zinc-200 rounded p-4 flex flex-col ">
      <div className="flex justify-between flex-row-reverse pb-4">
        <h1 className="text-2xl tracking-wide">Gallopperen</h1>
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
  );
};

export default Lesson;
