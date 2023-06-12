import "../styles/sass/styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import SignUp from "./Auth/SignUp";
import Header from "./Header";

// import { AuthProvider } from "../Context/AuthContext";

function App() {
  const [logIn, setLogIn] = useState(false);

  return (
    <Router>
      <div className="app">
        {/* <Container style={{ background: "rgba(237, 242, 251, 0.5)" }}> */}
        <Header />
        <SignUp />
        <Routes>
          <Route exact path="/" component={SignUp} />
        </Routes>
        {/* </Container> */}
      </div>
    </Router>
  );
}

export default App;
