import "../styles/sass/styles.css";
import React, { useState } from "react";
import logo from "../styles/sass/assets/Plugin icon - 1 (1).png";
import SignUp from "../Auth/SignUp";

import { Button, Card } from "@mui/material";
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
        <Card>
          {logIn ? <p>login</p> : <SignUp />}
          <div className="center signContainer wrapper">
            <Button
              onClick={handleSignUp}
              variant={logIn ? "text" : "contained"}
              value="register"
              fullWidth
            >
              Register
            </Button>
            <p className="lineStyle">or</p>
            <Button
              onClick={handleLogIn}
              variant={logIn ? "contained" : "text"}
              value="logIn"
              fullWidth
            >
              Log In
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default App;
