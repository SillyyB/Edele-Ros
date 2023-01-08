import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        className="border-2 rounded border-primary mt-5 px-3 font-bold tracking-wider"
      >
        Sign In
      </button>
    )
  );
};

export default LoginButton;
