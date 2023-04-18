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
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Kenko plus logo." />
      </header>
      <section>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleLogIn}>Log In</button>
        {logIn ? <p>login</p> : <SignUp />}
      </section>
    </div>
  );
}

export default App;
