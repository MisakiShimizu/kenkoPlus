import React, { useRef, useState } from "react";
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(error);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch {
      // setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="logContainer ">
      {JSON.stringify(currentUser)}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      <form action="" onSubmit={handleSubmit}>
        <h2>Hello 👋</h2>
        <h3>Please sign up below</h3>

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
            disabled={loading}
            type="submit"
            variant="contained"
            value="register"
          >
            Register
          </Button>
          {/* <p className="lineStyle">or</p>
          <Button
            onClick={handleLogIn}
            variant={logIn ? "contained" : "text"}
            value="logIn"
          >
            Log In
          </Button> */}
        </div>
      </form>
      <p className="loginQ">
        Already have an account? <a href="#">Login here</a>
      </p>
    </div>
  );
}
