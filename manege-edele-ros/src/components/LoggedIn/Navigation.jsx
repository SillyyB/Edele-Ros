import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="flex justify-center space-x-20 font-semibold text-xl">
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="calendar">Calendar</Link>
      </li>
      <li>test</li>
    </ul>
  );
};

export default Navigation;
