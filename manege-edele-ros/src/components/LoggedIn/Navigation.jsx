import React from "react";
import { Link } from "react-router-dom";
import ProfileButton from "./ProfileButton";

const Navigation = () => {
  return (
    <ul className="font-sourceSansPro mr-20 flex justify-center space-x-20 text-lg font-light">
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="calendar">Calendar</Link>
      </li>
      <li>
        <ProfileButton />
      </li>
    </ul>
  );
};

export default Navigation;
