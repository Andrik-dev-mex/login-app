import React, {useState}from 'react';
import Navbar from "./layout/NavBar";
import LoginButon from './components/LoginButton/LoginButton';

function App() {

  const [user, setUser] = useState(null);

  const onLogin = (user) => { 
    
    setUser(user)
  };

  return (
    <div className = "container-fluid">
      <Navbar/>
    <div className="row" style = {{padding: '24px 16px'}}>
      {!user && <LoginButon onLogin = {onLogin}/>}
    </div>
    </div>
  );
}

export default App;
