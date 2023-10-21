import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { keyframes } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import IconButton from "@mui/material/IconButton";

const pulse = keyframes`
0% {
  opacity: 0.8;
}
50% {
  opacity: 0.9;
  color: white;
}
100% {
  opacity: 0.8;
}
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  "&:active": {
    animation: `${pulse} 0.5s ease-in-out`,
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        top={0}
        sx={{
          backgroundColor: "#FB7810",
          borderBottom: "2px solid #333",
          zIndex: 1000,
          position: ["sticky", "-webkit-sticky"],
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
            style={{ fontFamily: "serif" }}
            onClick={() => navigate("/main")}
          >
            ESCAMBO
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Pesquisar"
              sx={{ color: "white" }}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Link to="/card">
            <Button Text="+" />
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
    </Box>
  );
}
