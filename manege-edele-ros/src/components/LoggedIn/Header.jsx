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


  return (
    isAuthenticated && (
      <main className="flex py-6 lg:px-28">
        <div className="flex grow items-center justify-between ">
          <Link to="home">
            <Logo />
          </Link>
          <Navigation />
        </div>

       
      </main>
    )
  );
};

export default Header;
