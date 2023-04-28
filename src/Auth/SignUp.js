import React from "react";
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { HiOutlineMail, HiOutlineUser, HiArrowRight } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp() {
  return (
    <div className="logContainer ">
      <form action="">
        <h2>Create Account</h2>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="name">Your Name</InputLabel>
          <OutlinedInput
            id="name"
            type="text"
            placeholder="Your Name"
            startAdornment={
              <InputAdornment position="start">
                <HiOutlineUser />
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="email">Your Email</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            placeholder="Your Email"
            startAdornment={
              <InputAdornment position="start">
                <HiOutlineMail />
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="password">Your Password</InputLabel>
          <OutlinedInput
            id="password"
            type="password"
            placeholder="Password"
            startAdornment={
              <InputAdornment position="start">
                <RiLockPasswordLine />
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="password2">Re-enter Your Password</InputLabel>
          <OutlinedInput
            id="password2"
            type="password"
            placeholder="Re-enter Password"
            startAdornment={
              <InputAdornment position="start">
                <RiLockPasswordLine />
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
        {/* 
        <label htmlFor="password">
          <RiLockPasswordLine />
          Password
        </label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password2">
          <RiLockPasswordLine />
          Re-enter Password
        </label>
        <input type="password" name="password2" id="password2" /> */}
      </form>
    </div>
  );
}
