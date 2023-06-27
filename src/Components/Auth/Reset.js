import React, { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
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

export default function Reset() {
  const emailRef = useRef();

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const reset = (e) => {
    e.preventDefault();
    sendPasswordReset(emailRef);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);
  return (
    <div>
      <Card
        style={{ backgroundColor: "rgba(237, 242, 251, 0.5)" }}
        sx={{ borderRadius: "20px" }}
      >
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <div>
          <h2>Please type in your email below to reset your password</h2>

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

          <div className="center signContainer wrapper">
            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              value="reset"
              onClick={reset}
            >
              Reset Password
            </Button>
          </div>
          <p>
            Don't have an account? <NavLink to="/signup">Sign up here</NavLink>
          </p>
        </div>
      </Card>
    </div>
  );
}
