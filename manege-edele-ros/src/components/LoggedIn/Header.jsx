import React, { useState } from "react";
import LogoutButton from "../logoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";

import { AiFillCaretDown } from "react-icons/ai";

import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "../Logo";
import CalendarNav from "./CalendarNav";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    isAuthenticated && (
      <main className="flex py-6 lg:px-28 bg-gray-100">
        <div className="flex grow items-center justify-between ">
          <Link to="home">
            <Logo />
          </Link>
          <Navigation />
        </div>

     

        <div onClick={handleOpen} className="relative cursor-pointer">
          <div className="flex justify-between">
            <div className="absolute -top-4">
              <div className="flex items-center rounded bg-sec_backgr">
                <p className="pl-3 tracking-wide">{user.given_name}</p>
                <img
                  alt="profile_picture"
                  src={user.picture}
                  className="h-10 w-10 rounded-full "
                />
                <AiFillCaretDown className="ml-4" />
              </div>
              <div className="rounded bg-sec_backgr">
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
      </main>
    )
  );
};

export default Header;
