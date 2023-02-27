import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../img/logo.png";
import { slide as Menu } from "react-burger-menu";

function Header() {
  // const pathname = window.location.pathname;


  return (
    <div>
      {/* Responsive sidepbar for smaller devices */}
      <Menu disableAutoFocus>
        <Stack className="do-menu" direction="column" spacing={1}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <br></br>

          <Link className="" to="/about" style={{ textDecoration: "none" }}>
            About Us
          </Link>
          <br></br>

          <Link to="/event" style={{ textDecoration: "none" }}>
            Event
          </Link>
          <br></br>

          <Link to="/gallery" style={{ textDecoration: "none" }}>
            Gallery
          </Link>
          <br></br>

          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
        </Stack>
      </Menu>
      {/* Normal Navbar */}
      <Box className="do-header">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" />
          Friendship Center
        </Typography>
        <Stack className="do-menu" direction="row" spacing={2}>
          <Link to="/" style={{ textDecoration: "None" }}>
            Home
          </Link>
          <Link className="" to="/about" style={{ textDecoration: "none" }}>
            About Us
          </Link>
          <Link to="/event" style={{ textDecoration: "none" }}>
            Event
          </Link>
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            Gallery
          </Link>
          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
        </Stack>
      </Box>
    </div>
  );
}

export default Header;
