import React from "react";
import "../Men/mennav.css";
import { NavLink } from "react-router-dom";
const MenNav = () => {
  return (
    <div className="mennav">
      <ul className="mnavmenu">
        <li>
          <NavLink className="mnavlist" to="/womentshirt">
            Tshirt
          </NavLink>
        </li>
        <li>
          <NavLink className="mnavlist" to="/womendress">
            Dresses
          </NavLink>
        </li>
        <li>
          <NavLink className="mnavlist" to="/womentrouser">
            Trouser
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenNav;
