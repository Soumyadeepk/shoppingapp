import React from "react";
import "./mennav.css";
import { NavLink } from "react-router-dom";
const MenNav = () => {
  return (
    <div className="mennav">
      <ul className="mnavmenu">
        <li>
          <NavLink className="mnavlist" to="/men">
            Tshirt
          </NavLink>
        </li>
        <li>
          <NavLink className="mnavlist" to="/shirt">
            Shirt
          </NavLink>
        </li>
        <li>
          <NavLink className="mnavlist" to="/trouser">
            Trouser
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenNav;
