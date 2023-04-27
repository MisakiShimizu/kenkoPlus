import React from "react";

import { HiOutlineMail, HiOutlineUser, HiArrowRight } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp() {
  return (
    <div className="logContainer ">
      <form action="">
        <h2>Create Account</h2>
        <label htmlFor="name">Your Name</label>
        <HiOutlineUser className="logIcon" />
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <label htmlFor="email">
          <HiOutlineMail />
          Email
        </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">
          <RiLockPasswordLine />
          Password
        </label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password2">
          <RiLockPasswordLine />
          Re-enter Password
        </label>
        <input type="password" name="password2" id="password2" />
      </form>
    </div>
  );
}
