import React from "react";

import { useState } from "react";

const Register = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Full name</label>
          <input
            value={name}
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
          />
        </div>
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
      <button onClick={() => onFormSwitch("login")}>
        Already have an account? Login here
      </button>
    </>
  );
};

export default Register;
