import React from "react";
import { AppBar, Toolbar, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tabs  >
            <NavLink to={"/"} id="tabs" >Home</NavLink>
          </Tabs>
          <Tabs>
            <NavLink to={"/about"} id="tabs">About</NavLink>
          </Tabs>
          <Tabs>
            <NavLink to={"/service"} id="tabs">Service</NavLink>
          </Tabs>
          <Tabs>
            <NavLink to={"/portfolio"} id="tabs">Portfolio</NavLink>
          </Tabs>
          <Tabs>
            <NavLink to={"/about"} id="tabs">About</NavLink>
          </Tabs>
          <Tabs>
            <NavLink to={"/contact"} id="tabs">Contact</NavLink>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
