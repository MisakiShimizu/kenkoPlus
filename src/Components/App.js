import "../styles/sass/styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./Home";
import SignUp from "./Auth/SignUp";
import LogIn from "./Auth/LogIn";
import Header from "./Header";

// import { AuthProvider } from "../Context/AuthContext";

function App() {
  const [logIn, setLogIn] = useState(false);

  return (
    <Router>
      <div className="app">
        {/* <Container style={{ background: "rgba(237, 242, 251, 0.5)" }}> */}
        <Header />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<LogIn />} />
        </Routes>
        {/* </Container> */}
      </div>
    </Router>
  );
}

export default App;
