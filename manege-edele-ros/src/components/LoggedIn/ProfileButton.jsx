import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";
import LogoutButton from "../logoutButton";

const ProfileButton = () => {
  const { user, isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div onClick={handleOpen} className="relative cursor-pointer ">
      <div className="flex justify-between">
        <div className="absolute -top-1 pr-6">
          <div className="flex items-center rounded-full bg-gray-200 pr-6 py-[1.5px]">
            <img
              alt="profile_picture"
              src={user.picture}
              className="h-8 w-8 rounded-full "
            />
            <p className="pl-4 tracking-wide">{user.given_name}</p>
            <AiFillCaretDown className="ml-4" />
          </div>
          <div className="rounded">
            {open ? (
              <ul>
                <li>
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  <LogoutButton />
                  <LoginButton />
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
