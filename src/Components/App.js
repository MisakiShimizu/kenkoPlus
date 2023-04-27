import "../styles/sass/styles.css";
import React, { useState } from "react";
import logo from "../styles/sass/assets/Plugin icon - 1 (1).png";
import SignUp from "../Auth/SignUp";
function App() {
  const [logIn, setLogIn] = useState(false);

  const handleLogIn = () => {
    setLogIn(true);
  };

  const handleSignUp = () => {
    setLogIn(false);
  };
  return (
    <div className="app">
      <header className="header wrapper">
        <img src={logo} alt="Kenko plus logo." />
      </header>
      <section className="wrapper">
        {logIn ? <p>login</p> : <SignUp />}
        <div className="signContainer">
          <button onClick={handleSignUp} className="signButton select">
            Register
          </button>
          <p className="lineStyle">or</p>
          <button onClick={handleLogIn} className="signButton">
            Log In
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
