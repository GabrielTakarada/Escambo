import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Logo from "../../assets/Logo.png";

export default function Appbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#FB7810",
        borderBottom: "solid 1px #333",
        boxShadow: "1px 1px 4px 2px #333",
        display: "flex",
        position: ["sticky", "-webkit-sticky"],
      }}
    >
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ maxWidth: "195px" }}></img>
        <Box sx={{ flexGrow: 1 }} />
        <Link to="/main">
          <IconButton
            style={{ color: "#DCDCDC" }}
            sx={{ display: "block", marginTop: "4px" }}
          >
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/signin">
          <IconButton
            style={{ color: "#DCDCDC" }}
            sx={{ display: "block", marginTop: "4px" }}
          >
            <ExitToAppIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
