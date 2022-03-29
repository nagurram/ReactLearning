import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Nav Bar
        <span className="badge badge-pill badge-secondary m-1">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
