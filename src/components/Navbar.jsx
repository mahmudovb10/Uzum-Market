import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar">
        <div className="navbar-start">
          <a href="">
            <img src="/logo.png" alt="" className="w-70" />
          </a>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </header>
  );
}

export default Navbar;
