import React from "react";
import { NavLink } from "react-router-dom";
import { FaBiking } from "react-icons/fa";
import { IconContext } from "react-icons";

import "../styles/NavMain.css";

const NavMain = () => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <nav className="NavMain">
        <NavLink exact to="/">
          <FaBiking className="bike-logo" />
        </NavLink>
        <div className="navbar-links">
          <NavLink className="link" exact to="/bikes">
            bikes
          </NavLink>
          <NavLink className="add-btn" exact to="/bikes/create">
            + new bike
          </NavLink>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default NavMain;
