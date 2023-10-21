import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

export default function Appbar() {
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
    </Box>
  );
}
