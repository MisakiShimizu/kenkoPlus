import logo from "../styles/sass/assets/Plugin icon - 1 (1).png";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  //   IconButton,
  Menu,
  //   Avatar,
  //   Button,
  //   MenuItem,
} from "@mui/material";

export default function Header() {
  return (
    <div
    // position="static"
    // style={{ background: "rgba(237, 242, 251, 0.5)" }}
    >
      <Toolbar disableGutters>
        <img src={logo} alt="Kenko plus logo." />
      </Toolbar>
    </div>
    // <header className="header wrapper">
    //   <img src={logo} alt="Kenko plus logo." />
    // </header>
  );
}
