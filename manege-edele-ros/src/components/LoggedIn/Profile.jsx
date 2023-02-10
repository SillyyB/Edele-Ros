import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logoutButton";
import { BiUserCircle } from "react-icons/bi";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <article className="mx-28 pt-20 font-sourceSansPro ">
        <h2 className="mb-6 text-3xl  font-light text-gray-600">
          Your profile
        </h2>
        <div className="flex justify-between rounded-3xl bg-gray-200 p-8">
          <div className="flex">
            {user?.picture && (
              <img
                className="h-35 w-36 rounded-full"
                src={user.picture}
                alt={user?.name}
              ></img>
            )}
            <div className="pl-8">
              <h2 className="pt-4 text-2xl tracking-wide text-gray-500 ">
                {user?.name}
              </h2>
              <p className="pb-4 text-base font-light tracking-tight text-gray-500">
                {user.email}
              </p>
              {/* <p className="font-light text-gray-500">
                last name: {user.family_name}
              </p> */}
            </div>
          </div>
          <div className="flex items-start uppercase text-red-600">
            <LogoutButton />
          </div>
        </div>
        <ul className="space-y-1 font-light p-8">
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
