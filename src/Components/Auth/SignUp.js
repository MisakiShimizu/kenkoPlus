import React, { useRef } from "react";
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Button,
} from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp({ logIn, setLogIn }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const handleLogIn = () => {
    setLogIn(true);
  };

  const handleSignUp = () => {
    setLogIn(false);
  };
  const handleFormTitle = () => {
    if (logIn === true) {
      return "Welcome back!";
    } else {
      return "Create Account";
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <div className="logContainer ">
      <form action="">
        <h2>{handleFormTitle()}</h2>
        {logIn !== true && (
          <FormControl
            variant="standard"
            sx={{ m: 1, width: "25ch" }}
            style={{ backgroundColor: "rgba(237, 242, 251, 0.7)" }}
          >
            <InputLabel htmlFor="name">Your Name</InputLabel>

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
        )}

        <FormControl
          sx={{ m: 1, width: "25ch" }}
          style={{ backgroundColor: "rgba(237, 242, 251, 0.7)" }}
          variant="filled"
        >
          <InputLabel htmlFor="email">Your Email</InputLabel>
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
          <InputLabel htmlFor="password">Your Password</InputLabel>
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
          <InputLabel htmlFor="passwordConfirm">
            Re-enter Your Password
          </InputLabel>
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
            onClick={handleSignUp}
            variant={logIn ? "text" : "contained"}
            value="register"
          >
            Register
          </Button>
          <p className="lineStyle">or</p>
          <Button
            onClick={handleLogIn}
            variant={logIn ? "contained" : "text"}
            value="logIn"
          >
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
