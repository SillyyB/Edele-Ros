import Login from "./backend/Login";
// import MainVideo from "./components/MainVideo";

import { useState } from "react";
import Register from "./backend/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      {/* <MainVideo/> */}
    </div>
  );
}

export default App;
