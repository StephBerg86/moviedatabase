import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/discover"
        exact={true}
      >
        Discover movies
      </NavLink>
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/about"
        exact={true}
      >
        About this website
      </NavLink>
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/"
        exact={true}
      >
        Homepage
      </NavLink>
    </div>
  );
}
