import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/logoutButton";
import Profile from "./components/Profile";
import Logo from "./components/Logo";
import Header from "./components/LoggedIn/Header";

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <main className="bg-backgr px-4 lg:px-60 font-cormorant font-bold">
      <Logo />
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>loading...</p>}
      {!error && !isLoading && (
        <>
          <Header />
          <div className="flex justify-end">
            <LoginButton />
          </div>

          {/* <LogoutButton /> */}
          <Profile />
        </>
      )}
    </main>
  );
}

export default App;
