import React, { useState } from "react";
import LogoutButton from "../logoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import Profile from "../Profile";

import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };



  return (
    isAuthenticated && (
      <main className="px-12">
        {/* nav */}
        <div onClick={handleOpen} className="cursor-pointer relative">
          <div className="flex justify-between">
            <div className="">
              <div className="flex items-center bg-sec_backgr rounded">
                <p className="pl-3 tracking-wide">{user.given_name}</p>
                <img src={user.picture} className="rounded-full w-10 h-10 " />
                <AiFillCaretDown className="ml-4" />
              </div>
              <div className="bg-sec_backgr rounded">
                {open ? (
                  <ul>
                    <li>
                      <button>Your profile</button>
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
