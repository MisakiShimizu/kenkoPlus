import "../styles/sass/styles.css";
import React, { useState } from "react";
import logo from "../styles/sass/assets/Plugin icon - 1 (1).png";
import SignUp from "./Auth/SignUp";

import { Card } from "@mui/material";
import { AuthProvider } from "../Context/AuthContext";
function App() {
  const [logIn, setLogIn] = useState(false);

  return (
    <AuthProvider>
      <div className="app">
        <header className="header wrapper">
          <img src={logo} alt="Kenko plus logo." />
        </header>
        <section className="wrapper">
          <Card
            style={{ backgroundColor: "rgba(237, 242, 251, 0.5)" }}
            sx={{ borderRadius: "20px" }}
          >
            <SignUp logIn={logIn} setLogIn={setLogIn} />
          </Card>
        </section>
      </div>
    </AuthProvider>
  );
}

export default App;
