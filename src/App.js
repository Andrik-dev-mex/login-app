import React, { useEffect, useState } from "react";
import Navbar from "./layout/NavBar";
import NavUser from "./components/userLoged";
import LoginButon from "./components/LoginButton/LoginButton";
import * as storage from "./utils/storage";


function App() {
  const [user, setUser] = useState(null);

  const onLogin = (user) => {
    storage.setUser(user);
    setUser(user);
  };

  const onLogout = () => {
    storage.clear();
    setUser(null);
  };

  useEffect(() => {
    const checkSession = () => {
      const user = storage.getUser();
      if (user) {
        setUser(user);
      }
    };
    checkSession();
  }, []);

  return (
    <div>
      <Navbar>{user && <NavUser user={user} onLogout={onLogout} />}</Navbar>
      <div className="row" style={{ padding: "24px 16px" }}>
        {!user && <LoginButon onLogin={onLogin} />}
      </div>
    </div>
  );
}

export default App;
