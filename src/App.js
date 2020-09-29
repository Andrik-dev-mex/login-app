import React from 'react';
import Navbar from "./layout/NavBar";
import './App.css';
import LoginButon from './components/LoginButton/LoginButton';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LoginButon/>
    </div>
  );
}

export default App;
