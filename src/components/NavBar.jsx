import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/chat">Chat</NavLink>
    </nav>
  );
}

export default NavBar;
