import React from "react";

import { useState } from "react";

function Login({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourEmail@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      <button onClick={() => onFormSwitch("register")}>
        Don't have an account? register here
      </button>
    </>
  );
}

export default Login;
