import React, { useRef, useEffect } from "react";
import Header from "../Header";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { ValidateEmail, ValidatePassword } from "../../reuseCode";
import { auth, logInWithEmailAndPassword, logout } from "../../firebase";
import {
  Card,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function LogIn() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  // const { signup, currentUser } = useAuth();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const logIn = (e) => {
    e.preventDefault();
    ValidateEmail(emailRef.current.value);
    ValidatePassword(passwordRef.current.value);
    logInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="logContainer wrapper ">
      <Header />
      <Card
        style={{ backgroundColor: "rgba(237, 242, 251, 0.5)" }}
        sx={{ borderRadius: "20px" }}
      >
        {/* {JSON.stringify(currentUser)} */}
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <div>
          <h2>Welcome Back 👋</h2>
          <h3>Please sign in below</h3>

          <FormControl
            sx={{ m: 1, width: "25ch" }}
            style={{ backgroundColor: "rgba(237, 242, 251, 0.7)" }}
            variant="filled"
          >
            <OutlinedInput
              id="email"
              type="email"
              placeholder="Your Email"
              required
              inputRef={emailRef}
              startAdornment={
                <InputAdornment position="start">
                  <HiOutlineMail />
                </InputAdornment>
              }
            ></OutlinedInput>
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="filled"
            style={{ backgroundColor: "rgba(237, 242, 251, 0.7)" }}
          >
            <OutlinedInput
              id="password"
              type="password"
              placeholder="Password"
              required
              inputRef={passwordRef}
              startAdornment={
                <InputAdornment position="start">
                  <RiLockPasswordLine />
                </InputAdornment>
              }
            ></OutlinedInput>
          </FormControl>

          <div className="center signContainer wrapper">
            <Button
              disabled={loading}
              variant="contained"
              value="login"
              onClick={logIn}
            >
              Login
            </Button>
          </div>
          <NavLink to="/reset">Forgot Passord?</NavLink>
        </div>
        <p className="loginQ">
          Don't have an account? <NavLink to="/signup">Sign Up Here</NavLink>
        </p>
        <button onClick={logout}>Logout</button>
      </Card>
    </div>
  );
}
