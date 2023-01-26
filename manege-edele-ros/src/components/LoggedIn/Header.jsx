import React, { useState } from "react";
import LogoutButton from "../logoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";

import { AiFillCaretDown } from "react-icons/ai";

import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    isAuthenticated && (
      <main className="flex justify-between pt-8">
        <Navigation />

        <div onClick={handleOpen} className="cursor-pointer relative">
          <div className="flex justify-between">
            <div className="absolute -top-4">
              <div className="flex items-center bg-sec_backgr rounded">
                <p className="pl-3 tracking-wide">{user.given_name}</p>
                <img
                  alt="profile_picture"
                  src={user.picture}
                  className="rounded-full w-10 h-10 "
                />
                <AiFillCaretDown className="ml-4" />
              </div>
              <div className="bg-sec_backgr rounded">
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
