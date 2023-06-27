import logo from "../styles/sass/assets/Plugin icon - 1 (1).png";

import { Link, useLocation } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

export default function Header() {
  let location = useLocation();
  const [signLink, setSignLink] = useState();

  // handles display of signin/login state
  useEffect(() => {
    if (window.location.pathname === "/") {
      return setSignLink(
        <ul className="header">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      );
    } else {
      setSignLink(<></>);
    }
  }, [location]);
  return (
    <div className="wrapper">
      <Toolbar disableGutters className="headerContainer">
        <Link to="/">
          <button className="logo">
            <img src={logo} alt="Kenko plus logo." />
          </button>
        </Link>
        {signLink}
      </Toolbar>
    </div>
  );
}
