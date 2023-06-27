import React, { useRef, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Card,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { ValidateEmail, ValidatePassword } from "../../reuseCode";
import Header from "../Header";

export default function SignUp() {
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup, currentUser } = useAuth();
  const [user, loading, error] = useAuthState(auth);

  const signUp = () => {
    if (!nameRef.current.value) alert("Please enter name");
    ValidateEmail(emailRef.current.value);
    ValidatePassword(passwordRef.current.value);
    if (
      nameRef.current.value &&
      emailRef.current.value &&
      passwordRef.current.value
    )
      registerWithEmailAndPassword(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);
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
          <h2>Hello 👋</h2>
          <h3>Please sign up below</h3>

          <FormControl
            variant="standard"
            sx={{ m: 1, width: "25ch" }}
            style={{ backgroundColor: "rgba(237, 242, 251, 0.7)" }}
          >
            <OutlinedInput
              id="name"
              type="text"
              placeholder="Your Name"
              required
              inputRef={nameRef}
              startAdornment={
                <InputAdornment position="start">
                  <HiOutlineUser />
                </InputAdornment>
              }
            ></OutlinedInput>
          </FormControl>

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
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="filled"
            style={{ backgroundColor: "rgba(237, 242, 251, 0.7)" }}
          >
            <OutlinedInput
              id="passwordConfirm"
              type="password"
              placeholder="Re-enter Password"
              required
              inputRef={passwordConfirmRef}
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
              type="submit"
              variant="contained"
              value="register"
              onClick={signUp}
            >
              Register
            </Button>
          </div>
        </div>
        <p className="loginQ">
          Already have an account? <NavLink to="/login">Login Here</NavLink>
        </p>
      </Card>
    </div>
  );
}
