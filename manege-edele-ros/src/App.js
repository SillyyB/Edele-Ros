import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import Logo from "./components/Logo";
import Header from "./components/LoggedIn/Header";

// React Navigation
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/LoggedIn/Home";
import Calendar from "./components/LoggedIn/Calendar";

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <main className="bg-backgr px-4 lg:px-96 font-cormorant font-bold">
      <Link to="home">
        <Logo />
      </Link>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>loading...</p>}
      {!error && !isLoading && (
        <>
          <Header />
          <div className="flex justify-end">
            <LoginButton />
          </div>

          {/* backslash means that <Navigation /> will be the first to render */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
