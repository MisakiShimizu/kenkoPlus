import React, { useRef, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Card,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp() {
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup, currentUser } = useAuth();
  const [user, loading, error] = useAuthState(auth);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   console.log(error);
  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match");
  //   }

  //   // try {
  //   //   setError("");
  //   //   setLoading(true);
  //   //   // await signup(
  //   //   //   nameRef.current.value,
  //   //   //   emailRef.current.value,
  //   //   //   passwordRef.current.value
  //   //   // );
  //   // } catch {
  //   //   // setError("Failed to create an account");
  //   // }
  //   setLoading(false);
  // }
  const logIn = () => {
    if (emailRef.current.value && passwordRef.current.value)
      registerWithEmailAndPassword(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate.replace("/App");
  }, [user, loading]);
  return (
    <div className="logContainer wrapper ">
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
          <h3>Please login below</h3>

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
              type="submit"
              variant="contained"
              value="register"
              onClick={logIn}
            >
              Register
            </Button>
          </div>
        </div>
        <p className="loginQ">
          Don't have an account?{" "}
          <NavLink to="./SignUp.js">Create one now!</NavLink>
        </p>
      </Card>
    </div>
  );
}
